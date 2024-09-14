import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { usePalette } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function TabsLayout() {
  const palette = usePalette('dark');
  return (
    <Tabs 
      initialRouteName="hall-of-gain"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: palette.light,
        tabBarInactiveTintColor: palette.lightGray,
        tabBarStyle: {
          backgroundColor: palette.black,
          borderTopWidth: 0,
          alignItems: "center",
          flexDirection: "row",
        },
    }}> 
      <Tabs.Screen name="hall-of-gain" options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            height: 50
          }}>
            <TabBarIcon name="trophy" color={focused ? palette.light : palette.lightGray} />
            <Text style={{
              color: focused ? palette.light : palette.lightGray,
              fontSize: 10,
            }}>Hall of Gain</Text>
          </View>
        )
      }} />

      <Tabs.Screen name="worklab" options={{
        title: "Worklab",
        tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            height: 50
          }}>
            <TabBarIcon name="sack" color={focused ? palette.light : palette.lightGray} />
            <Text style={{
              color: focused ? palette.light : palette.lightGray,
              fontSize: 10,
            }}>Worklab</Text>
          </View>
        )
      }} />

      <Tabs.Screen name="today" options={{
        title: "Today",
        tabBarIconStyle: {
          backgroundColor: palette.primary,
          borderRadius: 100,
        },
        tabBarIcon: () => (
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            height: 50,
            width: 50,
            backgroundColor: palette.primary,
            borderRadius: 100,
          }}>
            <TabBarIcon name="calendar-today" color={palette.dark} />
          </View>
        )
      }} />

      <Tabs.Screen name="profil" options={{
        title: "Profil",     
        tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            height: 50
          }}>
            <TabBarIcon name="account" color={focused ? palette.light : palette.lightGray} />
            <Text style={{
              color: focused ? palette.light : palette.lightGray,
              fontSize: 10,
            }}>Profil</Text>
          </View>
        )
      }} />

      <Tabs.Screen name="more" options={{
        title: "More",
        tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            height: 50
          }}>
            <TabBarIcon name="dots-horizontal" color={focused ? palette.light : palette.lightGray} />
            <Text style={{
              color: focused ? palette.light : palette.lightGray,
              fontSize: 10,
            }}>More</Text>
          </View>
        )
      }} />
    </Tabs>
  )
}