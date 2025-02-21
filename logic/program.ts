export const getProgram=async(data)=>{
    console.log("inside program")
    const {degree,category} = data;
    if(!degree || !category){
        return {error:"Please enter degree and category", success:false}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/program",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({degree,category})
        })
        const data = await response.json();
        
        if(data.error){
            return {error:data.error, success:false}
        }
        console.log("The valur of data is: ",data)
        const program = data?.result
        const formattedProgram = program?.map(item => ({
                label: item?.program,
                value: item?.program
        }));
        console.log("The value of program is: ",formattedProgram)
        return {error:false, success:true, formattedProgram}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong", success:false}
    }
}