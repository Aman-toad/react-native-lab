import { router } from "expo-router";
import { Alert, Button, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-[#111]">
      <Text className="text-xl font-bold text-blue-500">Welcome NativeWind to the Project!!</Text>

      <View className="flex-row gap-5">
        <Button title="Not-Found" onPress={() => router.push("/not-found")} />
      </View>
      <Pressable
        onPress={() => Alert.alert("Clicked")}
        style={({ pressed }:any) => {
          `flex-1 rounded-xl justify-center items-center ${pressed ? 'bg-gray-600' : 'bg-gray-800'
            }`
        }
        }
      >
        <Text className="text-white">Card</Text>
      </Pressable>
      <Button title="Testing Navigation" onPress={() => router.push("/navigation")} />
    </View>
  );
}
