export const getCountry=async()=>{
    try {
        const response = await fetch("http://103.160.144.19:4600/depaul/country",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json()
        if(data.error){
            return {error:true,success:false, message:data.message}
        }
        let organisedData = []
        for(let i=0;i<data.country.length;i++){
            organisedData.push(data.country[i]["country"])
        }
        return {error:false,success:true, data:organisedData}
    } catch (error) {
        console.log(error)
        return {error:true,success:false, message:"Something went wrong!"}
    }
}