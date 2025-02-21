export const profile =async(token)=>{
    if(!token){
        return {error:true, success:false, message:"Token missing"};
    }
    try{
    const response = await fetch("http://103.160.144.19:4600/depaul/profile", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        });
        const data = await response.json();
        if(data.error){
            return {error:true, success:false, message:data.message};
        }
        return {error:false, success:true, data:data};
    }catch(err){
        console.log(err);
        return {error:true, success:false, message:err.message};
    }
} 