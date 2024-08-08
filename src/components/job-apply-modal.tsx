"use client";

import { DeleteIcon, DocumentIcon, UploadIcon } from "@/assets";
import { ApplicationSubmittedIcon } from "@/assets/filled";
import { useModal } from "@/hooks/use-modal";
import { sanityClient } from "@/sanity/lib/client";
import Link from "next/link";
import { forwardRef, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import FormGroup from "./form/form-group";
import { Input } from "./form/input";
import { Label } from "./form/label";
import Button from "./ui/button";

function ApplyNowButton() {
  const { openModal } = useModal();

  return (
    <Button
      onClick={() => openModal({ view: <JobApplyModal /> })}
      showRightArrowIcon
      className="mx-auto group"
      variant="default"
    >
      <span>Apply Now</span>
    </Button>
  );
}

function JobApplyModal() {
  return (
    <div className="pt-7 pb-8 px-9 flex flex-col">
      <p className="text-xl font-bold ">Apply for this position</p>
      <JobApplyForm />
    </div>
  );
}

interface JobApplyFormType {
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
}

function JobApplyForm() {
  const { openModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      resume: null,
    },
  });

  const onSubmit: SubmitHandler<JobApplyFormType> = async (data) => {
    try {
      setIsSubmitting(true);
      let resumeAsset = null;
      let resumeFile = data.resume;

      if (resumeFile) {
        // Upload the file to Sanity
        const fileAsset = await sanityClient.assets.upload("file", resumeFile, {
          filename: resumeFile.name,
        });
        resumeAsset = fileAsset._id;
      }

      // Create a new document in Sanity
      const newJobApplication = {
        _id: uuidv4(),
        _type: "jobApplication",
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phone,
        resume: resumeAsset
          ? { _type: "file", asset: { _ref: resumeAsset } }
          : null,
      };

      await sanityClient.create(newJobApplication);

      openModal({ view: <ApplicationSubmittedModal /> });
    } catch (error) {
      console.error("Error submitting job application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-8 mt-6" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label className="text-base" htmlFor="fullName">
          Full Name
          <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder="eg. John Doe"
          error={errors.fullName}
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby="fullNameError"
          {...register("fullName", {
            required: "Please enter the full name",
          })}
        />
      </FormGroup>

      <FormGroup>
        <Label className="text-base" htmlFor="email">
          Email Address
          <span aria-hidden="true">*</span>
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="hello@example.com"
          error={errors.email}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby="emailError"
          {...register("email", { required: "Please enter an email" })}
        />
      </FormGroup>

      <FormGroup>
        <Label className="text-base" htmlFor="phone">
          Phone Number
          <span aria-hidden="true">*</span>
        </Label>
        <Input
          type="number"
          id="phone"
          placeholder="+977 98xxxxxxxx"
          className="hide-up-down"
          error={errors.phone}
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby="phoneError"
          {...register("phone", {
            required: "Please enter your phone number",
            validate: {
              phone: (value: string) => {
                return value.length === 10 ? true : "Invalid phone number";
              },
            },
          })}
        />
      </FormGroup>

      <div className="bg-fill-secondary rounded-lg flex justify-between items-center px-5 py-4">
        <div className="w-[55%]">
          <p className="text-lg font-medium mb-1.5">Resume*</p>
          <p className="text-base text-textSecondary mb-2.5">
            Please make sure to include your latest portfolio & experience.
          </p>

          {errors.resume && (
            <span className="text-base text-red-400">
              {errors.resume?.message}
            </span>
          )}
        </div>

        <Controller
          name="resume"
          control={control}
          rules={{
            validate: {
              resume: (value: File | null) => {
                if (!value) return "Please upload your resume";
                const validTypes = [
                  "application/pdf",
                  "application/msword",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ];
                return (
                  validTypes.includes(value.type) ||
                  "Only .pdf, .doc, .docx files are accepted"
                );
              },
            },
          }}
          render={({ field: { onChange, value } }) => (
            <UploadResumeButton onChange={onChange} value={value} />
          )}
        />
      </div>

      <Button
        type="submit"
        className="group"
        variant="default"
        isLoading={isSubmitting}
      >
        {isSubmitting ? "Submitting" : "Submit Application"}
      </Button>
    </form>
  );
}

/*
  =================================================
  Upload resume button component
  =================================================
*/
interface UploadResumeButtonProps {
  value: File | null;
  onChange: (...event: any[]) => void;
}

const UploadResumeButton = ({ value, onChange }: UploadResumeButtonProps) => {
  const ref = useRef<HTMLInputElement>(null);
  let filePlaceholder: string = "Upload file";
  let FileIcon = value ? DocumentIcon : UploadIcon;

  if (value) {
    let fileType = value.name.split(".")[1];

    filePlaceholder = value.name.slice(0, 8) + ".." + fileType;
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ref && "current" in ref && ref.current) {
      ref.current.click();
    }
  };

  const handleDeleteClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onChange(null);
  };

  return (
    <label htmlFor="upload-resume">
      <input
        ref={ref}
        id="upload-resume"
        type="file"
        accept=".pdf, .doc, .docx"
        className="hidden"
        onChange={(e) => {
          if (e.target.files) {
            const file = e.target.files[0];
            onChange(file);
          }
        }}
      />

      <Button
        variant="outline"
        color="transparent"
        className="px-4 py-3 text-base w-fit focus:border"
        onClick={handleButtonClick}
      >
        <FileIcon className="size-6" />
        {filePlaceholder}

        {value && (
          <DeleteIcon onClick={handleDeleteClick} className="size-6 ml-2" />
        )}
      </Button>
    </label>
  );
};

function ApplicationSubmittedModal() {
  const { closeModal } = useModal();

  return (
    <div className="py-16 flex flex-col gap-5 items-center">
      <ApplicationSubmittedIcon className="size-36" />
      <p className="text-xl font-semibold mt-2">Application submitted! 🚀</p>

      <p className="text-center text-textSecondary w-2/3">
        Your application for UI UX Designer at Bytecare Technology has been
        submitted. Thank you for considering a career with us. {`We'll`} review
        your application and be in touch soon.
      </p>

      <Button
        onClick={closeModal}
        variant="outline"
        color="transparent"
        className="py-2.5 mt-4 text-base"
      >
        Back to Home
      </Button>
    </div>
  );
}

export { ApplyNowButton };
