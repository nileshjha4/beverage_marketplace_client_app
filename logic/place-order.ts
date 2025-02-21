export const PlaceOrder=async(token)=>{
    if(!token){
        return {error: 'Missing required parameter token.', success:false};
    }
    try{
        const response = await fetch(`http://103.160.144.19:4600/place-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        const data = await response.json();
        if(data?.error){
            return {error: data?.error, success:false};
        }
        return {error: false, success:true};
    }catch(err){
        console.log(err)
        return {error: 'Failed to add item to cart.', success:false};
    }
}