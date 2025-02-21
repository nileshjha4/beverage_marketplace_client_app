import React from "react";
import { View, Text, ScrollView } from "react-native";

const data = { 
  facility: [
  {
      "name": "Library",
      "description": "The library offers a wide range of resources, including books, journals, and digital media. It provides study spaces, group study rooms, and access to computers and printing services.",
      "images": [
          "Library Image 1",
          "#",
          "Library Image 2",
          "#"
      ]
  },
  {
      "name": "Sports Complex",
      "description": "The Y.M. Tengku Tan Sri Dato' Seri Ahmad Rithauddeen Sports Complex includes a gymnasium, sports hall, and a swimming pool. It emphasizes sporting excellence and offers various recreational activities.",
      "images": [
          "Sports Complex Image 1",
          "#",
          "Sports Complex Image 2",
          "#"
      ]
  },
  {
      "name": "On-Campus Medical Clinic",
      "description": "Operated by Kumpulan Medic, this clinic provides health services, including consultations, medicine dispensing, and laboratory tests. It is committed to student health and safety.",
      "images": [
          "Medical Clinic Image 1",
          "#",
          "Medical Clinic Image 2",
          "#"
      ]
  },
  {
      "name": "Prayer Facilities",
      "description": "Prayer rooms are available 24 hours a day for Muslim students, located in the Computer Centre and the Islamic Centre. Facilities for other faiths are also available nearby.",
      "images": [
          "Prayer Room Image 1",
          "#",
          "Prayer Room Image 2",
          "#"
      ]
  },
  {
      "name": "Food & Beverage Outlets",
      "description": "The campus features various food and beverage outlets offering a range of cuisines, with some operating 24/7. There are also retail outlets for convenience.",
      "images": [
          "F&B Outlet Image 1",
          "#",
          "F&B Outlet Image 2",
          "#"
      ]
  },
  {
      "name": "Financial Trading Room",
      "description": "This purpose-built room allows business and finance students to conduct real-time trading simulations and market research, equipped with financial trading software and databases.",
      "images": [
          "Trading Room Image 1",
          "#",
          "Trading Room Image 2",
          "#"
      ]
  },
  {
      "name": "Bookable Rooms",
      "description": "The library offers various bookable rooms for meetings and individual study, equipped with multimedia facilities.",
      "images": [
          "Bookable Room Image 1",
          "#",
          "Bookable Room Image 2",
          "#"
      ]
  }
],
clubs: [
  {
      "name": "Student Association (SA)",
      "description": "The SA represents all students and organizes various events and activities, providing a platform for student voices and engagement.",
      "images": [
          "SA Event Image 1",
          "#",
          "SA Event Image 2",
          "#"
      ]
  },
  {
      "name": "AIESEC",
      "description": "AIESEC is a global platform for young people to explore and develop their leadership potential. The club organizes international internships and volunteer opportunities.",
      "images": [
          "AIESEC Event Image 1",
          "#",
          "AIESEC Event Image 2",
          "#"
      ]
  },
  {
      "name": "Drama Club",
      "description": "This club focuses on theatrical performances and workshops, allowing students to explore their creativity and acting skills.",
      "images": [
          "Drama Club Image 1",
          "#",
          "Drama Club Image 2",
          "#"
      ]
  },
  {
      "name": "Robotics Club",
      "description": "The Robotics Club engages students in robotics projects, competitions, and workshops, fostering skills in engineering and programming.",
      "images": [
          "Robotics Club Image 1",
          "#",
          "Robotics Club Image 2",
          "#"
      ]
  },
  {
      "name": "Environmental Club",
      "description": "This club promotes sustainability and environmental awareness through various initiatives and events, encouraging students to engage in eco-friendly practices.",
      "images": [
          "Environmental Club Image 1",
          "#",
          "Environmental Club Image 2",
          "#"
      ]
  },
  {
      "name": "Cultural Society",
      "description": "The Cultural Society celebrates the diverse cultures represented at the university through events, festivals, and cultural exchanges.",
      "images": [
          "Cultural Society Image 1",
          "#",
          "Cultural Society Image 2",
          "#"
      ]
  }
]
}

const CampusFacilities = ({ campus }) => {
  return (
    <ScrollView className="min-h-screen p-4 bg-white">
      <View className="max-w-full mx-auto">

        {/* Campus Facilities Heading */}
        <Text className="text-xl font-bold text-center mb-8 text-blue-900">
          Campus Facilities for University of Nottingham.
        </Text>

        {/* Campus Facilities Section */}
        <View className="grid grid-cols-1 gap-8 mb-8">
          {data?.facility.map((facilities, index) => (
            <View key={index} className="bg-blue-100 p-6 rounded-lg shadow-md">
              <Text className="text-xl font-semibold text-blue-800">{facilities.name}</Text>
              <Text className="text-gray-600 mt-2">{facilities.description}</Text>
            </View>
          ))}
        </View>

        {/* Student Clubs and Societies Section */}
        <Text className="text-xl font-bold mb-6 text-blue-900">Student Clubs and Societies</Text>
        <View className="space-y-4 mb-8">
          {data?.clubs.map((club, index) => (
            <View key={index} className="bg-blue-100 p-4 rounded-lg shadow-md">
              <Text className="text-lg font-semibold text-blue-800">{club.name}</Text>
              <Text className="text-gray-600">{club.description}</Text>
            </View>
          ))}
        </View>

        {/* Campus Facilities Gallery */}
        {/* Uncomment and populate this section if gallery images are available */}
        {/* <Text className="text-xl font-bold mb-6 text-blue-900">Campus Facilities Gallery</Text>
        <View className="grid grid-cols-2 gap-4">
          {[...].map((image, index) => (
            <Image key={index} source={{ uri: image }} className="w-full h-48 object-cover rounded-lg shadow-md" />
          ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

export default CampusFacilities;