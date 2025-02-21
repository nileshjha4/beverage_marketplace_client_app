export const UpdateProfile=async(token, data)=>{
    if(!token || !data){
        return {error: 'Missing required parameter token.', success:false};
    }
    try{
        const response = await fetch(`http://103.160.144.19:4600/update-profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        if(resData?.error){
            return {error: data?.error, success:false};
        }
        return {error: null, success:true};
    }catch(err){
        console.log(err)
        return {error: 'Failed to add item to cart.', success:false};
    }
}