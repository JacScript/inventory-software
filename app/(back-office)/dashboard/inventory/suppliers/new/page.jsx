"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makeApiRequest } from "@/lib/apiRequest";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewSuppliers() {
  const selectOptions = [
    {
      label: "Main",
      value: "main",
    },
    {
      label: "Branch",
      value: "branch",
    },
  ];
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    const baseUrl = "http://localhost:3000";
    // // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    makeApiRequest(setLoading,`${baseUrl}/api/suppliers`,data,"Supplier",reset) 




    // try {
    //   const response = await fetch(`${baseUrl}/api/suppliers`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     console.log(response);
    //     setLoading(false);
    //     toast.success("Warehouse created successfully");
    //     reset();
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   // toast.error("Failed to create warehouse");
    //   // reset();

    //   console.log(error);
    // }


  }

  return (
    <div>
      {/* header */}
      <FormHeader title="New Supplier" href="/dashboard/inventory/" />

      {/* form */}
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <TextInput
            label="Supplier Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
            //  isRequired ={true}
            //  type= "text"
            //  className="sm:col-span-2"
          />
          <TextInput
            label="Supplier Phone"
            name="phone"
            placeholder="07XXXXXXXX"
            register={register}
            errors={errors}
            className="w-full"
            //  isRequired ={true}
            //  type= "text"
            //  className="sm:col-span-2"
          />

          <TextInput
            label="Supplier Email"
            placeholder="example@gmail.com"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Supplier Address"
            name="address"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Supplier Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Supplier Code"
            name="supplierCode"
            register={register}
            errors={errors}
            className="w-full"
          />
        

          <TextInput
            label="Supplier TIN"
            name="taxID"
            register={register}
            errors={errors}
          />
            <TextareaInput
            label="Supplier Payment Terms"
            name="paymentTerms"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Supplier Notes"
            name="notes"
            register={register}
            errors={errors}
            // className = "sm:col-span-2"
          />
        </div>
        <SubmitButton isLoading={loading} title="Supplier" />
      </form>
    </div>
  );
}
