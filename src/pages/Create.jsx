import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipescontext } from "../context/RecipesContext"

const Create = () => {
  const {data,setdata} = useContext(recipescontext)
    const {register, handleSubmit, reset} = useForm()
    const SubmitHandler =(recipes)=>{
      recipes.id = nanoid()
      console.log(recipes)
      setdata([...data, recipes])

      reset() 
      
    }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
        <input className=" w-60 border-b outline-0 p-1 block "{...register("url")} type="url"  placeholder="Enter image url" />
        <small className="text-red-500">This is how the error show</small>
        <input className="border-b outline-0 p-1 block "{...register("title")} type="text"  placeholder="Recipes Title" />
        <small className="text-red-500">This is how the error show</small>
        <input className="border-b outline-0 p-1 block "{...register("chef")} type="text"  placeholder="Chef Name " />
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
        <select className="block border-b outline-0 p-2"
        {...register("category")} placeholder="//Star from here" >
          <option className="text-black" value="">Category 1 </option>
          <option className="text-black" value="">Category 2 </option>
          <option className="text-black" value="">Category 3 </option>
        </select>
        <button className="mt-5 block bg-gray-900 rounded p-2 px-4 ">Save Recipes</button>
    </form>
  )
}

export default Create