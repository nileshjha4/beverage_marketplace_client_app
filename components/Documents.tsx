import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DocumentsRequired = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Admission Application</Text>
        <Text style={styles.subSectionTitle}>Online Application Form</Text>
        <Text style={styles.description}>
          Complete the online application form on DePaul University's website.
        </Text>
        <Text style={styles.subSectionTitle}>Application Fee</Text>
        <Text style={styles.description}>
          Pay the required application fee.
        </Text>
        <Text style={styles.subSectionTitle}>Transcripts</Text>
        <Text style={styles.description}>
          Official transcripts from all previously attended institutions.
        </Text>
        <Text style={styles.subSectionTitle}>Standardized Test Scores</Text>
        <Text style={styles.description}>
          SAT/ACT scores (optional for some programs), IELTS/TOEFL scores for international students.
        </Text>
        <Text style={styles.subSectionTitle}>Personal Statement/Essay</Text>
        <Text style={styles.description}>
          An essay or personal statement as required by the program.
        </Text>
        <Text style={styles.subSectionTitle}>Letters of Recommendation</Text>
        <Text style={styles.description}>
          Typically 1-3 letters from teachers, counselors, or professionals.
        </Text>
        <Text style={styles.subSectionTitle}>Resume/CV</Text>
        <Text style={styles.description}>
          A detailed resume or CV outlining academic and extracurricular achievements.
        </Text>
        <Text style={styles.subSectionTitle}>Portfolio (if required)</Text>
        <Text style={styles.description}>
          Required for some programs, particularly in the arts.
        </Text>
        <Text style={styles.subSectionTitle}>Financial Documents</Text>
        <Text style={styles.description}>
          Proof of financial support, such as bank statements or a sponsor letter.
        </Text>
        <Text style={styles.subSectionTitle}>Passport Copy</Text>
        <Text style={styles.description}>
          A copy of the applicant's valid passport.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Admission Decision</Text>
        <Text style={styles.subSectionTitle}>Acceptance Letter</Text>
        <Text style={styles.description}>
          Issued by DePaul University if the application is successful.
        </Text>
        <Text style={styles.subSectionTitle}>I-20 Form Request</Text>
        <Text style={styles.description}>
          Request the I-20 form from DePaul's international student office.
        </Text>
        <Text style={styles.subSectionTitle}>SEVIS Fee Payment</Text>
        <Text style={styles.description}>
          Pay the SEVIS I-901 fee and obtain the receipt.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SEVIS and I-20</Text>
        <Text style={styles.subSectionTitle}>I-20 Form</Text>
        <Text style={styles.description}>
          Issued by DePaul University; must be signed by the student and the DSO.
        </Text>
        <Text style={styles.subSectionTitle}>SEVIS I-901 Payment Receipt</Text>
        <Text style={styles.description}>
          Proof of payment of the SEVIS fee.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visa Application</Text>
        <Text style={styles.subSectionTitle}>DS-160 Form</Text>
        <Text style={styles.description}>
          Complete the online Nonimmigrant Visa Application (DS-160).
        </Text>
        <Text style={styles.subSectionTitle}>Visa Application Fee Receipt</Text>
        <Text style={styles.description}>
          Proof of payment of the visa application fee.
        </Text>
        <Text style={styles.subSectionTitle}>I-20 Form</Text>
        <Text style={styles.description}>
          Original signed I-20 form.
        </Text>
        <Text style={styles.subSectionTitle}>Passport</Text>
        <Text style={styles.description}>
          Valid passport with a validity date at least six months beyond the intended period of stay in the U.S.
        </Text>
        <Text style={styles.subSectionTitle}>Passport-Size Photograph</Text>
        <Text style={styles.description}>
          As per the U.S. visa photograph requirements.
        </Text>
        <Text style={styles.subSectionTitle}>Visa Interview Appointment Confirmation</Text>
        <Text style={styles.description}>
          Confirmation of the visa interview appointment.
        </Text>
        <Text style={styles.subSectionTitle}>SEVIS I-901 Payment Receipt</Text>
        <Text style={styles.description}>
          Proof of SEVIS fee payment.
        </Text>
        <Text style={styles.subSectionTitle}>Financial Documents</Text>
        <Text style={styles.description}>
          Proof of financial support, such as bank statements or a sponsor letter.
        </Text>
        <Text style={styles.subSectionTitle}>Visa Interview Preparation</Text>
        <Text style={styles.description}>
          Documents showing ties to home country, academic records, acceptance letter, etc.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visa Interview</Text>
        <Text style={styles.subSectionTitle}>Visa Application Form (DS-160) Confirmation Page</Text>
        <Text style={styles.description}>
          Printout of the confirmation page of the DS-160 form.
        </Text>
        <Text style={styles.subSectionTitle}>Visa Application Fee Receipt</Text>
        <Text style={styles.description}>
          Proof of payment of the visa application fee.
        </Text>
        <Text style={styles.subSectionTitle}>I-20 Form</Text>
        <Text style={styles.description}>
          Original signed I-20 form.
        </Text>
        <Text style={styles.subSectionTitle}>Passport</Text>
        <Text style={styles.description}>
          Valid passport with a validity date at least six months beyond the intended period of stay in the U.S.
        </Text>
        <Text style={styles.subSectionTitle}>Passport-Size Photograph</Text>
        <Text style={styles.description}>
          As per the U.S. visa photograph requirements.
        </Text>
        <Text style={styles.subSectionTitle}>Financial Documents</Text>
        <Text style={styles.description}>
          Proof of financial support, such as bank statements or a sponsor letter.
        </Text>
        <Text style={styles.subSectionTitle}>SEVIS I-901 Payment Receipt</Text>
        <Text style={styles.description}>
          Proof of SEVIS fee payment.
        </Text>
        <Text style={styles.subSectionTitle}>Acceptance Letter</Text>
        <Text style={styles.description}>
          Copy of the acceptance letter from DePaul University.
        </Text>
        <Text style={styles.subSectionTitle}>Academic Documents</Text>
        <Text style={styles.description}>
          Transcripts, diplomas, degrees, or certificates from previous institutions.
        </Text>
        <Text style={styles.subSectionTitle}>Visa Interview Appointment Confirmation</Text>
        <Text style={styles.description}>
          Confirmation of the visa interview appointment.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Post-Visa Approval</Text>
        <Text style={styles.subSectionTitle}>Visa Stamp in Passport</Text>
        <Text style={styles.description}>
          U.S. visa stamped in passport after approval.
        </Text>
        <Text style={styles.subSectionTitle}>I-20 Form</Text>
        <Text style={styles.description}>
          Keep the original signed I-20 form.
        </Text>
        <Text style={styles.subSectionTitle}>SEVIS I-901 Payment Receipt</Text>
        <Text style={styles.description}>
          Keep the receipt for record-keeping.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pre-Departure</Text>
        <Text style={styles.subSectionTitle}>Flight Booking</Text>
        <Text style={styles.description}>
          Book flight tickets to the U.S.
        </Text>
        <Text style={styles.subSectionTitle}>Travel Insurance</Text>
        <Text style={styles.description}>
          Purchase travel insurance if needed.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Arrival in the U.S.</Text>
        <Text style={styles.subSectionTitle}>Passport with Visa</Text>
        <Text style={styles.description}>
          Carry the passport with the U.S. visa stamp.
        </Text>
        <Text style={styles.subSectionTitle}>I-20 Form</Text>
        <Text style={styles.description}>
          Carry the original signed I-20 form.
        </Text>
        <Text style={styles.subSectionTitle}>SEVIS I-901 Payment Receipt</Text>
        <Text style={styles.description}>
          Carry the receipt for record-keeping.
        </Text>
        <Text style={styles.subSectionTitle}>Customs Declaration Forms</Text>
        <Text style={styles.description}>
          Complete forms required by U.S. Customs and Border Protection.
        </Text>
        <Text style={styles.subSectionTitle}>Financial Documents</Text>
        <Text style={styles.description}>
          Proof of financial support for U.S. entry.
        </Text>
        <Text style={styles.subSectionTitle}>DePaul Contact Information</Text>
        <Text style={styles.description}>
          Keep contact details for DePaul University's international student office.
        </Text>
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
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    marginBottom: 10,
  },
});

export default DocumentsRequired;
