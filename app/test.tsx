import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function Test() {
  const [count, setCount] = useState(0);

  console.log('render');


  useEffect(() => {
    console.log("This will Mount on Every render");
  })

  useEffect(() => {
    console.log("This will Mount once");
  }, [])

  useEffect(() => {
    console.log("Current Count: ", count);
  }, [count]);

  // cleanup sytax
  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('cleanup');
    };
  }, [])
  // cleanup function runs after leaving the screen

  useEffect(() => {
    console.log(count);

    return () => {
      console.log("Cleaning previous effect");
    };
  }, [count]);
  // cleanup before the effect runs again

  return (
    <View>
      <Text>Texting Window</Text>

      <Text>Count Shows : {count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>
          Increment
        </Text>
      </Pressable>

      <Pressable onPress={() => setCount(count - 1)}>
        <Text>
          Decrement
        </Text>
      </Pressable>
    </View>
  )
}