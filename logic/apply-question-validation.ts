const ALL_QUESTIONS = {
    address: "Please provide your address in the following format: 123 Main St, Apt 4B, Anytown, CA 90210",
    dob: "Please provide your date of birth in the format dd/mm/yyyy. For example: 02/02/2000",
    hispanic: "Are you Hispanic? Please answer 'yes' or 'no'. If you prefer not to answer, type 'NA'.",
    race: "Please provide your race choose from (white, black, asian, arab, hispanic, native, other). For example: asian",
    previouslyApplied: "Have you previously applied to this college? Please answer 'yes' or 'no'.",
    university: "Did you attend a university? If yes, provide details in this format: [University Name], [City], [Degree], [Start Date], [End Date]. If no, type 'NA'. Example: XYZ University, Mumbai, BE (Bachelor's in Engineering), 02/02/2016, 02/02/2020",
    school: "School information is missing. Please provide details in this format: [School Name], [City], [Degree], [Start Date](mm/dd/yyyy), [End Date](mm/dd/yyyy). Example: XYZ School, Mumbai, SSC, 02/02/2016, 02/02/2020",
    college: "College information is missing. Please provide details in this format: [College Name], [City], [Degree], [Start Date], [End Date]. Example: XYZ College, Mumbai, HSC, 02/02/2016, 02/02/2020"
};


export const getData = async(token)=>{
    if(!token){
        return {error:true, success:false, message:"userId not provided!"}
    }
    const keys = ["address","dob","hispanic","race","previouslyApplied","university","school","college"]
    try{
        const data = await fetch('http://103.160.144.19:4600/depaul/applydata',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        )
        const res = await data.json()
        if(res.error){
            return {error:true, success:false, message:res.error}
        }
        let questions={}
        for(let i=0;i<keys.length;i++){
            if(!res.data[keys[i]]){
                questions[keys[i]]=ALL_QUESTIONS[keys[i]]
            }
        }
        return {success:true, error:false, questions}
    }catch(err){
        console.log(err)
        return {success:false, error:true, message:"Error fetching data"}
    }
}

export const validation={
    address: (value)=>{
        if(!value){
            return {error:true, success:false, message:"Address is required!"}
        }else{
            return {error:false, success:true, result:value}
        }
    },
    dob: (value)=>{
        if(!value){
            return {error:true, success:false, message:"Date of birth is required!"}
        }
        const datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;

        if (!datePattern.test(value)) {
            return { error: true, success: false, message: "Invalid date format! Please follow the format: dd/mm/yyyy. Example: 02/02/2000" };
        }

        const [day, month, year] = value.split('/').map(Number);

        const date = new Date(year, month - 1, day);
        if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
            return { error: true, success: false, message: "Invalid date! Please provide a valid date in the format: dd/mm/yyyy. Example: 02/02/2000" };
        }

        return { error: false, success: true, message: "Date of birth is valid!", result:value };
    },
    hispanic: (value)=>{
        if(!value){
            return {error:true, success:false, message:"Hispanic is required!"}
        }
        const dataPattern = /^(yes|no)$/i;
        if (!dataPattern.test(value)) {
            return { error: true, success: false, message: "Invalid Hispanic! Please provide yes or no"}
        }
        let result;
        if(value.toLowerCase()==="yes"){
            result=true
        }else{
            result=false
        }
        return { error: false, success: true, message: "Hispanic is valid!", result}
    },
    race: (value)=>{
        if(!value){
            return {error:true, success:false, message:"Race is required!"}
        }
        const dataPattern = /^(white|black|asian|arab|hispanic|native|other)$/i;
        if (!dataPattern.test(value)) {
            return { error: true, success: false, message: "Invalid Race! Please provide race from the given asian, arab, white, black, hispanic, native and other"}
        }
        return {error: false, success: true, result:value.toLowerCase()}
    },
    previouslyApplied: (value)=>{
        if(!value){
            return {error:true, success:false, message:"Previously applied is required!"}
        }
        const dataPattern = /^(yes|no)$/i;
        if (!dataPattern.test(value)) {
            return { error: true, success: false, message: "Invalid, Please provide yes or no only"}
        }
        let result;
        if(value.toLowerCase()==="yes"){
            result=true
        }else{
            result=false
        }
        return { error: false, success: true, message: "previosly appplied is valid!", result}
    },
    university: (value)=>{
        if(!value){
            return {error:true, success:false, message:"University is required!"}
        }
        const dataPattern = /^(NA|[a-zA-Z\s]+,\s*[a-zA-Z\s]+,\s*[a-zA-Z\s\(\)'\-]+,\s*\d{1,2}\/\d{1,2}\/\d{4},\s*\d{1,2}\/\d{1,2}\/\d{4})$/i;
        if (!dataPattern.test(value)) {
            return { error: true, success: false, message: "Invalid University detail! Please provide university detail in the format above"}
        }
        if(value.toLowerCase() === 'na'){
            return { error: false, success: true, message: "University is valid!", result:null}
        }
        const eachValue = value.split(',').map(item => item.trim());
        const datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
        if(!datePattern.test(eachValue[3]) || !datePattern.test(eachValue[4])){
            return { error: true, success: false, message: "Invalid Date! Please provide data again with valid date"}
        }
        if(new Date(eachValue[3]) > new Date(eachValue[4])){
            return { error: true, success: false, message: "Invalid Date! start date is coming after end date"}
        }
        const orderedValue={
            college: eachValue[0],
            location: eachValue[1],
            degree: eachValue[2],
            startDate: eachValue[3],
            endDate: eachValue[4]
        }
        return { error: false, success: true, message: "University is valid!", result:orderedValue}
    },
    school: (value)=>{
        if(!value){
            return {error:true, success:false, message:"School is required!"}
        }
        const dataPattern = /^(NA|[a-zA-Z\s]+,\s*[a-zA-Z\s]+,\s*[a-zA-Z\s\(\)'\-]+,\s*\d{1,2}\/\d{1,2}\/\d{4},\s*\d{1,2}\/\d{1,2}\/\d{4})$/i;
        if (!dataPattern.test(value)) {
            return { error: true, success: false, message: "Invalid School detail! Please provide school detail in the format above"}
        }
        if(value.toLowerCase() === 'na'){
            return { error: false, success: true, message: "School is valid!", result:null}
        }
        const eachValue = value.split(',').map(item => item.trim());
        const datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
        if(!datePattern.test(eachValue[3]) || !datePattern.test(eachValue[4])){
            return { error: true, success: false, message: "Invalid Date! Please provide data again with valid date"}
        }
        if(new Date(eachValue[3]) > new Date(eachValue[4])){
            return { error: true, success: false, message: "Invalid Date! start date is coming after end date"}
        }
        const orderedValue={
            college: eachValue[0],
            location: eachValue[1],
            degree: eachValue[2],
            startDate: eachValue[3],
            endDate: eachValue[4]
        }
        return { error: false, success: true, message: "School is valid!", result:orderedValue}
    },
    college: (value)=>{
        if(!value){
            return {error:true, success:false, message:"College is required!"}
        }
        const dataPattern = /^(NA|[a-zA-Z\s]+,\s*[a-zA-Z\s]+,\s*[a-zA-Z\s\(\)'\-]+,\s*\d{1,2}\/\d{1,2}\/\d{4},\s*\d{1,2}\/\d{1,2}\/\d{4})$/i;
        if (!dataPattern.test(value)) {
            return { error: true, success: false, message: "Invalid School detail! Please provide school detail in the format above"}
        }
        if(value.toLowerCase() === 'na'){
            return { error: false, success: true, message: "College is valid!", result:null}
        }
        const eachValue = value.split(',').map(item => item.trim());
        const datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
        if(!datePattern.test(eachValue[3]) || !datePattern.test(eachValue[4])){
            return { error: true, success: false, message: "Invalid Date! Please provide data again with valid date"}
        }
        if(new Date(eachValue[3]) > new Date(eachValue[4])){
            return { error: true, success: false, message: "Invalid Date! start date is coming after end date"}
        }
        const orderedValue={
            college: eachValue[0],
            location: eachValue[1],
            degree: eachValue[2],
            startDate: eachValue[3],
            endDate: eachValue[4]
        }
        return { error: false, success: true, message: "School is valid!", result:orderedValue}
    }
}