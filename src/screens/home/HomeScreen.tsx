import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Slide from './component/Slide';

const HomeScreen = () => {
  const {width, height} = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(0)).current;

  const slideData = [
    {
      id: 1,
      title: 'Relaxed',
      color: 'red',
    },
    {
      id: 2,
      title: 'Awesome',
      color: 'blue',
    },
    {
      id: 3,
      title: 'Patience',
      color: 'green',
    },
  ];

  const Footer = ({scrollX}: any) => {
    const backgroundColor = scrollX.interpolate({
      inputRange: slideData.map((i, index) => index * width),
      outputRange: ['yellow', 'blue', 'cyan'],
    });
    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
        }}>
        <View
          style={{
            borderTopLeftRadius: 75,
            backgroundColor: 'white',
            flex: 1,
          }}></View>
      </Animated.View>
    );
  };

  const Backdrop = ({scrollX}: any) => {
    //const itemRange = [(index - 1) * width, index * width, (index + 1) * width];
    const backgroundColor = scrollX.interpolate({
      inputRange: slideData.map((i, index) => index * width),
      outputRange: ['yellow', 'blue', 'cyan'],
    });
    return (
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {backgroundColor, borderBottomRightRadius: 60},
        ]}
      />
    );
  };

  const itemRenderer = ({item, index}: any) => {
    return <Slide title={item.title} />;
  };

  return (
    <View style={styles.mainContainer}>
      {/* <StatusBar hidden /> */}
      <Animated.View
        style={[
          styles.upperSection,
          {
            height: 0.61 * height,
          },
        ]}>
        <Backdrop scrollX={scrollX} />
        <Animated.FlatList
          data={slideData}
          renderItem={itemRenderer}
          horizontal
          decelerationRate="fast"
          bounces={false}
          snapToInterval={width}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {
              useNativeDriver: false, //backgrund color not supported by native driver
            },
          )}
          showsHorizontalScrollIndicator={false}></Animated.FlatList>
      </Animated.View>
      <Footer scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, flexDirection: 'column'},
  upperSection: {
    height: 0.61,
    backgroundColor: 'white',
  },
  lowerSection: {},
});

export default HomeScreen;
