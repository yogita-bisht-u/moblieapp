import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">About Us</ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.content}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Our Story</ThemedText>
            <ThemedText style={styles.paragraph}>
              Founded in 2020, Eat Best Restaurant began with a simple vision: to create a unique dining experience that combines the best of traditional and modern cuisine. Our journey started with a passion for authentic momos and has evolved into a culinary destination offering a diverse menu of international flavors.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Our Philosophy</ThemedText>
            <ThemedText style={styles.paragraph}>
              We believe in using the freshest ingredients, preparing everything from scratch, and creating memorable dining experiences. Every dish is crafted with care, combining traditional recipes with modern cooking techniques.
            </ThemedText>
          </ThemedView>

          <Collapsible title="Quality Commitment">
            <ThemedText style={styles.collapsibleContent}>
              • Fresh, locally-sourced ingredients{"\n"}
              • Daily made sauces and bread{"\n"}
              • Strict quality control{"\n"}
              • Hygienic preparation
            </ThemedText>
          </Collapsible>

          <Collapsible title="Awards & Recognition">
            <ThemedText style={styles.collapsibleContent}>
              • Best New Restaurant 2021{"\n"}
              • Customer Choice Award 2022{"\n"}
              • Food Safety Excellence 2023{"\n"}
              • Local Business of the Year 2024
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 24,
  },
  section: {
    gap: 12,
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  collapsibleContent: {
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 8,
  }
});