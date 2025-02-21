import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {chat} from "@/logic/chat"
import { useGlobalContext } from '@/context/GlobalProvider';
import Markdown from 'react-native-markdown-display';

const ChatScreen = () => {
  const {academic, user} = useGlobalContext()
  const personalContext = `Name: ${user?.firstName} ,Degree: ${academic?.degree}, Program Interest: ${academic?.program}, Specialization interest: ${JSON.stringify(academic?.specialization)}`
  const [messages, setMessages] = useState<{ id: string; text: string; isUser: boolean}[]>([
    {
      id: '1',
      text: `Hello ${user.firstName}, I am Nottingam's AI admission office assistant. How can I help you today?`,
      isUser: false,
    },
  ]);
  const [messageInput, setMessageInput] = useState('');

  const handleSend = async() => {
    if (messageInput.trim()) {
      setMessages((prevMessages)=>([
        ...prevMessages,
        { id: Date.now().toString(), text: messageInput, isUser: true },
      ]))
      const message = await chat(messageInput,messages.slice(1),personalContext)
      console.log(message.data)
      setMessages((prevMessages)=>([
        ...prevMessages,
        { id: (Date.now() + 1).toString(), text: message?.data, isUser: false },
      ]));
      setMessageInput('');
    }
  };

  const renderItem = ({ item }: { item: { text: string; isUser: boolean } }) => (
    <View
      className={`mb-4 p-5 rounded-3xl max-w-3/4 ${item.isUser ? 'bg-[#0B60A3] self-end rounded-br-none' : 'bg-gray-300 self-start rounded-bl-none'}`}
    >
      <Markdown>{item.text}</Markdown>
    </View>
  );

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

export default ChatScreen;
