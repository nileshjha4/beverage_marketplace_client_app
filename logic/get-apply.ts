export const getApply=async(token)=>{
    if(!token){
        return {error:true,success:false, message:"No token present"}
    }
    try {
        const response = await fetch("http://103.160.144.19:4600/depaul/apply",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        const data = await response.json()
        if(data.error){
            return {error:true,success:false, message:data.message}
        }
        return {error:false,success:true, data:data}
    } catch (error) {
        console.log(error)
        return {error:true,success:false, message:"Something went wrong!"}
    }
}