const filterData=(data)=>{
let title = data?.program;
const degree = data?.degree
const program = data?.program
let modules = data.specializations.map(item => ({
    title: item,
    skills: [],
    imageUrl: 'https://s3-alpha-sig.figma.com/img/4bfa/d134/035bf7db4ec485a44e5a8384c59da98d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DTJkZGiT3T67u9jooPz7bO4qMY8RXRwV8BCONlkV~TmMtVmPDd6rolRRIAl~QwImd03aLPc48KouVn6Zrnok9sWcQpH-DX3Rkt7gxup90HCzcYgYrI39y4ST4AINP-HnBWtH9K1UDb-0B3JHLOU6A7iTSxfV0YxAn9NBg6rfq6lFDfz62BIBqC6Vn3IK35NHMBYRXGpmp0dLf1wGQvbIpKHpwswHS2PX00274FE203pjwyoNjdCc3WFtRwfYFycA~JjpuwHer78YON7tzGeEjAGTCN8XjJCVmyOrvQLK~A9VPw4mqrbPfKv4-4XndSVfH3rhgyuRrkYZSz4JOEqLnQ__',
    degree,
    program,
}));
modules.unshift({
    title:'',
    skills: [],
    imageUrl: 'https://s3-alpha-sig.figma.com/img/4bfa/d134/035bf7db4ec485a44e5a8384c59da98d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DTJkZGiT3T67u9jooPz7bO4qMY8RXRwV8BCONlkV~TmMtVmPDd6rolRRIAl~QwImd03aLPc48KouVn6Zrnok9sWcQpH-DX3Rkt7gxup90HCzcYgYrI39y4ST4AINP-HnBWtH9K1UDb-0B3JHLOU6A7iTSxfV0YxAn9NBg6rfq6lFDfz62BIBqC6Vn3IK35NHMBYRXGpmp0dLf1wGQvbIpKHpwswHS2PX00274FE203pjwyoNjdCc3WFtRwfYFycA~JjpuwHer78YON7tzGeEjAGTCN8XjJCVmyOrvQLK~A9VPw4mqrbPfKv4-4XndSVfH3rhgyuRrkYZSz4JOEqLnQ__',
    degree,
    program,
})
return {
    title,
    modules,
}
}
export const Recommendation=async(token)=>{
    if(!token){
        return {error:"Unauthorized!", success:false}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/recommend",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })
        const data = await response.json();
        if(data?.error){
            console.log("inside error")
            return {error:data?.error || 'Some error happened', success:false}
        }
        console.log(data)
        return {error:false, success:true, organisedData: data?.result}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong in recommendation logic", success:false}
    }
}