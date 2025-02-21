export const specialization=async(data)=>{
    const {degree, program} = data;
    if(!degree || !program){
        return {error:"Please enter degree, category and program", success:false}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/specialization",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({degree,program})
        })
        const data = await response.json();
        
        if(data.error){
            return {error:data.error, success:false}
        }
        console.log("The valur of data is: ",data)
        const specialization = data.result.specializations
        const formattedSpecialization = specialization.map(item => ({
                label: item,
                value: item
        }));
        console.log("The value of specialization is: ",formattedSpecialization)
        return {error:false, success:true, formattedSpecialization}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong", success:false}
    }
}