import React from "react";
import { View, Text, ScrollView } from "react-native";

const data={
          documents: [
              "Passport: Valid for the duration of your stay.",
              "Visa: Student visa or entry visa as applicable.",
              "Admission Letter: Proof of acceptance into the university.",
              "EMGS Approval Letter: Required for student pass processing.",
              "Financial Documents: Proof of funds for tuition and living expenses."
          ],
          air_tickets: "Various airlines operate flights to Malaysia, including Malaysia Airlines, AirAsia, and Singapore Airlines. It is advisable to arrive a few days before the semester starts to settle in and attend orientation.",
          health_insurance: "International students are required to have health insurance coverage. The university provides options for health insurance plans that meet the requirements set by the Malaysian government.",
          funds_for_payment: "100% of the academic year fee is due upon registration at the start of the semester. Alternatively, students can pay 50% at the start of each semester. Students should budget for accommodation, food, transportation, and personal expenses. It is recommended to have sufficient funds available upon arrival.",
          dos_immigration: [
              "Register with local authorities within 14 days of arrival.",
              "Obtain student pass as soon as possible."
          ],
          dont_immigration: [
              "Ensure that you do not overstay your visa duration.",
              "Students must not engage in any form of employment without the necessary permits."
          ],
          getting_settled: [
              "Explore on-campus and off-campus accommodation options. It is advisable to secure housing before arrival.",
              "Bring necessary documents (passport, student pass, offer letter) to open a local bank account.",
              "Attend orientation sessions and explore the campus facilities."
          ]
}


const PostArrival = ({ postArrival }) => {
  return (
    <ScrollView className="flex-1 p-4 bg-white">
      {/* Header */}
      <Text className="text-2xl font-bold text-black mb-6">
        Post-Arrival for University of Nottingham, Malaysia.
      </Text>

      {/* Documents Needed While Traveling */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold flex-row items-center mb-4">
          📄 Documents Needed While Traveling
        </Text>
        {data?.documents && data.documents.length > 0 ? (
          <View className="pl-4">
            {data?.documents.map((doc) => (
              <Text key={doc} className="text-gray-700 mb-2">• {doc}</Text>
            ))}
          </View>
        ) : (
          <Text className="text-gray-500">No documents listed.</Text>
        )}
      </View>

      {/* Air Tickets */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold flex-row items-center mb-4">
          ✈ Air Tickets
        </Text>
        <Text className="text-gray-700">
          {data?.air_tickets || "No information provided."}
        </Text>
      </View>

      {/* Health Insurance */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold flex-row items-center mb-4">
          🩺 Health Insurance
        </Text>
        <Text className="text-gray-700">
          {data?.health_insurance || "No information provided."}
        </Text>
      </View>

      {/* Funds for Payments */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold flex-row items-center mb-4">
          💵 Funds for Payments
        </Text>
        <Text className="text-gray-700">
          {data?.funds_for_payment || "No information provided."}
        </Text>
      </View>

      {/* Q&A by Immigration Officer */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold flex-row items-center mb-4">
          ❓ Q&A by Immigration Officer at Arrival
        </Text>
        <View className="mb-4">
          <Text className="text-base font-semibold">Dos</Text>
          {data?.dos_immigration && data.dos_immigration.length > 0 ? (
            <View className="pl-4">
              {data?.dos_immigration.map((dos) => (
                <Text key={dos} className="text-gray-700 mb-2">• {dos}</Text>
              ))}
            </View>
          ) : (
            <Text className="text-gray-500">No dos listed.</Text>
          )}
        </View>
        <View>
          <Text className="text-base font-semibold">Don'ts</Text>
          {data?.dont_immigration && data.dont_immigration.length > 0 ? (
            <View className="pl-4">
              {data?.dont_immigration.map((dont) => (
                <Text key={dont} className="text-gray-700 mb-2">• {dont}</Text>
              ))}
            </View>
          ) : (
            <Text className="text-gray-500">No don'ts listed.</Text>
          )}
        </View>
      </View>

      {/* Getting Settled */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold flex-row items-center mb-4">
          🏡 Getting Settled
        </Text>
        {data?.getting_settled && data.getting_settled.length > 0 ? (
          <View className="pl-4">
            {data?.getting_settled.map((item) => (
              <Text key={item} className="text-gray-700 mb-2">• {item}</Text>
            ))}
          </View>
        ) : (
          <Text className="text-gray-500">No information provided.</Text>
        )}
      </View>

      {/* University Follow-Up */}
      <View className="bg-blue-100 p-4 rounded-lg mb-6">
        <Text className="text-lg font-semibold flex-row items-center mb-4">
          🏫 University Follow-Up
        </Text>
        <Text className="text-gray-700">
          Importance of following up with the university to attend orientation
          sessions and ensure compliance with visa requirements for legal stay.
        </Text>
      </View>
    </ScrollView>
  );
};

export default PostArrival;