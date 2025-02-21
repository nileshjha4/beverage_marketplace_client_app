import { Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { applyDelete } from '@/logic/apply-delete'
import { useGlobalContext } from '@/context/GlobalProvider'

const CustomApplication=({otherStyles, application, degree, change, setChange})=>{
    const {token} = useGlobalContext()
    const handleFill=()=>{
        router.push('/screens/applychat')
    }
    const handleDelete=async()=>{
        const res = await applyDelete(application._id,token)
        if(res.success){
            setChange(!change)
        }
    }
    const handleApply=async()=>{
        
    }
    return(
        <View className={`${otherStyles} border border-gray-300 shadow-md rounded-xl pb-4 space-y-2`}>
            <View>
            <Text className="p-2 bg-[#0B60A3] text-white text-[18px] font-pmedium rounded-t-xl shadow-sm">{application.program}</Text>
            <Text className="p-2 px-8 bg-[#0B60A3] text-white text-[14px] font-sm shadow-sm">{application.specialization === 'No Specialization'? 'General': application.specialization}</Text>
            </View>
            <View className="mx-2 bg-[#0B60A3] rounded-xl justify-end items-end">
                <Text className="bg-white text-black w-[100px] text-right rounded-lg">69%    </Text>
            </View>
            <View className="flex flex-row items-center justify-between">
                <TouchableOpacity
                className="border border-blue-950 rounded-xl p-2 ml-14 w-[116px] h-[40px]"
                onPress={handleDelete}
                >
                    <Text className="text-[14px] text-center text-[#0B60A3]">Delete</Text>
                </TouchableOpacity>
                {application.status == 'pending' && <TouchableOpacity
                className="border bg-[#0B60A3] rounded-xl p-2 mr-14 w-[116px] h-[40px]"
                onPress={handleFill}
                >
                    <Text className="text-[14px] text-center text-white">Fill</Text>
                </TouchableOpacity>}
                {application.status == 'ready' && <TouchableOpacity
                className="border bg-[#0B60A3] rounded-xl p-2 mr-14 w-[116px] h-[40px]"
                onPress={handleApply}
                >
                    <Text className="text-[14px] text-center text-white">Apply</Text>
                </TouchableOpacity>}
            </View>
        </View>
    )
}
export default CustomApplication