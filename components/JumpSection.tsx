import { View, Text, TouchableOpacity } from 'react-native'

const JumpSection=({
    sectionOneRef,
    sectionTwoRef,
    sectionThreeRef,
    sectionFourRef,
    sectionFiveRef,
    sectionSixRef,
    sectionSevenRef,
    sectionEightRef,
    sectionNineRef,
    handlerScroll
})=>{
    return(
        <View className="px-4">
            <TouchableOpacity onPress={()=>handlerScroll(sectionOneRef)}
            classname="mt-3"
            >
                    <Text className="text-[20px] font-pmedium">1. Program OverView</Text>
                    <Text className="text-[14px] font-plight ml-4">a. Provides summary of the program</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlerScroll(sectionTwoRef)}
            classname="mt-3"
            >
                    <Text className="text-[20px] font-pmedium">2. Academic</Text>
                    <Text className="text-[14px] font-plight ml-4">a. Provides Courses/Credit hours needed to graduate identifying compulsory courses and elective courses by semester and a short description of the course</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlerScroll(sectionThreeRef)}
            classname="mt-3"
            >
                    <Text className="text-[20px] font-pmedium">3. Financial</Text>
                    <Text className="text-[14px] font-plight ml-4">a. Provides a semester wise financial forecast of all costs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlerScroll(sectionFourRef)}
            classname="mt-3"
            >
                    <Text className="text-[20px] font-pmedium">4. Scholarships</Text>
                    <Text className="text-[14px] font-plight ml-4">a. List of scholarships student is eligible for with amounts and application process</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlerScroll(sectionFiveRef)}
            classname="mt-3"
            >
                    <Text className="text-[20px] font-pmedium">5. Career</Text>
            </TouchableOpacity>
                    <View>
                        <Text className="text-[14px] font-plight ml-4">a. List of employment partners with Name and Industry</Text>
                        <Text className="text-[14px] font-plight ml-4">b. Job roles that student could be suitable for with average starting salaries in that city/graduate from that university along with approximate internship hourly rates</Text>
                        <Text className="text-[14px] font-plight ml-4">c. Working Rights (If International)</Text>
                    </View>

             <TouchableOpacity onPress={()=>handlerScroll(sectionSixRef)}
             classname="mt-3"
             >
                    <Text className="text-[20px] font-pmedium">6. Housing & Dining</Text>
                    <Text className="text-[14px] font-plight ml-4">a. List of on-campus housing options with costs</Text>
                    <Text className="text-[14px] font-plight ml-4">b. DePaul Dining and meal plans</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlerScroll(sectionSevenRef)}
            classname="mt-3"
            >
                <Text className="text-[20px] font-pmedium">7. Campus</Text>
            </TouchableOpacity>
            <View>
                <Text className="text-[14px] font-plight ml-4">a. Facilities overview</Text>
                <Text className="text-[14px] font-plight ml-4">b. Extra curricular facilities</Text>
                <Text className="text-[14px] font-plight ml-4">c. List of Clubs and Societies</Text>
                <Text className="text-[14px] font-plight ml-4">d. Safety Guidlines</Text>
            </View>
            <TouchableOpacity onPress={()=>handlerScroll(sectionEightRef)}
            classname="mt-3"
            >
                <Text className="text-[20px] font-pmedium">8. LifeStyle</Text>
                <Text className="text-[14px] font-plight ml-4">a. City life day, night, public transport, weather using google places</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlerScroll(sectionNineRef)}
            classname="mt-3"
            >
                <Text className="text-[20px] font-pmedium">9. Documents</Text>
            </TouchableOpacity>
            </View>
    )
}

export default JumpSection