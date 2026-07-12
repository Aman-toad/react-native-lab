import ProfileCard from "@/components/ProfileCard";
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
        style={({ pressed }: any) => {
          `flex-1 rounded-xl justify-center items-center ${pressed ? 'bg-gray-600' : 'bg-gray-800'
            }`
        }
        }
      >
        <ProfileCard />
      </Pressable>
      <Button title="Testing Navigation" onPress={() => router.push("/navigation")} />

        <Button title="Home" onPress={() => router.push("/home")} />

          <Button title="About" onPress={() => router.push("/about")} />

            <Button title="Setting" onPress={() => router.push("/setting")} />
    </View>
  );
}
