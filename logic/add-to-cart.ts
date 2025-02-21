export const AddToCart=async(token, itemId, qty, price)=>{
    if(!token || !itemId || !qty || !price){
        return {error: 'Missing required parameters.', success:false};
    }
    try{
        const response = await fetch(`http://103.160.144.19:4600/add-to-cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({itemId, qty, price})
        });
        const data = await response.json();
        if(data?.error){
            return {error: data?.error, success:false};
        }
        console.log(data)
        return {error: null, success:true, data:data, qty: data?.qty};
    }catch(err){
        console.log(err)
        return {error: 'Failed to add item to cart.', success:false};
    }
}