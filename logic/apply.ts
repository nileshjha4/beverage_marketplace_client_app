export const application=async(form,token)=>{
    const {degree, program, specialization} = form
    if(!degree || !program){
        return {error: "Please fill all the fields", success: false}
    }
    try{
    let payload;
    if(specialization){
        payload = {
            degree,
            program,
            specialization
        }
    }else{
        payload = {
            degree,
            program,
            specialization: 'No Specialization'
    }
    }
    const apply = await fetch("http://103.160.144.19:4600/depaul/checkapply",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
    const applyData = await apply.json()
    console.log(applyData)
    if(applyData.error){
        return {error: applyData.error, success: false}
    }
    const response = await fetch("http://103.160.144.19:4600/depaul/apply",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    console.log(data)
    if(data.error){
        if(data.isExist){
            return {error: "You have already applied for this program", success: false}
        }
        return {error: data.error, success: false}
    }
    
    return {success:true, error:false, data:data.data}
    }catch(err){
        console.log(err)
        return {error: "Something went wrong", success: false}
    }
}