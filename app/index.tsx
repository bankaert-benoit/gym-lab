import Button from "@/components/Button";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { usePalette } from "@/hooks/useThemeColor";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const { dark, light, primary,  } = usePalette('dark');

export default function Index() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsFormValid(email.length > 0 && password.length > 0);
  }, [email, password]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput 
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          value={password}
          autoCapitalize="none"
          onChangeText={setPassword}
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator color={primary} size={"small"} />
        ) : (
          <View style={styles.buttons}>
            <Button title="Login" onPress={signIn} disabled={!isFormValid} />
            <Button title="Create Account" onPress={signUp} disabled={!isFormValid} />
          </View>
        )}
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark,
  },
  input: {
    color: light,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: primary,
    padding: 10,
    width: 300,
  },
  buttons: {
    gap: 10,
  }
})