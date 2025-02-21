import React from "react";
import { View, Text, ScrollView } from "react-native";

const data = {
          university: "University of Nottingham, Malaysia",
          course_title: "General Visa Process for University Students",
          about_visa: "International students planning to study at the University of Nottingham Malaysia must apply for a Student Pass. This is a requirement for all international students and must be obtained before entering Malaysia. The Visa Approval Letter (VAL) is issued by the Malaysian Immigration Department and is necessary for the Student Pass application.",
          common_questions: [
              {
                  "question": "Why do you want to study in Malaysia?",
                  "good_response": "I am attracted to the diverse culture and high-quality education offered at the University of Nottingham Malaysia.",
                  "bad_response": "I just want to travel and have fun."
              },
              {
                  "question": "How will you support yourself financially?",
                  "good_response": "I have sufficient funds in my bank account and my family will also support me.",
                  "bad_response": "I plan to find a job there."
              },
              {
                  "question": "What are your plans after completing your studies?",
                  "good_response": "I plan to return to my home country and apply the knowledge I gained to contribute to my community.",
                  "bad_response": "I haven't thought about it yet."
              }
          ],
          visa_process: [
              "Receive Offer Letter: Ensure you have received your offer letter from the University.",
              "Prepare Documents: Gather all required documents for the visa application.",
              "Apply for VAL: Submit your application for the Visa Approval Letter (VAL) through the University’s Visa Office or directly to Education Malaysia Global Services (EMGS).",
              "Receive VAL: Wait for the VAL approval from the Malaysian Immigration Department.",
              "Apply for Student Pass: Once you have the VAL, apply for the Student Pass at the nearest Malaysian embassy or consulate.",
              "Medical Screening: Complete the mandatory medical screening within 7 days of arrival in Malaysia.",
              "Collect Student Pass: After arriving in Malaysia, collect your Student Pass from the Immigration Department."
          ],
          documents_required: [
              "Valid passport (with at least 6 months validity)",
              "Passport-sized photographs",
              "Proof of sufficient funds (bank statements)",
              "Visa application form",
              "Medical examination report",
              "Offer letter from the University",
              "Visa Approval Letter (VAL)",
              "EMGS approval letter"
          ],
          scheduled_interview: "The visa interview is typically conducted at the Malaysian embassy or consulate. It is important to prepare for this interview by reviewing your application and being ready to discuss your study plans and financial situation.",
          dos_for_visa_interview: [
              "Dress professionally.",
              "Be honest and clear in your responses.",
              "Bring all required documents.",
              "Practice common interview questions."
          ],
          donts_for_visa_interview: [
              "Don’t provide false information.",
              "Avoid being overly casual or unprepared.",
              "Don’t argue with the visa officer."
          ],
          average_cost_of_visa: "Approx. RM 700-850",
          other_visa_related_information: "Ensure that you apply for your visa well in advance, as processing can take up to two months. All international students must have valid health insurance throughout their studies in Malaysia. For further assistance, you can contact the University of Nottingham Malaysia's Visa Office at apply.visa@nottingham.edu.my or call +603 8924 8088."
}

const Visa = ({ visa }) => {
  console.log(visa);
  return (
    <View className="min-h-screen p-2">
      {/* Header */}
      <Text className="text-xl font-bold text-center text-black py-1 mb-1">
        Student Visa Process for University of Nottingham, Malaysai.
      </Text>

      <ScrollView>
        {/* About US Student Visa */}
        <View className="bg-blue-100 p-6 rounded-lg mb-8">
          <Text className="text-xl font-semibold flex items-center mb-4">
            <Text className="text-2xl mr-2"></Text> About Student Visa
          </Text>
          <Text className="text-gray-700">{data?.about_visa}</Text>
        </View>

        {/* Visa Process */}
        <View className="bg-blue-100 p-6 rounded-lg mb-8">
          <Text className="text-xl font-semibold flex items-center mb-4">
            <Text className="text-2xl mr-2">📋</Text> Visa Process
          </Text>
          <View>
            <Text className="text-gray-700 list-disc pl-6">
              {data?.visa_process?.map((doc, index) => (
                <Text key={index} className="text-gray-700 list-disc pl-6">
                  - {doc}
                  {'\n'}
                </Text>
              ))}
            </Text>
          </View>
        </View>

        {/* Documents Required */}
        <View className="bg-blue-100 p-6 rounded-lg mb-8">
          <Text className="text-xl font-semibold flex items-center mb-4">
            <Text className="text-2xl mr-2">📋</Text> Documents Required
          </Text>
          <View>
            <Text className="text-gray-700 list-disc pl-6">
              {data?.documents_required?.map((doc, index) => (
                <Text key={index} className="text-gray-700 list-disc pl-6">
                  - {doc}
                  {'\n'}
                </Text>
              ))}
            </Text>
          </View>
        </View>

        {/* How to Schedule an Interview */}
        <View className="bg-blue-100 p-6 rounded-lg mb-8">
          <Text className="text-xl font-semibold flex items-center mb-4">
            <Text className="text-2xl mr-2">📅</Text> How to Schedule an Interview
          </Text>
          <Text className="text-gray-700">{data?.scheduled_interview}</Text>
        </View>

        {/* Dos and Don'ts for the Visa Interview */}
        <View className="bg-blue-100 p-6 rounded-lg mb-8">
          <Text className="text-xl font-semibold flex items-center mb-4">
            <Text className="text-2xl mr-2">👍</Text> Dos and Don'ts for the Visa Interview
          </Text>
          <View className="mb-4">
            <Text className="text-lg font-semibold">Dos</Text>
            <Text className="text-gray-700 list-disc pl-6">
              {data?.dos_for_visa_interview?.map((doc, index) => (
                <Text key={index} className="text-gray-700 list-disc pl-6">
                  - {doc}
                  {'\n'}
                </Text>
              ))}
            </Text>
          </View>
          <View>
            <Text className="text-lg font-semibold">Don'ts</Text>
            <Text className="text-gray-700 list-disc pl-6">
              {data?.donts_for_visa_interview?.map((doc, index) => (
                <Text key={index} className="text-gray-700 list-disc pl-6">
                  - {doc}
                  {'\n'}
                </Text>
              ))}
            </Text>
          </View>
          <Text className="text-lg font-semibold mt-2">Commonly Asked Questions</Text>
          {data?.common_questions?.map((question, index) => (
            <View key={index} className="mt-2">
              <Text className="text-gray-700 mt-2">
                <Text className="font-bold">Question: </Text>
                {question?.question}
              </Text>
              <Text className="text-green-600">Good Answer: {question?.good_response}</Text>
              <Text className="text-red-600">Bad Answer: {question?.bad_response}</Text>
            </View>
          ))}
        </View>

        {/* Cost of US Visa */}
        <View className="bg-blue-100 p-6 rounded-lg mb-8">
          <Text className="text-xl font-semibold flex items-center mb-4">
            <Text className="text-2xl mr-2">💵</Text> Cost of Visa
          </Text>
          <Text className="text-gray-700">{data?.average_cost_of_visa}</Text>
        </View>

        {/* Other Miscellaneous Information */}
        <View className="bg-blue-100 p-6 rounded-lg mb-8">
          <Text className="text-xl font-semibold flex items-center mb-4">
            <Text className="text-2xl mr-2">ℹ</Text> Other Miscellaneous Information
          </Text>
          <Text className="text-gray-700">
            Prepare thoroughly for your visa interview by reviewing your documents and practicing your answers. Be aware that waiting times for visa appointments can vary, so plan accordingly. For further assistance, you can refer to resources provided by your university or the US consulate’s website.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Visa;