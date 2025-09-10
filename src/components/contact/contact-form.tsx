// src/components/sections/ContactForm.tsx
"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";

interface ContactFormData {
  from_name: string;
  from_email: string;
  message: string;
}

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async () => {
    if (!form.current) return;
    setIsSubmitting(true);
    setFormStatus("idle");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormStatus("success");
      reset();
    } catch (e) {
      console.error("EmailJS error:", e);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {formStatus === "success" && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription>
            Thank you for your message! I&apos;ll get back to you as soon as possible.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to send message. Please try again or email me directly at{" "}
            <a className="underline" href="mailto:kaipanandha9491@gmail.com">
              kaipanandha9491@gmail.com
            </a>
          </AlertDescription>
        </Alert>
      )}

      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="from_name">Name</Label>
          <Input
            id="from_name"
            placeholder="Your name"
            {...register("from_name", { required: "Name is required" })}
            disabled={isSubmitting}
            className={errors.from_name ? "border-red-500" : ""}
          />
          {errors.from_name && (
            <p className="text-sm text-red-500">{errors.from_name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="from_email">Email</Label>
          <Input
            id="from_email"
            type="email"
            placeholder="your.email@example.com"
            {...register("from_email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            disabled={isSubmitting}
            className={errors.from_email ? "border-red-500" : ""}
          />
          {errors.from_email && (
            <p className="text-sm text-red-500">{errors.from_email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "At least 10 characters" },
            })}
            disabled={isSubmitting}
            rows={5}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
