import { router } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Navigation = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <View>
        <Text className='mb-10'>Navigation are of three type basically </Text>
        <View className='flex gap-5 items-center'>
          <Pressable onPress={() => router.push('/not-found')} className='border-2 bg-sky-600 p-2 text-white'><Text> Push = adds to stack</Text></Pressable>
          <Pressable onPress={() => router.replace('/not-found')} className='border-2 bg-orange-600 p-2 text-white'><Text> replace = replaces current screen</Text></Pressable>
          <Pressable onPress={() => router.back()} className='border-2 bg-green-600 p-2 text-white'><Text> back = go back</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Navigation