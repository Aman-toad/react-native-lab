import { Alert, Image, Pressable, Text, View } from "react-native";
import img from "@/assets/images/aman.png"

export default function ProfileCard() {
  return (
    <Pressable onPress={() => Alert.alert("Profile Clicked")}>
      <View className="bg-slate-600 p-6 rounded-2xl items-center border-2">
      <Image source={img} className='w-32 h-32 rounded-full' />
      <Text className='text-white text-xl font-semibold mt-4'>Aman Singh</Text>
      {/* <Text className='text-white text-xl font-semibold mt-4'>{followers} Followers</Text> */}
      <Text className='text-gray-400 text-center mt-2 px-4'>A Short Description is that I am Learning App Development right now....</Text>
    </View>
    </Pressable>
  )
}