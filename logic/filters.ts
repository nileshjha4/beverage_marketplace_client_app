const filterData=(data)=>{
let title = data?.program;

// if (data.degree == 'undergraduate') {
//     title = `Bachelor of ${data.program}`;
// } else if (data.degree == 'graduate') {
//     title = `Masters of ${data.program}`;
// } else if (data.degree == 'diploma') {
//     title = `Diploma of ${data.program}`;
// } else {
//     title = `PhD of ${data.program}`;
// }
const degree = data.degree
const program = data.program
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
export const Filter=async(form)=>{
    const {degree,category,program} = form
    if(!degree && !category && !program){
        return {success:false, error:"Missing Degree, category or program"}
    }
    try{
        const response = await fetch("http://103.160.144.19:4600/depaul/filter",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(form)
        })
        const data = await response.json();
        console.log(data)
        if(data.error){
            return {error:data.error, success:false}
        }
        let organisedData = []
        for(let i=0;i<data?.result?.length; i++){
            organisedData.push(filterData(data?.result[i]))
        }
        return {error:false, success:true, organisedData}
    }catch(err){
        console.log(err);
        return {error:"Something went wrong in recommendation logic", success:false}
    }
}