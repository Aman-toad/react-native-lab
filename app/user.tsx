import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type User = {
  id:number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function User() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  const fetchUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response.ok) {
        throw new Error("Can't Fetch User Details !!")
      }

      const data = await response.json();
      setUsers(data);

    } catch (error) {
      console.error(error);
      setError("Can't Fetch Users Details");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

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