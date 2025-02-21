import { View, Text, TouchableOpacity, ScrollView, Image, BackHandler } from 'react-native'
import { useEffect, useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router';
import {useGlobalContext} from "@/context/GlobalProvider"
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetParticularReport} from "@/logic/particular"
import images from '@/constants/images';
import ReportPart from '@/components/ReportPart';

const DetailReport = () => {
  const { user, token } = useGlobalContext()
  const { reportId } = useLocalSearchParams();
  const [data,setData] = useState({})
  const [isPart, setIsPart] = useState(false)
  const [reportData, setReportData] = useState({
    heading:'',
    content:'',
    title:''
  })
  useEffect(()=>{
    if(reportId){
      GetParticularReport(token, reportId).then((res)=>{
        if(res.success){
          if(res.data.degree === 'undergraduate'){
            res.data.degree = "Bachelor's"
          }else if(res.data.degree === 'graduate'){
            res.data.degree = "Master's"
          }
          setData(res?.data)
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  },[])
  useEffect(() => {
    const backAction = () => {
      if (isPart) {
        setIsPart(false); 
        return true; 
      }
      return false; 
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [isPart]);
  return (
    <SafeAreaView>
      <ScrollView>
      {!isPart && <View className='px-4 space-y-2'>
        <Text className="text-[18px] font-pbold flex w-full text-center">Personalised Report for {user?.firstName} {user?.lastName}</Text>
        <Text className="text-[16px] font-pregular flex w-full text-center">{data?.degree} in {data?.program}{data?.specialization ? ` with specialization in ${data?.specialization}`: ''}</Text>
        {/* <Text
        style={{
          textAlign:'justify',
        }}
        >{data.overview}</Text>
        <TouchableOpacity
          onPress={()=>{
          router.push({
              pathname: '/fullreport',
              params: {
                reportId: data._id
              }
            })
          }}
      >
        <Text className="underline text-[16px] text-left font-pbold">Click here to get a personalized report of the course in detail!</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      className="px-4 py-4 mb-6 border border-slate-400 shadow-sm rounded-lg"
      onPress={()=>setcareer(!career)}
      >
        <View className={`flex flex-row justify-between ${career? 'mb-4': ''}`}>
        <Text className='text-[18px] font-medium'>career</Text>
        <Image
        source={career ? images.up : images.down}
        className='w-[24px]'
        />
        </View>
        {career && 
          <Rendercareer 
          data={careerData}
          />
        }
      </TouchableOpacity>
      <TouchableOpacity 
      className="px-4 py-4 mb-6 border border-slate-400 shadow-sm rounded-lg"
      onPress={()=>setFinance(!finance)}
      >
        <View className={`flex flex-row justify-between ${finance? 'mb-4': ''}`}>
        <Text className='text-[18px] font-medium'>Financial</Text>
        <Image
        source={finance ? images.up : images.down}
        className='w-[24px]'
        />
        </View>
        {finance &&
           
            <RenderFinance
            data={financeData}
            />
        }
      </TouchableOpacity>
      <TouchableOpacity 
      className="px-4 py-4 border border-slate-400 shadow-sm rounded-lg"
      onPress={()=>setAcademic(!academic)}
      >
        <View className={`flex flex-row justify-between ${academic? 'mb-4': ''}`}>
        <Text className='text-[18px] font-medium'>Academic</Text>
        <Image
        source={academic ? images.up : images.down}
        className='w-[24px]'
        />
        </View>
        {academic &&
      
        <RenderAcademic
        data={academicData}
        />
        }
      </TouchableOpacity> */}
      <View className='flex flex-row flex-wrap justify-between py-4 space-y-2'>
        <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        setReportData({
          heading: 'Overview',
          content: 'Static',
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.overview}
        />
        <Text>Overview</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        console.log("Inside Academic press")
        setReportData({
          heading: 'Academic',
          content: data?.academic,
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.academic}
        />
        <Text>Academic</Text>
      </TouchableOpacity>
      <TouchableOpacity 
className="flex items-center w-[40%]"
onPress={()=>{
        console.log("Inside Academic press")
        setReportData({
          heading: 'Finance',
          content: data.financial,
          title: data?.program
        })
        setIsPart(true)
      }}
>
        <Image 
        source={images.finance}
        />
        <Text>Financial</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        console.log("Inside Scholarship press")
        setReportData({
          heading: 'Scholarship',
          content: 'scholarship',
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.scholarship}
        />
        <Text>Scholarship</Text>
      </TouchableOpacity>
      <TouchableOpacity 
className="flex items-center w-[40%]"
onPress={()=>{
        console.log("Inside Academic press")
        setReportData({
          heading: 'Career',
          content: data?.career,
          title: data?.program
        })
        setIsPart(true)
      }}
>
        <Image 
        source={images.career}
        />
        <Text>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        console.log("Inside Housing press")
        setReportData({
          heading: 'Housing',
          content: 'housing',
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.house}
        />
        <Text>Housing</Text>
      </TouchableOpacity>
      <TouchableOpacity 
className="flex items-center w-[40%]"
onPress={()=>{
        console.log("Inside campus press")
        setReportData({
          heading: 'Campus',
          content: 'campus',
          title: data?.program
        })
        setIsPart(true)
      }}
>
        <Image 
        source={images.campus}
        />
        <Text>Campus</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        console.log("Inside LifeStyle press")
        setReportData({
          heading: 'LifeStyle',
          content: 'lifestyle',
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.lifestyle}
        />
        <Text>LifeStyle</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        console.log("Inside Application press")
        setReportData({
          heading: 'Application Process',
          content: data?.application,
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.application}
        />
        <Text>Application</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        console.log("Inside Visa press")
        setReportData({
          heading: 'Visa Process',
          content: 'visa',
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.visa}
        />
        <Text>Visa</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="flex items-center w-[40%]"
      onPress={()=>{
        console.log("Inside postArrival press")
        setReportData({
          heading: 'Post Arrival',
          content: 'postArrival',
          title: data?.program
        })
        setIsPart(true)
      }}
      >
        <Image 
        source={images.post}
        />
        <Text>Post Arrival</Text>
      </TouchableOpacity>
      <TouchableOpacity 
className="flex items-center w-[40%]"
onPress={()=>{
        console.log("Inside Health press")
        setReportData({
          heading: 'Health and Safety',
          content: 'health',
          title: data?.program
        })
        setIsPart(true)
      }}
>
        <Image 
        source={images.health}
        />
        <Text>Health and Safety</Text>
      </TouchableOpacity>
      </View>
    </View>}
    {isPart && <ReportPart 
    data={reportData}
    />}
    </ScrollView>
    </SafeAreaView>
  )
}
export default DetailReport