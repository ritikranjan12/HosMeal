import CategoryScreen from './screens/CategoryScreen';
import { DefaultTheme,NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails'
import About from './screens/About'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons} from "@expo/vector-icons"

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#494847',
  },
};


function Root() {
  return (
    <Tab.Navigator
    
    activeColor="#f0edf6"
  inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#2d2c2b' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let cl;
        if (route.name === 'Home') {
          iconName = 'home' 
          cl = "#694fad"
        } else if (route.name === 'About') {
          iconName = 'person' ;
          cl = "#694fad"
        }
        return <Ionicons style={{
          position:"relative",
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: cl,
          borderRadius: 20,
          height:30,
        }} name={iconName} size={24} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Home" component={CategoryScreen} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer
    theme={navTheme}
    >

      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#2d2c2b' },
        headerTintColor: 'white',
      }}>
        <Stack.Screen options={{
          title: "HosMeal"
        }} name="Root" component={Root} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;