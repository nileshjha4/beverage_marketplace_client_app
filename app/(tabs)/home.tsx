import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import Filters from '../../components/Filters';
import ProgramCard from '../../components/ProgramCard';
import {useGlobalContext} from "@/context/GlobalProvider"
import { Recommendation } from '@/logic/recommendation';
import { Redirect } from 'expo-router';


const HomeScreen = () => {
  const {isLoading, isLoggedIn, token} = useGlobalContext();
  const [generatingReport, setGeneratingReport] = useState(false)
  
  if(!isLoading && !isLoggedIn){
    return <Redirect href="/sign-in" />
  }
  const [form,setForm] = useState({
    degree:'',
    category:'',
    program:'',
    specialization:''
  })
  const [Loading,setLoading] = useState(true)
  const [filteredPrograms,setFilteredPrograms] = useState([])

  const handleFilters=async()=>{
    if(!form.degree || !form.program || !form.specialization){
      Alert.alert("Please select all the fields")
      return;
    }
    Alert.alert(
      "INFO",
      "Not Implemented",
    )
  }

  useEffect(() => {
    if(token){
      Recommendation(token).then((result)=>{
        setFilteredPrograms(result?.organisedData)
      }).catch((err)=>{
        console.log(err)
      }).finally(()=>{
        setLoading(false)
      })
    }
  }, [])

  if(!token){
    return <Redirect href="/login" />
  }
  

  if(generatingReport){
    return (<View className='flex justify-center items-center'>
      <Text>Report is generating, please wait...</Text>
      </View>)
  }

  return (
    <>
    {Loading &&
    <View>
      <Text className="text-[24px] font-pbold">Loading...</Text>
    </View> 
    }
    {!Loading && <View className="flex-1 p-4 mt-5">
      <Filters
        handleFilters={handleFilters}
        setFilters={setFilteredPrograms}
      />
      <Text className="text-2xl font-bold mb-5">Beverages</Text>
      <FlatList
        data={filteredPrograms}
        renderItem={({ item }) => (
          <ProgramCard title={item?.company} modules={item?.items} generatingReport={setGeneratingReport} />
        )}
        keyExtractor={(item) => item?.company}
        showsVerticalScrollIndicator={false}
      />
    </View>}
    </>
  );
};

export default HomeScreen;
