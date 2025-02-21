import { View, Text } from 'react-native';
import FinancialOverview from './report/financial';
import HousingOptions from './report/housing';
import UniversityOverview from './report/overview';
import Academic from './report/academic';
import ScholarshipOpportunities from './report/scholarship';
import CareerCenterServices from './report/career';
import CampusFacilities from './report/campus';
import Lifestyle from './report/lifestyle';
import ApplicationInfo from './report/application';
import Visa from './report/visa';
import PostArrival from './report/postArrival';
import Health from './report/health';

const ReportPart = ({data}) => {
  const renderComponent=()=>{
    switch(data.heading){
      case 'Overview':
        return <UniversityOverview overview={data.overview} title={data.title} />
      case 'Academic':
        return <Academic academic={JSON.parse(data?.content)} />
      case 'Finance':
        return <FinancialOverview financial={JSON.parse(data?.content)} />
      case 'Scholarship':
        return <ScholarshipOpportunities scholarship={data.scholarship} title={data.title} />
      case 'Career':
        return <CareerCenterServices career={JSON.parse(data?.content)} />
      case 'Housing':
        return <HousingOptions house={data.house} />
      case 'Campus':
        return <CampusFacilities campus={data.campus} />
      case 'LifeStyle':
        return <Lifestyle />
      case 'Application Process':
        return <ApplicationInfo application={JSON.parse(data?.content)} />
      case 'Visa Process':
        return <Visa visa={data.visa} />
      case 'Post Arrival':
        return <PostArrival postArrival={data.postArrival} />
      case 'Health and Safety':
        return <Health health={data.health} />
      default:
        return <Text>No Component Matches</Text>
    }
  }
  return (
   <View className="px-4">
        <Text className="text-[20px] font-psemibold text-center">{data.heading}</Text>
        <View>{renderComponent()}</View>
    </View>
  )
}

export default ReportPart