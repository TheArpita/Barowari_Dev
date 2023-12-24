import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
{console.log('tab view page')}
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
    { name: 'Item 1', 
    // icon: require('./item1.png') 
  },
    { name: 'Item 2', 
    // icon: require('./item2.png') 
  },
    { name: 'Item 3', 
    // icon: require('./item3.png') 
  },
    { name: 'Item 4', 
    // icon: require('./item4.png') 
  },
  ];

  const handlePress = (name) => {
    // Handle the navigation logic here
  };

  return (
    <View style={styles.body}>
      <Text style={styles.menuHeading}>Menu</Text>
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
    <View style={{flex:1, backgroundColor: 'red'}}>
      <Header/>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Tab 1" component={Body1} />
      <Tab.Screen name="Tab 2" component={Body2} />
      <Tab.Screen name="Tab 3" component={Body3} />
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
  },
  logo: {
    width: 50,
    height: 50,
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
    backgroundColor: 'red'
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
  },
  menuItemIcon: {
    width: 50,
    height: 50,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

