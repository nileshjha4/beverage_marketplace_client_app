import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import ModuleCard from './ModuleCard';

const ProgramCard = ({ title, modules, generatingReport }) => {
  useEffect(()=>{
    console.log("module is: ", modules[0])
    console.log("title is: ", title)
  },[])
  return (
    <View className="mb-5">
      <Text className="text-xl mb-2">{title}</Text>
      <FlatList
        horizontal
        data={modules}
        renderItem={({ item }) => (
          <ModuleCard
            id={item?._id}
            title={item?.item}
            flavour={item?.flavour}
            price={item?.price}
            imageUrl={item?.imageUrl}
            minqty={item?.minqty}
            qty={item?.qty}
            generatingReport={generatingReport}
          />
        )}
        keyExtractor={(item) => {
          if(item?._id){
            return item?._id
          }else{
            return 'No Name'
          }
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProgramCard;
