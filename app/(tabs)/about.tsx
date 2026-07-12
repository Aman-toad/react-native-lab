import { useTheme } from "@/context/ThemeContext";
import { Text, View } from "react-native";

export default function About() {
  const { theme } = useTheme();
  return (
    <View className="flext-1 items-center justify-center">
      <Text>This is a About Tab</Text>
      <Text>Current Theme : {theme}</Text>
    </View>
  )
}