import mongoose from "mongoose"; 


const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    number:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    avtar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },


},{
    timestamps:true
})

export default mongoose.model("User",userSchema)