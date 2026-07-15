import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    if (!email.trim()) {
      setStatus("Email is Required !");
      return;
    }
    if (!password) {
      setStatus("Password is Required !");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('Email is invalid');
      return;
    };
    if (password.length < 8) {
      setStatus("Password Should be minimum of 8 characters");
      return;
    }

    setStatus("Form Submitted")
  }

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 justify-center items-center">
      {/* we can use both TouchableWithoutFeedback or Pressable both in forms*/}
      <Pressable onPress={()=>Keyboard.dismiss()}>
        <View className="w-sm p-5 rounded-2xl">
          <Text className="text-2xl font-bold text-center">DevConnect</Text>
          <View className="border-2 p-5 rounded-2xl mt-2">
            <Text className="text-xl font-bold text-center pt-2 mb-5">Login</Text>

            <View className="flex gap-5">
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(e) => {
                  setEmail(e);
                  setStatus("");
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                className="border p-3 rounded-xl"
              />

              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(e) => {
                  setEmail(e);
                  setStatus("");
                }}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                className="border p-3 rounded-xl"
              />

              {status && <Text>{status}</Text>}

              <Pressable onPress={handleSubmit} className="rounded-xl items-center bg-sky-500 p-3 ">
                <Text className="text-white font-bold text-md">
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  )
}