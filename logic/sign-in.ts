export const Sign_In=async(data)=>{
    const {email,password} = data;
    console.log(email)
    if(!email || !password){
        return {error:true, success:false, message:"Please enter email and password"}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        const data = await response.json();
        console.log(data)
        if(data.error){
            return {error:data.error, success:false, message:data.message? data.message : "something went wrong"}
        }
        return {error:false, success:true, data:data}
    }catch(err){
        console.log(err);
        return {error:true, success:false, message:"Something went wrong"}
    }
}