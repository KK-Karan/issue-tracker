"use client";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateIssueSchema } from "@/app/validationSchema";
import { z } from "zod";

type IssueForm = z.infer<typeof CreateIssueSchema>;

// interface IssueForm { // it ensures form data structure during development but doesn't validate the data
//   title: string;
//   description: string;
// }

export default function NewIssuePage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueForm>({
    // formstate gives info about the state of our form
    // It initializes the react hook form // It tells React Hook Form to expect an object that matches the IssueForm structure.
    resolver: zodResolver(CreateIssueSchema), // zodResolver handles runtime verification and ensures it matches the schema that we used to send data to db
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-3" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            await axios.post("/api/issues", data); // nextjs convention
            setSubmitting(false);
            router.push("/issues");
          } catch (error) {
            setError("An Unexpected Erorr Occured");
          }
        })}
      >
        <TextField.Root
          placeholder="Title"
          {...register("title")} // connects the input field to react hook form, linking it to the title field
        ></TextField.Root>
        {errors && (
          <Text color="red" as="p">
            {errors.title?.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors && (
          <Text color="red" as="p">
            {errors.description?.message}
          </Text>
        )}
        <Button loading={submitting} className='hover:cursor-pointer'>Submit New Issue</Button>
      </form>
    </div>
  );
}
