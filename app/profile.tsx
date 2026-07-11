import { View, Text, Image, Pressable, Alert, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import img from "@/assets/images/aman.png"
import { useState } from 'react';

const ProfileScreen = (name:string, bio:string, initialFollowers:number, image:Image) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const buttonText = isFollowing ? "Following" : "Follow";
  const buttonColor = isFollowing ? "bg-green-600" : "bg-sky-600";
  const [followers, setFollowers] = useState(100);
  return (
    <SafeAreaView className='flex-1 flex-col justify-center items-center bg-gray-600 '>
      <Pressable
        onPress={() => Alert.alert("Profile Clicked")}
        // className="bg-orange-600 p-10 pressed:bg-sky-500"
        style={({ pressed }) => ({
          padding: 10,
          backgroundColor: pressed ? '#4ce4fd' : '#7c4fe3',
        })}
      >
        <View className='bg-gray-800 border-2 border-gray-700 p-6 m-2 rounded-2xl space-y-3 items-center'>
          <Image source={img} className='w-32 h-32 rounded-full' />
          <Text className='text-white text-xl font-semibold mt-4'>Aman Singh</Text>
          <Text className='text-white text-xl font-semibold mt-4'>{followers} Followers</Text>
          <Text className='text-gray-400 text-center mt-2 px-4'>A Short Description is that I am Learning App Development right now....</Text>

          <Pressable
            className={`px-5 py-2 mt-5 rounded-2xl ${buttonColor}`} 
            onPress={() => setIsFollowing(prev => {
              if(prev){
                setFollowers(f => f-1);
              }else{
                setFollowers(f => f+1);
              }
              return !prev;
            })}
            >
            <Text className='text-white text-xl font-bold'>{buttonText}</Text>
          </Pressable>
        </View>
      </Pressable>
      <Pressable
        onPressIn={() => Alert.alert("Profile Clicked ONpressIN")}
        onPressOut={() => console.log("onpressout clicked")
        }
        // className="bg-orange-600 p-10 pressed:bg-sky-500"
        style={({ pressed }) => ({
          padding: 10,
          backgroundColor: '#000',
          borderStyle: pressed ? 'dotted' : 'dotted',
        })}
      >
        <View className='bg-gray-800 border-2 border-gray-700 p-6 m-2 rounded-2xl space-y-3 items-center'>
          <Image source={img} className='w-32 h-32 rounded-full' />
          <Text className='text-white text-xl font-semibold mt-4'>Aman Singh</Text>
          <Text className='text-gray-400 text-center mt-2 px-4'>A Short Description is that I am Learning App Development right now....</Text>
        </View>
      </Pressable>
    </SafeAreaView>

  )
}

export default ProfileScreen;