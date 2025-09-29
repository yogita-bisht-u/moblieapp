declare module 'react-native-snap-carousel' {
  import { Component } from 'react';
    import { ViewStyle } from 'react-native';

  export interface CarouselProps {
    data: any[];
    renderItem: ({ item, index }: { item: any; index: number }) => React.ReactNode;
    sliderWidth: number;
    itemWidth: number;
    inactiveSlideScale?: number;
    inactiveSlideOpacity?: number;
    loop?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    style?: ViewStyle;
  }

  export default class Carousel extends Component<CarouselProps> {}
}