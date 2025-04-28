"use client";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { makePostRequest } from "@/lib/apiRequest";
import { useForm } from "react-hook-form";

export default function TransferInventoryForm({items, warehouses}) {
 
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    makePostRequest(
      setLoading,
      "api/adjustments/transfer ",
      data,
      "Adjustments Transferred",
      reset
    );
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
          label="Reference Number"
          name="referenceNumber"
          register={register}
          errors={errors}
        />

        <SelectInput
          name="itemId"
          label="Select The Item"
          register={register}
          errors={errors}
          className="w-full"
          options={items}
        />
        <TextInput
          type="number"
          label="Enter Amount of Stock to Transfer"
          name="transferStockQty"
          register={register}
          errors={errors}
          className="w-full"
          
        />

        <SelectInput
          name="givingWarehouseId"
          label="Select The Warehouse To Provide"
          register={register}
          errors={errors}
          className="w-full"
          options={warehouses}
        />

        <SelectInput
          name="receivingWarehouseId"
          label="Select The Warehouse  To Receive"
          register={register}
          errors={errors}
          className="w-full"
          options={warehouses}
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
      </div>
      <SubmitButton isLoading={loading} title="Adjustments" />
    </form>
  );
}
