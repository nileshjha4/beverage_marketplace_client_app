export const GetReport=async(token)=>{
    console.log(token)
    if(!token){
        return {success:false, error:"Token missing"};
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/report",{
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