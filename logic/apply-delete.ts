export const applyDelete=async(id,token)=>{
    if(!id ||!token){
        return {success:false,error:true, message:"Unauthorized"};
    }
    try {
        const response = await fetch(`http://103.160.144.19:4600/depaul/apply/${id}`,
        {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        }
        )
        const data = await response.json();
        if(data.error){
            return {success:false,error:true, message:data.message};
        }
        return {success:true,error:false, message:"Apply deleted successfully"};
    } catch (error) {
        console.log(error)
        return {success:false,error:true, message:"Something went wrong"};
    }
}