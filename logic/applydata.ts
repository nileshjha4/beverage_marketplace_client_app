export const applydata=async(context)=>{
    console.log("Second last data is: ",context[context.length - 2])
    console.log("last data is: ",context[context.length - 1])
    try{
        const response = await fetch("http://192.168.0.107:8000/apply/invoke",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                    input:{
                        previous_data:JSON.stringify(context)
                    }
            })
        })
        const data = await response.json()
        if(data.error){
            return {error:data.error, success:false}
        }
        return {error:false, success:true, data}
    }catch(err){
        console.log(err)
        return {error:true, success:false, message:"server error"}
    }
}