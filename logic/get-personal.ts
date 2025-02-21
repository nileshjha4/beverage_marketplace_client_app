export const GetProfile=async(token)=>{
    if(!token){
        return {error: 'Missing required parameter token.', success:false, data:{}};
    }
    try{
        const response = await fetch(`http://103.160.144.19:4600/get-profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const data = await response.json();
        if(data?.error){
            return {error: data?.error, success:false, data:{}};
        }
        console.log(data)
        return {error: null, success:true, data:data?.personal};
    }catch(err){
        console.log(err)
        return {error: 'Failed to add item to cart.', success:false, data:{}};
    }
}