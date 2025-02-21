import React from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const data = {
  name: "University of Nottingham, Malaysia",
  location: "Jalan Broga, 43500 Semenyih, Selangor Darul Ehsan, Malaysia",
  weather: "Tropical climate | 23°C to 30°C with regular rainfall",
  tuition: `Foundation Programs
Malaysian: RM8,900 - RM9,900
International: RM10,900 - RM11,800

Undergraduate Programs
Malaysian: RM29,700 - RM50,400
International: RM35,500 - RM61,700

Postgraduate Programs
Malaysian: RM39,900 - RM69,600
International: RM45,900 - RM74,415

Research Programs
Malaysian: RM39,900 - RM69,600
International: RM45,900 - RM74,415`,
  population: "Over 5000 students",
  international: "Largely from China, India, United States, Singapore, Nigeria, Pakistan, Saudi Arabia, Hong Kong, Bangladesh",
  campus: "118 acres",
  formation: "2000",
  qs: "114th QS Rankings 2023"
};

const UniversityOverview = ({ overview, title }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>
        Nottingham University, {title}
      </Text>
      <Text style={{ textAlign: "justify", marginBottom: 5 }}>
        Here you'll find a brief overview of our institution.
      </Text>
      <Text style={{ textAlign: "justify", marginBottom: 20, fontSize: 14 }}>
        Our university is committed to providing a world-class education and fostering a vibrant, inclusive community.
        With state-of-the-art facilities and a diverse student body, we offer a dynamic learning environment. Join us to
        explore a variety of academic programs, engage in groundbreaking research, and prepare for a successful future.
      </Text>

      <View style={{ width: '100%', alignItems: 'center' }}>
        {/* University Name */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <Icon name="graduation-cap" size={20} color="black" /> University Name
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.name}</Text>
        </View>

        {/* Location */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <Icon name="map-marker" size={20} color="black" /> Location
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.location}</Text>
        </View>

        {/* Weather */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <Icon name="sun-o" size={20} color="black" /> Weather
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.weather}</Text>
        </View>

        {/* Tuition Fee */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <MaterialIcon name="attach-money" size={20} color="black" /> Annual Tuition Fee
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.tuition}</Text>
        </View>

        {/* Number of Students */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <Icon name="user" size={20} color="black" /> Number of Students
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.population}</Text>
        </View>

        {/* International Students */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <Icon name="globe" size={20} color="black" /> International Students
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.international}</Text>
        </View>

        {/* Campus Size */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <Icon name="university" size={20} color="black" /> Campus Size
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.campus}</Text>
        </View>

        {/* Year of Formation */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <MaterialIcon name="calendar-today" size={20} color="black" /> Year of Formation
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.formation}</Text>
        </View>

        {/* QS Ranking */}
        <View style={{ backgroundColor: "#DBEAFD", borderRadius: 10, padding: 15, width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center", marginBottom: 5 }}>
            <Icon name="line-chart" size={20} color="black" /> QS Ranking
          </Text>
          <Text style={{ textAlign: "center" }}>{data?.qs}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default UniversityOverview;
