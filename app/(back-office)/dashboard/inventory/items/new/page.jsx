"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { Pencil, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      label: "Electronics",
      value: "agrEW667knaognugno",
    },
    {
      label: "Clothes",
      value: "9999bibIFYBVAWV",
    },
  ];

  const units = [
    {
      label: "Kgs",
      value: "agrEW667knaognugno",
    },
    {
      label: "Pcs",
      value: "9999bibIFYBVAWV",
    },
  ];

  const brands = [
    {
      label: "Fila",
      value: "agrEW667knaognugno",
    },
    {
      label: "Puma",
      value: "9999bibIFYBVAWV",
    },
  ];

  const warehouses = [
    {
      label: "Warehouse A",
      value: "agrEW667knaognugno",
    },
    {
      label: "Warehouse B",
      value: "9999bibIFYBVAWV",
    },
    {
      label: "Warehouse C",
      value: "9999bibIFYBVAWV",
    },
  ];

  const suppliers = [
    {
      label: "Supplier A",
      value: "agrEW667knaognugno",
    },
    {
      label: "Supplier B",
      value: "9999bibIFYBVAWV",
    },
    {
      label: "Supplier C",
      value: "9999bibIFYBVAWV",
    },

    {
      label: "Supplier D",
      value: "9999bibIFYBVAWV",
    },
    {
      label: "Supplier E",
      value: "9999bibIFYBVAWV",
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
    data.imageUrl= imageUrl; 
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
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
    <div>
      {/* header */}
      <FormHeader title="New Item" href="/dashboard/inventory/" />

      {/* form */}
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <TextInput
            label="Warehouse  Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          {/* <SelectInput
            name="categoryId "
            label="Select The Item Category"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          /> */}

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
            name="categoryId"
            label="Select The Item Category"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
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
        <div className="col-span-full">
          <div className="flex justify-between items-center mb-4">
            <label
              htmlFor="course-image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Item Image
            </label>
            {imageUrl && (
              <button
                onClick={() => setImageUrl("")}
                type="button"
                className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
              >
                <Pencil className="w-5 h-5" />
                <span>Change Image</span>
              </button>
            )}
          </div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Item image"
              width={1000}
              height={667}
              className="w-full h-64 object-cover"
            />
          ) : (
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].url);
                // Do something with the response
                console.log("Files: ", res);
                console.log("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                console.log (`ERROR! ${error.message}`);
              }}
            />
          )}
        </div>

          {/* <div className="sm:col-span-2">
          <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setImageUrl(res[0].url)
          console.log("Files: ", res);
          console.log(res[0].url);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
          </div> */}
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
