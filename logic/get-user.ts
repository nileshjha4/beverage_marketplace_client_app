export const GetUser=async(token)=>{
    console.log(token)
    if(!token){
        return null;
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/authorize",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })
        const data = await response.json();
        console.log("INFO: get-user function data: ",data)
        if(data.error){
            return {error:data.error, success:false}
        }
        return {error:false, success:true, data}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong", success:false}
    }
}