export const report=async(data,token)=>{
    const {degree,program,specialization} = data
    console.log(data)
    if(!degree || !program){
        return {error:"Please fill all the fields", success:false}
    }
    try{
      const isExist = await fetch('http://103.160.144.19:4600/depaul/check',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':token
            },
            body:JSON.stringify({degree, program, specialization})
        })
        const isData = await isExist.json()
        console.log(isData)
        if(isData.error){
            return {error:"You have already created report for this", success:false, isExist:true}
        }
    const payload = {
        degree,
        program,
        specialization
    }  
    const saveReport = await fetch("http://103.160.144.19:4600/depaul/report",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify(payload)
        }
    )
    const check = await saveReport.json()
    if(check.error){
        return {error:check.error, success:false, message:check.message}
    }
    return {success:true, error:false, data:check.data}
    }catch(err){
        console.log(err)
        return {error:"Something went wrong", success:false}
    }
}
