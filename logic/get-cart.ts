export const GetCart=async(token)=>{
    if(!token){
        return {error: 'Missing required token.', success:false, cart:[]};
    }
    try{
        const response = await fetch(`http://103.160.144.19:4600/get-cart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const data = await response.json();
        if(data?.error){
            return {error: data?.error, success:false, cart:[]};
        }
        return {error: false, success:true, cart:data?.cart, total: data?.total, final_amount: data?.final_amount};
    }catch(err){
        console.log(err)
        return {error: 'Failed to add item to cart.', cart:false};
    }
}