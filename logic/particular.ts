export const GetParticularReport=async(token,reportId)=>{
    console.log(token)
    if(!token){
        return {success:false, error:true, message:"Token not present"};
    }
    try{
        const response = await fetch(`http://103.160.144.19:4600/depaul/particular/${reportId}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })
        const data = await response.json();
        if(data.error){
            return {error:data.error, success:false}
        }
        return {error:false, success:true, data:data?.report}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong", success:false}
    }
}