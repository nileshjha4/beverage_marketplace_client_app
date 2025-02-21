export const ApplyCoupon=async(token, coupon)=>{
    if(!token || !coupon){
        return {error: 'Missing required parameters.', success:false};
    }
    try{
        const response = await fetch(`http://103.160.144.19:4600/apply-coupon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({coupon})
        });
        const data = await response.json();
        if(data?.error){
            return {error: data?.error, success:false};
        }
        console.log(data)
        return {error: false, success:true};
    }catch(err){
        console.log(err)
        return {error: 'Failed to add item to cart.', success:false};
    }
}