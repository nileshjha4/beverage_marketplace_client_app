import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const HousingAndMeals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Housing Options</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Housing Type</Text>
            <Text style={styles.tableHeader}>Estimated Cost (Per Academic Year)</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Residence Halls</Text>
            <Text style={styles.tableCell}>$12,000 - $15,000</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>University-Owned Apartments</Text>
            <Text style={styles.tableCell}>$14,000 - $20,000</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Off-Campus Housing</Text>
            <Text style={styles.tableCell}>Varies significantly</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meal Plans</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Meal Plan</Text>
            <Text style={styles.tableHeader}>Estimated Cost (Per Semester)</Text>
            <Text style={styles.tableHeader}>Estimated Cost (Per Year)</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>140 Block Plan</Text>
            <Text style={styles.tableCell}>$1,870</Text>
            <Text style={styles.tableCell}>$3,740</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>225 Block Plan</Text>
            <Text style={styles.tableCell}>$2,635</Text>
            <Text style={styles.tableCell}>$5,270</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Unlimited Dining</Text>
            <Text style={styles.tableCell}>$2,900</Text>
            <Text style={styles.tableCell}>$5,800</Text>
          </View>
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
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
});

export default HousingAndMeals;
