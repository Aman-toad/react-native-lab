import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const {theme} = useTheme();

  const iconColor = theme === "dark" ? "#000000" : "#2563Eb"
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor : iconColor }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({color}) => <Ionicons name="settings" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({color}) => <Ionicons name="information-circle" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} />
        }}
      />
    </Tabs>
  )
}