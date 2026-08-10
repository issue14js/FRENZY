import { useState } from "react";

function Register(){
  const [form, setForm] = useState({
    username: '',
    number: '',
    password: ''
  })
  const  handleChange = (e)=>{
    setFrom({
      ...form,
      [e.target.name]:e.target.value
    })

    const handelSubmit = async (e)=>{
      e.preventDefault();
      console.log(form)
      try{
        const response = await fetch('http://localhost:3000/api/auth/register',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(form)
          

        })
      }
    }

  }
}