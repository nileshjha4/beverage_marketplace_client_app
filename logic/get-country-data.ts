export const getCountryData=async(country)=>{
    if(!country){
        return {success:false,error:true,message:"No country provided"}
    }
    try {
        const response = await fetch("http://103.160.144.19:4600/depaul/country",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({country:country})
        })
        const data = await response.json()
        if(data.error){
            return {error:true,success:false, message:data.message}
        }
        const organisedData = {
            states: data.countryData["states"],
            cities: data.countryData["cities"]
        }
        return {error:false,success:true, data:organisedData}
    } catch (error) {
        console.log(error)
        return {error:true,success:false, message:"Something went wrong!"}
    }
}