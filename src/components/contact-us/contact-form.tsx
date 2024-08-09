import { MessageSentIcon } from "@/assets/filled";
import { useModal } from "@/hooks/use-modal";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FormGroup from "../form/form-group";
import { Input } from "../form/input";
import { Label } from "../form/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../form/select";
import { TextArea } from "../form/textarea";
import Button from "../ui/button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { sanityClient } from "@/sanity/lib/client";

interface ContactFormDataType {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectDetail: string;
  work: string;
}

export default function ContactUsForm() {
  const { openModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Sunil Shah",
      phoneNumber: "9811008987",
      email: "sunil12@gmail.com",
      projectDetail: "asdsad",
      work: "erwer",
    },
  });

  const onSubmit: SubmitHandler<ContactFormDataType> = async (data) => {
    try {
      setIsSubmitting(true);

      const newContactFormData = {
        _id: uuidv4(),
        _type: "contactForm",
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        projectDetail: data.projectDetail,
        work: data.work,
      };

      await sanityClient.create(newContactFormData);

      openModal({ view: <MessageSentModal /> });
    } catch (error) {
      console.error("Error submitting job application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-y-8 p-8 bg-surface rounded-xl"
    >
      <FormGroup>
        <Label htmlFor="fullName">
          Your Full Name
          <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="fullName"
          error={errors.fullName}
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby="errorFullName"
          placeholder="eg. John Doe"
          {...register("fullName", {
            required: "Please enter your full name",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phoneNumber">
          Your Phone Number
          <span aria-hidden="true">*</span>
        </Label>
        <Input
          type="number"
          id="phoneNumber"
          aria-required="true"
          error={errors.phoneNumber}
          aria-invalid={!!errors.phoneNumber}
          aria-describedby="errorPhoneNumber"
          className="hide-up-down"
          placeholder="+977 98xxxxxxxx"
          {...register("phoneNumber", {
            required: "Please enter your phone number",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">
          Your Email Address
          <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby="errorEmail"
          error={errors.email}
          placeholder="hello@example.com"
          {...register("email", {
            required: "Please enter your email address",
          })}
        />
      </FormGroup>
      {/* :TODO: find a good solution for this */}
      <FormGroup as="label">
        <p className=" text-md font-medium leading-6 text-white">
          How do you want to work with us?
          <span aria-hidden="true">*</span>
        </p>
        <Controller
          name="work"
          control={control}
          rules={{
            required: "Please choose an option",
          }}
          render={({ field: { onChange, ref } }) => (
            <Select onValueChange={onChange}>
              <SelectTrigger
                ref={ref}
                aria-invalid={!!errors.work}
                aria-required="true"
                aria-describedby="errorWork"
                error={errors.work}
              >
                <SelectValue
                  className="!text-textSecondary"
                  placeholder="Choose one"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="I have a new project to build">
                  I have a new projects to build
                </SelectItem>
                <SelectItem value="I want a dedicated team for my projet">
                  I want a dedicated team for my project
                </SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        {errors.work && (
          <span id="errorWork" className="text-red-400 text-base">
            {errors.work.message}
          </span>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="projectDetail">Tell us more about your project</Label>
        <TextArea placeholder="Message/Project Details" id="projectDetail" />
      </FormGroup>

      <Button isLoading={isSubmitting} type="submit" className="w-fit">
        {isSubmitting ? "Submitting" : "Submit Inquiry"}
      </Button>
    </form>
  );
}

function MessageSentModal() {
  const { closeModal } = useModal();

  return (
    <div className="py-16 flex flex-col items-center gap-2">
      <MessageSentIcon className="size-36" />
      <p className="text-xl font-semibold mt-2">Message sent successfully 🌟</p>

      <p className="text-center text-textSecondary mt-2">
        Thanks for reaching out to bytecare! 🚀 <br /> {`We've`} received your
        message and will get back to you shortly.
      </p>

      <Button
        onClick={closeModal}
        variant="outline"
        color="transparent"
        className="py-2.5 mt-8 text-base"
      >
        Back to Home
      </Button>
    </div>
  );
}
