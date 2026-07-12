import { useTheme } from "@/context/ThemeContext";
import { Button, Text, View } from "react-native";

export default function Setting() {
  const { theme, setTheme } = useTheme();
  return (
    <View className="flext-1 items-center justify-center">
      <Text>This is a Setting Tab</Text>
      <Text>Current Theme : {theme}</Text>

      <Button title="Dark" onPress={() => setTheme("dark")} />
      <Button title="Light" onPress={() => setTheme("light")} />
    </View>
  )
}