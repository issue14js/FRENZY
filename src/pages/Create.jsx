import { useForm } from "react-hook-form"

const Create = () => {
    const {register, handleSubmit} = useForm()
  return (
    <form action="">
        <input className=" w-60 border-b outline-0 p-1 block "{...register("url")} type="file"  placeholder="Enter image url" />
        <small className="text-red-500">This is how the error show</small>
        <input className="border-b outline-0 p-1 block "{...register("title")} type="text"  placeholder="Recipes Title" />
        <small className="text-red-500">This is how the error show</small>
        <textarea className="block border-b outline-0 p-2"
        {...register("description")} placeholder="//Star from here" ></textarea>
        <small className="text-red-500">This is how the error show</small>
        <textarea className="block border-b outline-0 p-2"
        {...register("ingredients")} placeholder="//Write ingredients seperatad by coma" ></textarea>
        <small className="text-red-500">This is how the error show</small>
        <textarea className="block border-b outline-0 p-2"
        {...register("instruction")} placeholder="//Write instructions seperatad by coma" ></textarea>
        <small className="text-red-500">This is how the error show</small>
        <button className="mt-5 block bg-gray-900 rounded p-2 px-4 ">Save Recipes</button>
    </form>
  )
}

export default Create