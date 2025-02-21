export const chat=async(question,context,personalContext)=>{
    if(!question){
        return {success:false, error:true, message:"No prompt provided"};
    }
    function getElementsAfterDivisibleBy5(arr) {
        const length = arr.length;
        const maxDivisibleBy5 = Math.floor(length / 5) * 5;
        if (maxDivisibleBy5 === length) {
          return arr.slice(maxDivisibleBy5);
        } else {
          return arr.slice(maxDivisibleBy5);
        }
    }
    let contextChat;
    if(context.length == 0 || context == undefined){
        contextChat = 'No context is there. New chat'
    }else{
        let formattedContext = []
        for(let i=0;i<context?.length;i=i+2){
            formattedContext.push({user_asked:context[i]?.content, llm_response:context[i+1]?.content})
        }
        contextChat = JSON.stringify(getElementsAfterDivisibleBy5(formattedContext))
    }
    console.log("Context :" , contextChat)
    console.log("Personal Context:", personalContext)
    console.log("Chatting: ", question)
    try {
        const payload = {
            question,
            personal: personalContext,
            context: contextChat
        }
        const response = await fetch("http://103.160.144.19:4600/nottingham/chat",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(payload)
        })
        const data = await response.json();
        console.log("INFO: get-chat data: ",data)
        if(data?.error){
            return {message:data?.message, success:false, error:true}
        }
        return {error:false, success:true, data: data?.data}
    } catch (err) {
        console.log(err)
        return {success:false, error:true, message:err}
    }
}