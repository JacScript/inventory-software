"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()


  function onSubmit(data) {
    console.log(data);
    reset()
  }

  return (
    <div>
      {/* header */}
    <FormHeader title="New Category" href="#"/>
 
      {/* form */}
      <form 
      action=""
      onSubmit={handleSubmit(onSubmit)}
       className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
         <div className='grid gap-4 sm:gap-6 sm:grid-cols-2'>
         <TextInput 
           label="Category Title"
           name="title"
          //  isRequired ={true}
           register={register}
           errors={errors}
          //  type= "text"
          //  className="sm:col-span-2"
         />
         </div>
         <SubmitButton isLoading={loading} title="Category"/>
      </form>
    </div>
  )
}
