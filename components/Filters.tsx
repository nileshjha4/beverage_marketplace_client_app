import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, FlatList, StyleSheet , Alert, Text } from 'react-native';
import data from '@/data/data';
import { useQuery } from '@tanstack/react-query';
import {useGlobalContext} from "@/context/GlobalProvider"
import { GetCompany } from '@/logic/get-company';
import { GetFlavour } from '@/logic/get-flavour';
import {Filter} from "@/logic/filters"

const Filters = ({ handleFilters, setFilters}) => {
  const {token} = useGlobalContext();
  const [form,setForm] = useState({
    company:'',
    flavour:'',
    price:'',
  })

  const { data: companyData, isLoading: isLoadingCompanyData } = useQuery({
    queryFn: () => GetCompany(token),
    queryKey: ["company"],
  });

  const { data: flavourData, isLoading: isLoadingFlavourData } = useQuery({
    queryFn: () => GetFlavour(token),
    queryKey: ["cart"],
  });

  if(isLoadingCompanyData || isLoadingFlavourData){
    return <View><Text>Loading data...</Text></View>
  }

  const renderPicker = ({ item }) => (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={item.selectedValue}
        onValueChange={item.onValueChange}
        itemStyle={{ fontSize: 16 }}
      >
        <Picker.Item label={item.placeholder} value='' />
        {item?.data?.map((option) => (
          <Picker.Item key={option.label} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );

  const pickerItems = [
    {
      selectedValue: form?.company,
      onValueChange: (e)=>{setForm((prevForm)=>({...prevForm, company:e}))},
      data: companyData?.data,
      placeholder: 'Company',
    },
    {
      selectedValue: form?.flavour,
      onValueChange: (e)=>{setForm((prevForm)=>({...prevForm,  flavour:e}))},
      data: flavourData?.data,
      placeholder: 'Flavour',
    },
    {
      selectedValue: form?.price,
      onValueChange: (e)=>{setForm((prevForm)=>({...prevForm, price:e}))},
      data: data?.price,
      placeholder: 'Price',
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={pickerItems}
        renderItem={renderPicker}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  pickerContainer: {
    width: 150,
    borderColor: 'black',
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default Filters;


// import React, { useState } from 'react';
// import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
// import data from '@/data/data';
// import { specialization } from '@/logic/specialization'

// const Filters = ({handleFilters,setForm, form}) => {
//   const [degree, setDegree] = useState("")
//   const [programValue, setProgramValue] = useState("")
//   const [specializationValue, setSpecializationValue] = useState("")
//   const [specials, setSpecials] = useState([])
//   const [program, setProgram] = useState([])

//   return (

//         <View className="flex flex-row mb-5 mt-4 space-x-2 flex-grow-0">
//           <View className="w-[150px] border border-black rounded-full">
//             <Picker selectedValue={degree} onValueChange={(e) => {
//               setDegree(e)
//               setForm({...form,degree:e})
//               if(e == 'undergraduate'){
//                   const programData = data.program.find(pro=>pro.degree=='undergraduate')
//                   setProgram(programData.programs)
//               }else if(e == 'graduate'){
//                   const programData = data.program.find(pro=>pro.degree=='graduate')
//                   setProgram(programData.programs)
//               }else if(e == 'phd'){
//                   const programData = data.program.find(pro=>pro.degree == 'phd')
//                   setProgram(programData.programs)
//               }else{
//                   const programData = data.program.find(pro=>pro.degree == 'diploma')
//                   setProgram(programData.programs)
//               }
//             }}
//             itemStyle={{fontSize:16}}
//             >
//               <Picker.Item label='Degree' value=''/>
//               {data.degree.map((degree) => (
//                 <Picker.Item key={degree.label} label={degree.label} value={degree.value} />
//               ))}
//             </Picker>
//           </View>
//           <View className="w-[150px] border border-black rounded-full">
//             <Picker selectedValue={programValue} onValueChange={async(e) => {
//               setProgramValue(e)
//               setForm({...form,program:e})
//               if(!degree){
//                 Alert.alert(
//                   "Error",
//                   "Please select a degree",
//                 )
//                 return
//               }
//               console.log(degree)
//                const response = await specialization({degree:form.degree, program:e})
//                if(response.formattedSpecialization){
//                   setSpecials(response.formattedSpecialization)
//                }
//             }}
//             itemStyle={{fontSize:16}}
//             >
//               <Picker.Item label='Program' value=''/>
//               {program.map((pro) => (
//                 <Picker.Item key={pro.label} label={pro.label} value={pro.value} />
//               ))}
//             </Picker>
//           </View>
//           <View className="w-[150px] border border-black rounded-full">
//             <Picker selectedValue={specializationValue} onValueChange={(e) => {
//               setSpecializationValue(e)
//               setForm({...form, specialization:e})
//             }}
//             itemStyle={{fontSize:16}}
//             >
//               <Picker.Item label='Specialization' value=''/>
//               {specials.map((spe) => (
//                 <Picker.Item key={spe.label} label={spe.label} value={spe.value} />
//               ))}
//             </Picker>
//           </View>
//         </View>
//   );
// };

// export default Filters;
