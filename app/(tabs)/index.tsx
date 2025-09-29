import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

interface CarouselItem {
  title: string;
  text: string;
  image: any;
}

const carouselItems: CarouselItem[] = [ 
  {
    title: "Special Momos",
    text: "Authentic Tibetan-style momos",
    image: require('assets/images/premium_photo-1673769108070-580fe90b8de7.avif'),
  },
  {
    title: "Pasta Collection",
    text: "Handmade Italian pasta",
    image: require('assets/images/premium_photo-1664472619078-9db415ebef44.avif'),
  },
  {
    title: "Gourmet Sandwiches",
    text: "Fresh and delicious",
    image: require('assets/images/premium_photo-1664391674156-e8d5626b6e5e.avif'),
  },
];

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const renderItem = (item: CarouselItem, index: number) => {
    return (
      <ImageBackground 
        key={index}
        source={item.image}
        style={[styles.carouselItem, { width: ITEM_WIDTH }]}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.carouselOverlay}>
          <ThemedText type="title" style={styles.carouselTitle}>{item.title}</ThemedText>
          <ThemedText style={styles.carouselText}>{item.text}</ThemedText>
        </View>
      </ImageBackground>
    );
  };

  const scrollToIndex = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * ITEM_WIDTH,
      animated: true
    });
    setActiveIndex(index);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Eat Best Restaurant</ThemedText>
      </ThemedView>

      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
            setActiveIndex(newIndex);
          }}
        >
          {carouselItems.map((item, index) => renderItem(item, index))}
        </ScrollView>
        
        <View style={styles.pagination}>
          {carouselItems.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                activeIndex === index && styles.paginationDotActive
              ]}
            />
          ))}
        </View>
      </View>

      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.description}>
          Experience the finest fusion cuisine featuring our special momos, pasta, and gourmet sandwiches.
        </ThemedText>
        
        <ThemedText style={styles.description}>
          Open daily: {"\n"}
          Lunch: 11:30 AM - 2:30 PM{"\n"}
          Dinner: 5:30 PM - 10:00 PM 
        </ThemedText>
        
        <Link href="/modal" style={styles.link}>
          <ThemedText type="link">Special Offers</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  contentContainer: {
    alignItems: 'center',
    gap: 20,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    marginTop: 20,
  },
  carouselContainer: {
    height: 250,
    marginBottom: 20,
  },
  carouselItem: {
    height: 200,
    marginHorizontal: 10,
    overflow: 'hidden',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  carouselText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray', // gray for inactive dots
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: 'white', // matches the theme color
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  carouselOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  carouselTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
  },
});
