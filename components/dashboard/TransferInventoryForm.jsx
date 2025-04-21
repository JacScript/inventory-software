"use client";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function TransferInventoryForm() {
  const branches = [
    {
      label: "Branch A",
      value: "maiagaeshrnjan",
    },
    {
      label: "Branch B",
      value: "branchagaegah",
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
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(`${baseUrl}/api/adjustments/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    //   {/* form */}
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
             <TextInput
                    type="number"
                      label="Reference Number"
                      name="referenceNumber"
                      register={register}
                      errors={errors}
                      
                    />
          <TextInput
          type="number"
            label="Enter Amount of Stock to Transfer"
            name="transferStockQty"
            register={register}
            errors={errors} 
          />

<SelectInput
            name="warehouseId"
            label="Select The Warehouse To Provide"
            register={register}
            errors={errors}
             className="w-full"
            options={branches}
            
          />
         
          <SelectInput
            name="receivingWarehouseId"
            label="Select The Warehouse  To Receive"
            register={register}
            errors={errors}
             className="w-full"
            options={branches}
            
          />
          <TextareaInput
          // placeholder="Please Enter short notes about transfer"
            label="Adjustment Notes"
            name="notes"
            register={register}
            errors={errors}
            // isRequired = true,
            // type = "text",
            // className = "sm:col-span-2",
          />
          {/* <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category Description
          </label>
          <div className="mt-2">
            <textarea
              {...register("description", { required: true })}
              id="description"
              name="description"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
            {errors.title && (
              <span className="text-sm text-red-600 ">
                Category description is required
              </span>
            )}
          </div>
        </div> */}
        </div>
        <SubmitButton isLoading={loading} title="Adjustments" />
      </form>
  );
}
