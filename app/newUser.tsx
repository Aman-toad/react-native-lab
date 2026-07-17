import { useUser } from "./hooks/useUsers";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, FlatList } from "react-native";

export default function newUser(){
  const {users, loading, error} = useUser();

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
    
          <Text>Users we have </Text>
          {loading ? (<Text className="font-bold">Loading....</Text>) : (
            <FlatList
              data={users}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="bg-gray-200 rounded-xl p-4 mb-3">
                  <Text className="text-lg font-bold">{item.name}</Text>
                  <Text>{item.username}</Text>
                  <Text>{item.email}</Text>
                  <Text>{item.phone}</Text>
                </View>
              )}
            />
          )}
    
          {error ? (
            <Text className="text-red-500">{error}</Text>
          ) : null}
        </SafeAreaView>
  )
}