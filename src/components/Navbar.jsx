import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" mb-10  flex justify-center gap-x-10 text-sm">
        <NavLink className={(e)=> e.isActive ? "text-red-300" : ""} to={"/"}>
            Home
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300" : ""} to={"/recipes"}>
            Recipes
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300" : ""} to={"/create-recipes"}>
            Create Recipes
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300" : ""} to={"/about"}>
            About
        </NavLink>
    </div>
  )
}

export default Navbar