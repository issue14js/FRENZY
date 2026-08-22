  import { useContext } from "react"
  import { recipescontext } from "../context/RecipesContext"




  const Recipies = () => {
  const { data } = useContext(recipescontext)


   const renderrecipes = data.map((recipes) => (
      <div key={recipes.id} className="">
        <h1>{recipes.title}</h1>
      </div>
    ))
    return (
      <div>{renderrecipes}</div>
    )
  }

  export default Recipies