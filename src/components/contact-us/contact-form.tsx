import React from "react";
import Button from "../ui/button";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "../form/select";
import FormGroup from "../form/form-group";
import { Label } from "../form/label";
import { Input } from "../form/input";
import { TextArea } from "../form/textarea";

export default function ContactUsForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      projectDetail: "",
      work: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (values) => {
    console.log(values);
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
      <Button className="w-fit">Submit Inquiry</Button>
    </form>
  );
}
