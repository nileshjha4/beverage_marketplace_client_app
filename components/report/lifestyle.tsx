import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const data = {
  day_life: "As a student at the University of Nottingham, Malaysia, daily life typically involves attending lectures, participating in group studies, and engaging in extracurricular activities. Students often start their day with classes, followed by study sessions in the library or study lounges. Many students also participate in clubs and societies, which provide opportunities for networking and personal development.",
  night_life: "The nightlife around the university is vibrant, with various options for students. Popular venues include local cafes, bars, and restaurants that often host events and live music. Students can enjoy themed nights, karaoke, and cultural events, making it a lively atmosphere for socializing after classes.",
  popular_areas: ["Semenyih", "Bangi", "Kuala Lumpur"],
  activities: "Students engage in a variety of activities during their free time, including: joining clubs and societies (e.g., sports, cultural, academic), participating in community service and volunteer work, and attending workshops and seminars for personal and professional development.",
  tourist_attractions: "Key attractions near the university include: Sungai Congkak - a natural park ideal for picnics and outdoor activities; Batu Caves - a famous limestone hill with caves and temples, a must-visit for tourists; Putrajaya - known for its stunning architecture and beautiful parks.",
  public_transport: "Public transportation in the area is accessible and affordable. Students can use buses with regular services connecting the university to nearby towns and Kuala Lumpur, e-hailing services convenient for late-night travel, and free shuttle buses provided by the university to key locations.",
  student_discounts: "Students can enjoy various discounts, including reduced fares for students on buses, discounts at local restaurants and cafes, and reduced ticket prices for movies and events.",
  social_networking: "The university promotes social interaction through clubs and societies, offering a platform for students to meet and collaborate, as well as organizing regular social events, workshops, and cultural festivals.",
  professional_networking: "Students have access to career fairs organized by the university to connect students with potential employers, and opportunities to visit local businesses and learn about various industries.",
  crime_safety_rates: "The area around the university is generally safe, with low crime rates. However, students are encouraged to remain vigilant and report any suspicious activities.",
  safety_tips: "Avoid walking alone at night in poorly lit areas. Keep personal belongings secure and be aware of your surroundings. Use reputable transportation services.",
  course_weather_info: [
    { month: "January", temperature_range: "23°C - 32°C", icon: "☀️" },
    { month: "February", temperature_range: "23°C - 32°C", icon: "☀️" },
    { month: "March", temperature_range: "24°C - 33°C", icon: "☀️" },
    { month: "April", temperature_range: "24°C - 33°C", icon: "☀️" },
    { month: "May", temperature_range: "24°C - 33°C", icon: "☀️" },
    { month: "June", temperature_range: "24°C - 32°C", icon: "☁️" },
    { month: "July", temperature_range: "24°C - 32°C", icon: "☁️" },
    { month: "August", temperature_range: "24°C - 32°C", icon: "☁️" },
    { month: "September", temperature_range: "24°C - 32°C", icon: "☁️" },
    { month: "October", temperature_range: "24°C - 32°C", icon: "☁️" },
    { month: "November", temperature_range: "24°C - 32°C", icon: "☁️" },
    { month: "December", temperature_range: "23°C - 31°C", icon: "☀️" },
  ],
};

const Lifestyle = () => {
  return (
    <ScrollView className="py-6">
      {/* Header */}
      <Text className="text-xl font-bold mb-4">Lifestyle in the City of Kuala Lumpur</Text>
      <Text className="text-lg text-gray-600 mb-8">
        Explore the vibrant and diverse lifestyle the city has to offer, from day life to night life, public transport, popular areas, activities, and weather patterns.
      </Text>

      {/* Weather Overview Section */}
      <View className="mb-8">
        <Text className="text-xl font-semibold mb-4">Weather Overview</Text>
        <ScrollView horizontal className="space-x-4">
          {data.course_weather_info.map((weather, index) => (
            <View key={weather.month} className="text-center">
              <Text className="text-4xl">{weather.icon}</Text>
              <Text className="text-lg">{weather.month}</Text>
              <Text className="text-sm text-gray-600">{weather.temperature_range}</Text>
            </View>
          ))}
        </ScrollView>
        <Text className="mt-4 text-gray-600">
          The city's weather patterns throughout the year vary from sunny and warm in the summer to cold and snowy in the winter. Prepare yourself with the right clothing by checking the recommended clothing suggestions for each month.
        </Text>
      </View>

      {/* Grid for City Lifestyle Sections */}
      <View className="flex flex-col gap-6 mb-12">
        {[
          { title: 'Day Life', description: data.day_life },
          { title: 'Night Life', description: data.night_life },
          { title: 'Activities', description: data.activities },
          { title: 'Popular Areas', description: data.popular_areas.join(', ') },
          { title: 'Crime Rates', description: data.crime_safety_rates },
          { title: 'Social Networking', description: data.social_networking },
          { title: 'Professional Networking', description: data.professional_networking },
          { title: 'Public Transport', description: data.public_transport },
          { title: 'Safety Tips', description: data.safety_tips },
          { title: 'Tourist Attractions', description: data.tourist_attractions },
          { title: 'Student Discounts', description: data.student_discounts },
        ].map((item, index) => (
          <View key={item.title} className="bg-blue-100 p-6 rounded-lg shadow-md flex-col">
            <Text className="text-xl font-semibold">{item.title}</Text>
            <Text className="text-gray-600 mb-4">{item.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Lifestyle;
