import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView, StyleSheet, View } from 'react-native';

type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuData: MenuSection[] = [
  {
    title: 'Lunch Special',
    items: [
      { name: 'Classic Sandwich', price: '300', description: 'Choice of chicken, tuna, or veggie' },
      { name: 'Pasta Alfredo', price: '300', description: 'Creamy sauce with garlic bread' },
      { name: 'Lunch Momo', price: '349', description: '8 pieces with sauce' }
    ]
  },
  {
    title: 'Dinner',
    items: [
      { name: 'Deluxe Pasta', price: '500', description: 'Choice of marinara or pesto sauce' },
      { name: 'Gourmet Sandwich', price: '400', description: 'With fries and salad' },
      { name: 'Special Momo Platter', price: '300', description: '12 pieces with special sauce' }
    ]
  },
  {
    title: 'Specialties',
    items: [
      { name: 'Chicken Momo', price: '350', description: '10 pieces steamed or fried' },
      { name: 'Veggie Momo', price: '200', description: '10 pieces steamed or fried' },
      { name: 'Jhol Momo', price: '$300', description: 'Served in special soup' }
    ]
  }
];

function MenuSection({ title, items }: MenuSection) {
  return (
    <ThemedView style={styles.section}>
      <ThemedText type="title" style={styles.sectionTitle}>{title}</ThemedText>
      {items.map((item, index) => (
        <ThemedView key={index} style={styles.menuItem}>
          <View style={styles.itemHeader}>
            <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
            <ThemedText type="defaultSemiBold">{item.price}</ThemedText>
          </View>
          {item.description && (
            <ThemedText style={styles.description}>{item.description}</ThemedText>
          )}
        </ThemedView>
      ))}
    </ThemedView>
  );
}

export default function MenuScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Our Menu</ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.scrollView}>
        {menuData.map((section, index) => (
          <MenuSection key={index} title={section.title} items={section.items} />
        ))}
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
  section: {
    padding: 20,
    gap: 15,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  menuItem: {
    padding: 15,
    backgroundColor: '',
    borderRadius: 8,
    gap: 5,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: 'blue',
  }
});