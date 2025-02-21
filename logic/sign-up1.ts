export const Sign_Up1=async(data,token)=>{
    const {
        line1,
        line2,
        state,
        pincode,
        gst
    } = data;
    if(!token){
        return { success:false, error:"Token Error", message:"Unauthorized"}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/academic",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify(data)
        })
        const resData = await response.json();
        console.log(resData)
        if(resData?.error){
            return {error:resData?.error, success:false}
        }
        return {error:false, success:true, data:resData}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong", success:false}
    }
}