import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';

const data = {
          scholarships: [
              {
                  "name": "High Achievers' Scholarship (HAS)",
                  "description": "A merit scholarship awarded to deserving and academically excellent students.",
                  "eligibility_criteria": "Applicable for Foundation and Undergraduate students; specific subject grades may be required.",
                  "grant": "Automatic scholarship for academically qualified applicants."
              },
              {
                  "name": "Dean's Excellence Scholarship (DES)",
                  "description": "Awarded to top achieving current students at the point of progression for each academic year.",
                  "eligibility_criteria": "Must be within the top 2% of the school population.",
                  "grant": "25% reduction of tuition fees for one academic year."
              },
              {
                  "name": "Sibling Scholarship",
                  "description": "A scholarship for siblings studying at the university.",
                  "eligibility_criteria": "Applicable to siblings enrolled at the university.",
                  "grant": "10% reduction for the first year's tuition fees."
              },
              {
                  "name": "Sports Scholarship",
                  "description": "Awarded to students who excel in sports.",
                  "eligibility_criteria": "Must demonstrate sporting excellence.",
                  "grant": "50% tuition fee reduction throughout the undergraduate programme."
              },
              {
                  "name": "Arts Scholarship",
                  "description": "For students pursuing arts-related courses.",
                  "eligibility_criteria": "Must demonstrate excellence in arts.",
                  "grant": "50% tuition fee reduction throughout the undergraduate programme."
              },
              {
                  "name": "Provost's Excellence Scholarship",
                  "description": "Designed for exceptional undergraduate students facing financial hardship.",
                  "eligibility_criteria": "Must hold an offer letter from UNM and be active in sports or extracurricular activities.",
                  "grant": "100% full scholarship for the entire course."
              },
              {
                  "name": "UNM - MCKL Scholarship",
                  "description": "Offered to exceptional Methodist College Kuala Lumpur students.",
                  "eligibility_criteria": "Must be a Malaysian national and maintain a second upper-class average.",
                  "grant": "100% full scholarship for tuition fees."
              },
              {
                  "name": "CIMB ASEAN Scholarship",
                  "description": "A full scholarship for exceptional students from ASEAN countries.",
                  "eligibility_criteria": "Must be a citizen of an ASEAN country and not hold any other scholarship with contractual obligations.",
                  "grant": "Comprehensive coverage of expenses, including tuition fees and living expenses."
              },
              {
                  "name": "Kuok Foundation Study Award",
                  "description": "For financially deserving Malaysian citizens pursuing their first degree.",
                  "eligibility_criteria": "Must be a Malaysian citizen and financially deserving.",
                  "grant": "Up to RM50,000 of tuition fee per annum."
              },
              {
                  "name": "PhD High Achiever's Scholarship",
                  "description": "For students with First Class Honours pursuing a PhD.",
                  "eligibility_criteria": "Must be in the final year of undergraduate studies or have a First Class Honours degree.",
                  "grant": "Full coverage of tuition fees and a monthly stipend of RM2000 for 3 years."
              },
              {
                  "name": "Developing Solutions Scholarship",
                  "description": "Aimed at students from developing countries.",
                  "eligibility_criteria": "Must be from a developing country and register for taught master's programmes.",
                  "grant": "Full tuition fee scholarships available."
              },
              {
                  "name": "Tengku Ahmad Rithauddeen Badminton Scholarship",
                  "description": "For national and state level badminton players.",
                  "eligibility_criteria": "Must be affiliated with AJBC.",
                  "grant": "75% tuition fee coverage for the Foundation and undergraduate programmes."
              },
              {
                  "name": "Hardship Fund",
                  "description": "Financial aid for students experiencing financial difficulties.",
                  "eligibility_criteria": "Open to all students.",
                  "grant": "Varies based on individual circumstances."
              },
              {
                  "name": "Alumni Scholarship",
                  "description": "For postgraduate students who are alumni of Universitas 21 institutions.",
                  "eligibility_criteria": "Must be an alumnus of a Universitas 21 institution.",
                  "grant": "Varies based on the UNM admissions deadline."
              },
              {
                  "name": "PGT Corporate Scholarship",
                  "description": "For postgraduate taught students.",
                  "eligibility_criteria": "Based on the UNM admissions deadline.",
                  "grant": "Varies."
              },
              {
                  "name": "MARA TESP (Tertiary Education Sponsorship Programme)",
                  "description": "For Bumiputera students.",
                  "eligibility_criteria": "Must be a Malaysian Bumiputera.",
                  "grant": "Varies."
              },
              {
                  "name": "EPF Withdrawal",
                  "description": "For EPF members.",
                  "eligibility_criteria": "Open to all EPF members.",
                  "grant": "Varies."
              }
          ]
}

const ScholarshipOpportunities = ({ title }) => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  
  const renderTableHeader = () => (
    <View style={styles.headerRow}>
      <View style={[styles.headerCell, { width: '35%' }]}>
        <Text style={styles.headerText}>Scholarship Name</Text>
      </View>
      <View style={[styles.headerCell, { width: '40%' }]}>
        <Text style={styles.headerText}>Eligibility Criteria</Text>
      </View>
      <View style={[styles.headerCell, { width: '25%' }]}>
        <Text style={styles.headerText}>Scholarship Amount</Text>
      </View>
    </View>
  );

  const renderScholarshipRow = (scholar, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => setSelectedScholarship(scholar)}
      style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}
    >
      <View style={[styles.cell, { width: '35%' }]}>
        <Text style={styles.scholarshipName}>{scholar.name}</Text>
      </View>
      <View style={[styles.cell, { width: '40%' }]}>
        <Text style={styles.cellText}>{scholar.eligibility_criteria}</Text>
      </View>
      <View style={[styles.cell, { width: '25%' }]}>
        <Text style={styles.cellText}>{scholar.grant}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Scholarship Opportunities
        </Text>
        <Text style={styles.subtitle}>
          University of Nottingham, Malaysia {title}
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Table */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.tableContainer}>
            <ScrollView showsVerticalScrollIndicator={true} style={styles.tableScroll}>
              {renderTableHeader()}
              {data.scholarships.map(renderScholarshipRow)}
            </ScrollView>
          </View>
        </ScrollView>

        {/* Selected Scholarship Details */}
        {selectedScholarship && (
          <View style={styles.detailsContainer}>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailsTitle}>{selectedScholarship.name}</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setSelectedScholarship(null)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.detailsContent}>
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Description</Text>
                <Text style={styles.detailsText}>{selectedScholarship.description}</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Eligibility Criteria</Text>
                <Text style={styles.detailsText}>{selectedScholarship.eligibility_criteria}</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Grant</Text>
                <Text style={styles.detailsText}>{selectedScholarship.grant}</Text>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#003087', 
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  tableContainer: {
    minWidth: Dimensions.get('window').width - 30,
  },
  tableScroll: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#003087',
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerCell: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0', // Line separator between columns
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left', // Left align header text
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  evenRow: {
    backgroundColor: '#ffffff',
  },
  oddRow: {
    backgroundColor: '#f8f9fa',
  },
  cell: {
    padding: 15,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0', // Line separator between columns
  },
  scholarshipName: {
    color: '#003087',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'left', // Left align cell text
  },
  cellText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'left', // Left align cell text
  },
  detailsContainer: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    maxHeight: 400,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003087',
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#666666',
  },
  detailsContent: {
    padding: 15,
  },
  detailsSection: {
    marginBottom: 15,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003087',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
});

export default ScholarshipOpportunities;
