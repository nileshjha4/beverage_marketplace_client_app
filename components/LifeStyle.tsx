import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const LifestyleOverview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Day Life</Text>
        <Text style={styles.description}>
          Life as a student in Chicago offers a dynamic and diverse experience, enriched by the city's vast resources, cultural activities, and vibrant social scene.
        </Text>
        <Text style={styles.subSectionTitle}>Academic Environment</Text>
        <Text style={styles.bulletItem}>Chicago is home to numerous prestigious institutions, including DePaul University. Students benefit from access to a variety of academic resources, libraries, and research opportunities.</Text>
        <Text style={styles.subSectionTitle}>Cultural Attractions</Text>
        <Text style={styles.bulletItem}>The city is known for its museums, such as the Art Institute of Chicago, the Field Museum, and the Museum of Science and Industry. These venues often host student-friendly events and exhibitions.</Text>
        <Text style={styles.subSectionTitle}>Parks and Recreation</Text>
        <Text style={styles.bulletItem}>Chicago's parks, including Millennium Park and Lincoln Park, offer green spaces for relaxation, sports, and outdoor activities. Lakefront trails are popular for biking, running, and walking.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nightlife</Text>
        <Text style={styles.bulletItem}>Chicago has a vibrant nightlife with a wide range of bars, clubs, and live music venues. Areas like Wrigleyville, River North, and the West Loop are particularly popular among students.</Text>
        <Text style={styles.subSectionTitle}>Cultural Events</Text>
        <Text style={styles.bulletItem}>The city hosts a variety of cultural events, including concerts, theater performances, and comedy shows, many of which offer student discounts.</Text>
        <Text style={styles.subSectionTitle}>Dining</Text>
        <Text style={styles.bulletItem}>From food trucks to high-end restaurants, Chicago offers a diverse culinary scene. Students can explore various neighborhoods to experience different cuisines.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activities</Text>
        <Text style={styles.bulletItem}>Chicago is passionate about sports, with teams like the Cubs, White Sox, Bulls, Bears, and Blackhawks offering plenty of opportunities to enjoy live games.</Text>
        <Text style={styles.subSectionTitle}>Festivals and Events</Text>
        <Text style={styles.bulletItem}>The city hosts numerous festivals throughout the year, such as Lollapalooza, the Chicago Air and Water Show, and the Taste of Chicago, which provide fun and cultural experiences.</Text>
        <Text style={styles.subSectionTitle}>Volunteer Opportunities</Text>
        <Text style={styles.bulletItem}>Chicago's many non-profits and community organizations offer students opportunities to engage in volunteer work and community service.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Public Transport</Text>
        <Text style={styles.bulletItem}>CTA: The Chicago Transit Authority (CTA) operates an extensive network of buses and 'L' trains, making it easy to get around the city.</Text>
        <Text style={styles.bulletItem}>Metra: The commuter rail service Metra provides additional travel options to suburbs, often used by students who live outside the city.</Text>
        <Text style={styles.bulletItem}>Biking: Chicago is becoming increasingly bike-friendly, with dedicated bike lanes and bike-sharing programs like Divvy.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weather</Text>
        <Text style={styles.bulletItem}>Seasonal Variation: Chicago experiences all four seasons, with cold winters that can be quite harsh, characterized by snow and freezing temperatures. Summers are typically hot and humid, while spring and autumn offer milder weather.</Text>
        <Text style={styles.bulletItem}>Preparation: Students are advised to dress in layers and be prepared for sudden weather changes, especially in the winter.</Text>
      </View>

      <Text style={styles.conclusion}>
        Living in Chicago provides students with a wealth of opportunities to learn, grow, and have fun. The city's combination of educational institutions, cultural offerings, and social activities makes it a vibrant place for student life.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    marginBottom: 10,
  },
  bulletItem: {
    marginBottom: 5,
    marginLeft: 15,
  },
  conclusion: {
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default LifestyleOverview;
