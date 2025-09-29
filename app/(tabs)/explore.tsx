import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedView style={styles.infoSection}>
          <ThemedText type="subtitle">User Information</ThemedText>
          <ThemedText>Name: yogita bisht </ThemedText>
          <ThemedText>Email: yogita123@gmail.com</ThemedText>
        </ThemedView>

        <ThemedView style={styles.infoSection}>
          <ThemedText type="subtitle">Settings</ThemedText>
          <ThemedText>Theme: Auto</ThemedText>
          <ThemedText>Notifications: Enabled</ThemedText>
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
  infoSection: {
    gap: 10,
  },
});
