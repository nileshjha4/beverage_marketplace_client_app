export const Sign_Up=async(data)=>{
    const {
        name,
        email,
        password,
        number,
        gender,
        aadharcard,
        pancard
    } = data;
    console.log("Hit 1")
    if(!email || !password || !name || !number){
        return {error:"Fields missing", success:false}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const resData = await response.json();
        console.log("Hit 2")
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