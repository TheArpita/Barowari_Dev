import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('./../../assets/web/group_88.png')} style={styles.logo} />
      <View style={styles.rightHeader}>
        <Image source={require('./../../assets/web/component_17_1.png')} style={styles.icon} />
        <Image source={require('./../../assets/web/component_12_4.png')} style={styles.icon} />
      </View>
    </View>
  );
};

const Body1 = () => {
  return (
    <View style={styles.body}>
      <Text>Body 1</Text>
    </View>
  );
};

const Body2 = () => {
  return (
    <View style={styles.body}>
      <Text>Body 2</Text>
    </View>
  );
};

const Body3 = () => {
  const menuItems = [
    { name: 'Profile', 
    icon: require('./../../assets/web/component_12_4.png')
  },
    { name: 'Organisation', 
    icon: require('./../../assets/web/flag.png') 
  },
    { name: 'Events', 
    icon: require('./../../assets/web/event_2.png') 
  },
    { name: 'Chequebook', 
    icon: require('./../../assets/web/cheque_2.png') 
  },
  { name: 'Receipts', 
    icon: require('./../../assets/web/component_93_1.png') 
  },
  { name: 'Invite', 
    icon: require('./../../assets/web/share.png') 
  },
  { name: 'Setting', 
    icon: require('./../../assets/web/setting.png') 
  },
  { name: 'Rate Us', 
    icon: require('./../../assets/web/group_8383.png') 
  },
  { name: 'FAQ', 
    icon: require('./../../assets/web/path_6562.png') 
  },
  ];

  const handlePress = (name) => {
    // Handle the navigation logic here
  };

  return (
    <View style={styles.body}>
      {/* <Text style={styles.menuHeading}>Menu</Text> */}
      {menuItems.map((item) => (
        <TouchableOpacity key={item.name} style={styles.menuItem} onPress={() => handlePress(item.name)}>
          <Image source={item.icon} style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default TabViewPage = () => {
  return (
    <View style={{flex:1}}>
      <Header/>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
      
    >
      <Tab.Screen 
        name="Home"
        component={Body1}
        options={{
          title: 'Home page',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 25, width: 25, tintColor: focused? 'blue' : 'gray'}}
                source={require('./../../assets/web/home_grey.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chequebook"
        component={Body2}
        options={{
          title: 'My Chequebook',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 25, width: 25, tintColor: focused? 'blue' : 'gray'}}
                source={require('./../../assets/web/cheque_2.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Body3}
        options={{
          title: 'Menu',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{height: 25, width: 25, tintColor: focused? 'blue' : 'gray'}}
                source={require('./../../assets/web/group_191.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator></View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white'
  },
  logo: {
    width: 35,
    height: 35,
  },
  rightHeader: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  menuHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white'
  },
  menuItemIcon: {
    width: 30,
    height: 30
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

