export const GetOrder=async(token)=>{
    console.log("Hit 1")
    if(!token){
        return {error: 'Missing required token.', success:false, order:[]};
    }
    console.log("Hit 3")
    try{
        const response = await fetch(`http://103.160.144.19:4600/get-order`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        });
        const data = await response.json();
        console.log("hit 4")
        if(data?.error){
            return {error: data?.error, success:false, order:[]};
        }
        return {error: false, success:true, order:data?.order};
    }catch(err){
        console.log(err)
        return {error: 'Failed to add item to cart.', order:[]};
    }
}