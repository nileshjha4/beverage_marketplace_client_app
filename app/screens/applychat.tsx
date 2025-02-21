import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getData, validation } from '@/logic/apply-question-validation';
import { useGlobalContext } from '@/context/GlobalProvider';
import { router } from 'expo-router';

const ApplyChatScreen = () => {
  const {token, user} = useGlobalContext()
  const [messages, setMessages] = useState<{ id: string; text: string; isUser: boolean}[]>([
    {
      id: '1',
      text: "Great, thanks for showing interest in this program, some of the fields are missing.",
      isUser: false,
    },
  ]);
  const [messageInput, setMessageInput] = useState('');
  const [questions,setQuestions] = useState({})
  const [keys,setKeys] = useState([])
  const [applyData,setApplyData] = useState({})


const handleSend = async () => {
  if (messageInput.trim()) {
    console.log(keys)
    const currentMessageInput = messageInput;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: currentMessageInput, isUser: true }
    ]);

    setMessageInput('');

    if (currentMessageInput.toLowerCase() === 'done') {
      console.log(applyData);
      router.push('/home');
      return;
    }

    const response = validation[keys[0]](currentMessageInput);

    if (response.success) {
      setApplyData((prevApplyData) => ({
        ...prevApplyData,
        [keys[0]]: currentMessageInput
      }));

      const newKeys = keys.slice(1);

      setKeys(newKeys);

      if (newKeys.length < 1) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now().toString(), text: "Form filling is completed, type 'Done' to exit", isUser: false }
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now().toString(), text: questions[newKeys[0]], isUser: false }
        ]);
      }
    }

    if (response.error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: response.message, isUser: false }
      ]);
    }
  } else {
    Alert.alert("Error", "Please enter a message");
  }
};


  const renderItem = ({ item }: { item: { text: string; isUser: boolean } }) => (
    <View
      className={`mb-4 p-5 rounded-3xl max-w-3/4 ${item.isUser ? 'bg-[#0B60A3] self-end rounded-br-none' : 'bg-gray-300 self-start rounded-bl-none'}`}
    >
      <Text className={`text-white ${item.isUser ? 'text-white' : 'text-gray-800'}`}>
        {item.text}
      </Text>
    </View>
  );

    useEffect(()=>{
      getData(token).then((res)=>{
        if(res.success){
          const key = Object.keys(res.questions)
          console.log(res.questions)
          setQuestions(res.questions)
          setKeys(()=>key)
          setMessages([
            ...messages,
            {id: Date.now().toString(), text: res.questions[key[0]], isUser:false
            }
          ])
        }else{
          Alert.alert("Error", res.message);
        }
      })
    },[])
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
      <View className="flex-row items-center p-4 bg-white border-t border-gray-300">
        <TextInput
          value={messageInput}
          onChangeText={setMessageInput}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <TouchableOpacity
          onPress={handleSend}
          className="ml-2 p-2 items-center justify-center"
        >
          <FontAwesome name="send" size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyChatScreen;
