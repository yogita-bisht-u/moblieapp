import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Contact Us</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedView style={styles.contactItem}>
          <MaterialIcons name="location-on" size={24} color="#FF6B6B" />
          <ThemedText style={styles.contactText}>123 Food Street, Cuisine City</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contactItem}>
          <MaterialIcons name="phone" size={24} color="#FF6B6B" />
          <ThemedText style={styles.contactText}>+1 234 567 8900</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contactItem}>
          <MaterialIcons name="email" size={24} color="#FF6B6B" />
          <ThemedText style={styles.contactText}>info@eatbest.com</ThemedText>
        </ThemedView>

        <ThemedView style={styles.hours}>
          <ThemedText type="subtitle" style={styles.hoursTitle}>Opening Hours</ThemedText>
          <ThemedText style={styles.hoursText}>Monday - Sunday</ThemedText>
          <ThemedText style={styles.hoursText}>11:30 AM - 10:00 PM</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  content: {
    padding: 20,
    gap: 30,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  contactText: {
    fontSize: 16,
  },
  hours: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  hoursTitle: {
    marginBottom: 10,
    color: '#FF6B6B',
  },
  hoursText: {
    fontSize: 16,
    marginBottom: 5,
  },
});