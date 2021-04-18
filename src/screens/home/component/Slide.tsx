import React from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';

type SlideProps = {
  title: string;
  right?: boolean;
};

const {width, height} = Dimensions.get('window');

const Slide: React.FC<SlideProps> = ({title, right = false}) => {
  return (
    <Animated.View
      style={{
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{title}</Text>
    </Animated.View>
  );
};

export default Slide;

const styles = StyleSheet.create({});
