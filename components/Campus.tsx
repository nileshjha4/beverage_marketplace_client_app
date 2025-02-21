import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const CampusOverview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Campus Facilities</Text>
        <Text style={styles.description}>
          DePaul's campuses, primarily the Lincoln Park and the Loop campuses in Chicago, are well-equipped with modern facilities:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>Classrooms and Labs: State-of-the-art classrooms and specialized labs to support diverse fields of study.</Text>
          <Text style={styles.bulletItem}>Libraries: The Richardson Library in Lincoln Park and the Daley Library in the Loop provide extensive resources, study spaces, and technology.</Text>
          <Text style={styles.bulletItem}>Recreation Centers: Fitness centers with gym facilities, sports equipment, and wellness programs.</Text>
          <Text style={styles.bulletItem}>Student Centers: Spaces like the Lincoln Park Student Center offer lounges, meeting rooms, and dining options.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Extracurricular Facilities</Text>
        <Text style={styles.description}>
          DePaul encourages a well-rounded student experience with facilities that support various interests:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>Arts and Culture: The Theatre School provides performance spaces, while the O’Connell Hall houses the Art Museum.</Text>
          <Text style={styles.bulletItem}>Performance Venues: The Merle Reskin Theatre and the Schmitt Academic Center Theatre for music and drama productions.</Text>
          <Text style={styles.bulletItem}>Student Media: Facilities for student-run media outlets including a radio station, a television station, and a newspaper.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Student Clubs and Societies</Text>
        <Text style={styles.description}>
          DePaul University has a diverse array of clubs and organizations that cater to a wide range of interests:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>Academic Clubs: Groups like the Pre-Med Society, Debate Team, and various professional associations.</Text>
          <Text style={styles.bulletItem}>Cultural and Identity-Based Organizations: Organizations such as the Asian Student Coalition, Black Student Union, and Latino Student Alliance.</Text>
          <Text style={styles.bulletItem}>Special Interest Groups: Includes everything from video gaming clubs to environmental advocacy groups.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety Measures</Text>
        <Text style={styles.description}>
          DePaul University is committed to providing a safe environment for its students:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>Campus Security: 24/7 security services with campus patrols, emergency response systems, and a blue light emergency phone system.</Text>
          <Text style={styles.bulletItem}>Safety Apps: The Blue Demon Safe app provides resources and safety tools for students.</Text>
          <Text style={styles.bulletItem}>Safety Programs: Educational programs and workshops on safety awareness, bystander intervention, and personal safety.</Text>
          <Text style={styles.bulletItem}>Emergency Notifications: An emergency notification system to keep students informed in the event of urgent situations.</Text>
        </View>
      </View>
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
  description: {
    marginBottom: 10,
  },
  bulletList: {
    marginLeft: 15,
  },
  bulletItem: {
    marginBottom: 5,
  },
});

export default CampusOverview;
