"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { Pencil, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateItemForm({categories, brands, units, warehouses, suppliers}) {
  const [imageUrl, setImageUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    data.imageUrl= imageUrl; 
    console.log(data);
        makePostRequest(setLoading,'api/items',data,"Item",reset) 
    
    // try {
    //   const response = await fetch(`${baseUrl}/api/items`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     console.log(response);
    //     setLoading(false);
    //     reset();
    //     setImageUrl("");
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   console.log(error);
    // }
  }

  return (
  
      <>

      {/* form */}
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <TextInput
            label="Item Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
           <SelectInput
            name="categoryId"
            label="Select The Item Category"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />

          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
            // isRequired={false}
          />

          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
            // isRequired={false}
          />

          <TextInput
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />

         

          <SelectInput
            name="unitId"
            label="Select The Item Unit"
            register={register}
            errors={errors}
            className="w-full"
            options={units}
          />

          <SelectInput
            name="brandId"
            label="Select The Item Brand"
            register={register}
            errors={errors}
            className="w-full"
            options={brands}
          />
          <SelectInput
            name="warehouseId"
            label="Select The Warehouse"
            register={register}
            errors={errors}
            className="w-full"
            options={warehouses}
          />
          {/* <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          /> */}
          <TextInput
            label="Buying Price"
            name="buyingPrice"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Selling Price"
            name="sellingPrice"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />
<SelectInput
            name="supplierId"
            label="Select The Item Supplier"
            register={register}
            errors={errors}
            className="w-full"
            options={suppliers}
          />
          <TextInput
            label="Re-Order Point"
            name="reOrderPoint"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Weight in Kgs"
            name="weight"
            register={register}
            type="number"
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Dimension in cm (20 x 20 x 20)"
            name="dimension"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Tax Rate in % "
            name="taxRate"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />

          <TextareaInput
            label="Item Description  "
            name="description"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Item Notes "
            name="notes"
            register={register}
            errors={errors}
          />

            {/* Upload thing */}
       <ImageInput  label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader" />
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
      </>
  );
}
 