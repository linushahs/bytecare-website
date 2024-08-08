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
    try {
      const mailto =
        "mailto:" +
        "suniltraveler2004@gmail.com" +
        "?subject=Inquiry from " +
        values.fullName +
        "&body=Phone Number: " +
        values.phoneNumber +
        "%0D%0A%0D%0A" +
        values.email +
        "%0D%0A%0D%0A" +
        values.projectDetail +
        "%0D%0A%0D%0A" +
        values.work;

      window.location.href = mailto;
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        openModal({
          view: <MessageSentModal />,
        });
      }, 5000);
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
