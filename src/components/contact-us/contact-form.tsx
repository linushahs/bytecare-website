import { MessageSentIcon } from "@/assets/filled";
import { useModal } from "@/hooks/use-modal";
import Link from "next/link";
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

export default function ContactUsForm() {
  const { openModal } = useModal();

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

  const onSubmit: SubmitHandler<any> = (values) => {
    openModal({
      view: <MessageSentModal />,
    });
  };

  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col p-4 gap-y-8 md:p-8 bg-surface rounded-xl"
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
                <SelectItem value="newProject">
                  I have a new projects to build
                </SelectItem>
                <SelectItem value="dedicatedTeam">
                  I want a dedicated team for my project
                </SelectItem>
                <SelectItem value="others">Others</SelectItem>
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

      <Button type="submit" className="w-fit">
        Submit Inquiry
      </Button>
    </form>
  );
}

function MessageSentModal() {
  return (
    <div className="py-16">
      <MessageSentIcon className="size-36" />
      <p className="text-xl font-semibold mt-2">Message sent successfully 🌟</p>

      <p className="text-center text-textSecondary">
        Thanks for reaching out to bytecare! 🚀 <br /> {`We've`} received your
        message and will get back to you shortly.
      </p>

      <Link href="/">
        <Button
          variant="outline"
          color="transparent"
          className="py-2.5 mt-4 text-base"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
