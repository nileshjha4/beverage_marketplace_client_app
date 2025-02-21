export const Testing=async(scores)=>{
    console.log(scores)
    if(scores.length == 0){
        return {error:"Missing fields", success:false}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/grade",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({scores})
        })
        const data = await response.json();
        console.log(data)
        if(data.error){
            return {error:data.error, success:false}
        }
        return {error:false, success:true, data:data}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong", success:false}
    }
}