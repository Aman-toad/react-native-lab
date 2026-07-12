import { useTheme } from "@/context/ThemeContext";
import { Text, View } from "react-native";

export default function Home() {
  const { theme } = useTheme();
  return (
    <View className="flext-1 items-center justify-center">
      <Text>This is a Home Tab</Text>

      <Text>Theme is {theme}</Text>
    </View>
  )
}