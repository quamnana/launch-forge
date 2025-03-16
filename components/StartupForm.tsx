"use client";

import React, { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validations";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createStartup } from "@/lib/actions";

export default function StartupForm() {
  const router = useRouter();
  const [errors, SetErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      console.log(formValues);

      const result = await createStartup(prevState, formData, pitch);

      if (result.status === "SUCCESS") {
        toast.success("Startup was submitted successfully");

        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        SetErrors(fieldErrors as unknown as Record<string, string>);

        toast.error(
          "Startup was not submmited. Please check your inputs and try again"
        );
        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }
      // Handle other errors
      console.error(error);
      toast.error("An error occurred");
      return { ...prevState, error: "An error occurred", status: "ERROR" };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Enter Startup Title"
        />
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Enter Startup Description"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Enter Startup Category (eg: Social, Transportation, AI)"
        />
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Enter Startup Image URL"
        />
        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MarkdownEditor
          id="pitch"
          value={pitch}
          height="300px"
          onChange={(value) => setPitch(value)}
          style={{ borderRadius: 20, overflow: "hidden" }}
          previewProps={{ disallowedElements: ["style"] }}
          placeholder={"Pitch your idea here.."}
        />
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>

      <Button type="submit" className="startup-form_btn text-white">
        {isPending ? "Submitting..." : "Submit Your Startup"}
        <Send className="size-6" />
      </Button>
    </form>
  );
}
