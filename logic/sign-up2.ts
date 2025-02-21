export const Sign_Up2=async(form, token)=>{
    if(!token){
        return { success:false, error:"Token Error", message:"Unauthorized"}
    }
    try{

        const response = await fetch("http://103.160.144.19:4600/depaul/grade",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify(form)
        })
        const data = await response.json();
        console.log(data)
        if(data?.error){
            return {error:data?.error, success:false}
        }
        return {error:false, success:true, data:data}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong", success:false}
    }
}