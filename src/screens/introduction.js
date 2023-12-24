// const data = [
//   { id: 1, text: 'Manage Community Events', tag: 'Create Community Organisation, Club, Festival Committee or Event Pages', buttonText: 'Skip', backgroundColor: '#ff6347' },
//   { id: 2, text: 'Explore Events around You', tag: 'Search and Follow Events around You. Get Updates.', buttonText: 'Skip', backgroundColor: '#00ff00' },
//   { id: 3, text: 'Instant Chequebook', tag:'Digital Chequebook, Team Collaboration, Confirmation SMS Track collections.', buttonText: 'Button 3', backgroundColor: '#0000ff' },
// ];

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
// import {chequebook} from './ChequeScreen';

const data = [
  {
    id: 1,
    icon: "calender-outline",
    text: "Manage Community Events",
    tag: "Create Community Organisation, Club, Festival Committee or Event Pages",
    buttonText: "Skip",
    backgroundColor: "#80bd7c",
    image: require('./../../assets/web/event_2.png')
  },
  {
    id: 2,
    icon: '',
    text: "Explore Events around You",
    tag: "Search and Follow Events around You. Get Updates.",
    buttonText: "Skip",
    backgroundColor: "#f99912",
    image: require('./../../assets/web/group_8375.png')
  },
  {
    id: 3,
    icon: '',
    text: "Instant Chequebook",
    tag: "Digital Chequebook, Team Collaboration, Confirmation SMS Track collections.",
    buttonText: "Get started",
    backgroundColor: "#ffffff",
    image: require('./../../assets/web/cheque_2.png')
  },
];

const CarouselView = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);

  const { height, width } = Dimensions.get('window');

  const handlePress = () => {
    navigation.navigate('login');
  };

  const renderItem = ({ item, index }) => {
    if (index === 2) {
      return (
        <LinearGradient
          colors={["#9a6286", "#988e88", "#97c389"]}
          style={{
            height,
            width,
            flex: 1,
            alignItems: "center",
            justifyContent: 'center'
        }}
        >
          <View style={{ backgroundColor: 'transparent', height: 100, width: 100, marginBottom: 20 }}>
            <Image source={item.image} style={{ height: 100, width: 100, tintColor: '#fad291' }} />
          </View>
          <Text style={{ fontSize: 30, color: "#fff" }}>
            <Text style={{ color: "#fad291" }}>{item.text.split(" ")[0]} </Text>
            <Text style={{ color: "#7f5f21" }}>
              {item.text.split(" ").slice(1).join(" ")}
            </Text>
          </Text>
          <Text style={{ fontSize: 20, color: "#fad291", marginTop: 20 }}>
            {item.tag}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#7f5f21",
              padding: 10,
              borderRadius: 10,
              marginTop: 30,
            }}
            onPress={handlePress}
          >
            <Text style={{ color: "#fad291", width: width*0.6, textAlign: "center" }}>{item.buttonText}</Text>
          </TouchableOpacity>
        </LinearGradient>
      );
    }

    return (
      <View
        style={{
          width,
          height,
          flex: 1,
          alignItems: 'center',
          backgroundColor: item.backgroundColor,
        //   paddingTop: 20,
        justifyContent: 'center'
        }}
      >
        <View style={{ backgroundColor: 'transparent', height: 100, width: 100, marginBottom: 20 }}>
          <Image source={item.image} style={{ height: 100, width: 100, tintColor: '#fad291' }} />
        </View>
        <Text style={{ fontSize: 26, fontWeight: 900,color: "#fff", padding: 10 }}>
          <Text style={{ color: "#fad291" }}>{item.text.split(" ")[0]} </Text>
          <Text style={{ color: "#7f5f21" }}>
            {item.text.split(" ").slice(1).join(" ")}
          </Text>
        </Text>
        <Text style={{ fontSize: 20, color: "#fad291", marginTop: 15}}>
          {item.tag}
        </Text>
        {index !== 2 && (
          <TouchableOpacity
            style={{
              backgroundColor: "#fad291",
              padding: 10,
              position: "absolute",
              top: 20,
              right: 20,
              borderRadius: 20,
              width: 70,
              alignItems: 'center'
            }}
            onPress={handlePress}
          >
            <Text style={{ color: "#dbb372" }}>{item.buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        layout={"default"}
        data={carouselItems}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
        }}
      >
        {carouselItems.map((_, i) => (
          <Ionicons
            key={i}
            name={i===activeIndex? "remove-outline":"ellipse"}
            size={15}
            color="#fad291"
            style={{ marginHorizontal: 5 }}
          />
        ))}
      </View>
    </View>
  );
};

export default CarouselView;
