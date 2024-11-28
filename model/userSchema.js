import mongoose from "mongoose";

const User = mongoose.model('User' , {
    username : {type : String , required : true , unique : true , index : true , sparse : true},  // field for usernames
    email : {type : String , required : true , unique : true , index : true , sparse : true},  // field for email
    password : {type : String , required : true},  // field for passwords(hashed)
    role : {type : String , required : true , enum: ['user', 'admin', 'moderator']}  // // field for roles(user , admin , moderator)
})

export default User;