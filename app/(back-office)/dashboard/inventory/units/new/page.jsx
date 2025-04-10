"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewUnit() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data)
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(`${baseUrl}/api/units`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(response);
        setLoading(false)
        reset();
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  return (
    <div>
      {/* header */}
      <FormHeader title="New Unit" href="/dashboard/inventory/" />

      {/* form */}
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <TextInput
            label="Unit Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
            //  isRequired ={true}
            //  type= "text"
          />

<TextInput
            label="Unit Abbreviation"
            name="abbreviation "
            register={register}
            errors={errors}
            //  isRequired ={true}
            //  type= "text"
             className="w-full"
          />
          
        </div>
        <SubmitButton isLoading={loading} title="Unit" />
      </form>
    </div>
  );
}
