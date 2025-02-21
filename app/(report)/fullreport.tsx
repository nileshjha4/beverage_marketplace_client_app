import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';
import { useEffect, useState, useRef } from 'react';
import { GetParticularReport } from '@/logic/particular';
import JumpSection from '@/components/JumpSection';
import RenderFinance from '@/components/RenderFinance';
import RenderAcademic from '@/components/RenderAcademic';
import Rendercareer from '@/components/RenderCareer';
import RenderScholarShip from '@/components/RenderScholarShip';
import HousingAndMeals from '@/components/Housing';
import CampusOverview from '@/components/Campus';
import LifestyleOverview from '@/components/LifeStyle';
import DocumentsRequired from '@/components/Documents';

const fullreport = () => {
    const { user, token } = useGlobalContext()
    const router = useRouter();
    const { reportId } = useLocalSearchParams();
    const [data,setData] = useState(null)
    const scrollViewRef = useRef(null);
    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const sectionThreeRef = useRef(null);
    const sectionFourRef = useRef(null);
    const sectionFiveRef = useRef(null);
    const sectionSixRef = useRef(null);
    const sectionSevenRef = useRef(null);
    const sectionEightRef = useRef(null);
    const sectionNineRef = useRef(null);

    const [careerData, setcareerData] = useState('')
    const [financeData, setFinanceData] = useState('')
    const [academicData, setAcademicData] = useState('')
    const [scholarshipData, setScholarshipData] = useState('')
    const [overViewData, setOverViewData] = useState('')

    const scrollToSection = (ref) => {
    ref.current.measureLayout(scrollViewRef.current, (x, y, width, height) => {
      scrollViewRef.current.scrollTo({ y, animated: true });
    });
  };

    useEffect(()=>{
        if(reportId){
            GetParticularReport(token, reportId).then((res)=>{
                console.log("------------------------------------------------------------------------------")
                console.log(res.success)
        if(res.success){
          setData(()=>res.data)
          setFinanceData(()=>res.data.financial)
          setcareerData(()=>res.data.career)
          setAcademicData(()=>res.data.academic)
          setScholarshipData(()=>res.data.scholarship)
          setOverViewData(()=>res.data.overview)
          console.log(financeData)
          console.log(careerData)
          console.log(academicData)
          console.log(scholarshipData)
        }
      }).catch(err=>{
        console.log(err)
      })
    }},[])
  return (
    <SafeAreaView>
        <ScrollView ref={scrollViewRef}>
            <Text className="text-[24px] font-pbold text-center">Detailed Report</Text>
        <JumpSection
            sectionOneRef={sectionOneRef}
            sectionTwoRef={sectionTwoRef}
            sectionThreeRef={sectionThreeRef}
            sectionFourRef={sectionFourRef}
            sectionFiveRef={sectionFiveRef}
            sectionSixRef={sectionSixRef}
            sectionSevenRef={sectionSevenRef}
            sectionEightRef={sectionEightRef}
            sectionNineRef={sectionNineRef}
            handlerScroll={scrollToSection}
        />
        <View ref={sectionOneRef}
        className="px-4 mb-7"
        >
          <Text className="text-[20px] font-psemibold text-center">Program Overview</Text>
          <Text
                style={{
                textAlign:'justify',
            }}
            >{overViewData}</Text>
        </View>
        <View ref={sectionTwoRef}
        className="px-4 mb-7"
        >
           <Text className="text-[20px] font-psemibold text-center">Academic</Text>
        <RenderAcademic
        data={academicData}
        />
          <Text className="text-[16px] font-pmedium">Note: The course schedule and credits may be subject to change. It's recommended to check with the DePaul University's College of Computing and Digital Media for the most up-to-date information.</Text>
        </View>
        <View ref={sectionThreeRef}
        className="px-4 mb-7"
        >
          <Text className="text-[20px] font-psemibold text-center">Finance</Text>
            <RenderFinance
            data={financeData}
            />
          <Text className="text-[16px] font-pmedium">Note that these estimates are subject to change and do not include other expenses such as books, supplies, and personal expenses. Additionally, scholarship amounts and availability may vary. It's recommended to check with DePaul University's financial aid office and external scholarship providers for the most up-to-date information.</Text>
        </View>
        <View ref={sectionFourRef}
        className="px-4 mb-7"
        >
            <Text className="text-[20px] font-psemibold text-center">Scholarships</Text>
            <RenderScholarShip
            data={scholarshipData}
            />
            <Text className="text-[16px] font-pmedium">Please note that these scholarships may have additional requirements, deadlines, and eligibility criteria. It's essential to check the official websites of these scholarships or contact the DePaul University Financial Aid Office for more information.</Text>
        </View>
        <View ref={sectionFiveRef}
        className="px-4 mb-7"
        >
            <Text className="text-[20px] font-psemibold text-center">career</Text>
           <Rendercareer 
          data={careerData}
          />
            <Text className="text-[16px] font-pmedium">Note: Salary ranges are approximate and based on national averages. They may vary depending on factors such as location, industry, and company size.</Text>
        </View>
        <View ref={sectionSixRef}
        className="px-4 mb-7"
        >
            <Text className="text-[20px] font-psemibold text-center">Housing & Dining</Text>
            <HousingAndMeals />
        </View>
        <View ref={sectionSevenRef}
        className="px-4 mb-7"
        >
            <Text className="text-[20px] font-psemibold text-center">Campus</Text>
            <CampusOverview />
        </View>
        <View ref={sectionEightRef}
        className="px-4 mb-7"
        >
            <Text className="text-[20px] font-psemibold text-center">LifeStyle</Text>
            <LifestyleOverview />
        </View>
        <View ref={sectionNineRef}
        className="px-4 mb-7"
        >
            <Text className="text-[20px] font-psemibold text-center">Documents Required</Text>
            <DocumentsRequired />
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default fullreport