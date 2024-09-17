import Button from "@/components/Button";
import Input from "@/components/Input";
import { Palette } from "@/constants/colors.constant";
import { FIREBASE_APP, FIREBASE_AUTH } from "@/firebaseConfig";
import { usePalette } from "@/hooks/useThemeColor";
import { State } from "@/models/state.model";
import { Link } from "expo-router";
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup , signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";

const { dark, light, primary, lightGray, darkGray }: Palette = usePalette('dark');

export default function Login(): React.JSX.Element {
  const [email, setEmail]: State<string> = useState<string>('');
  const [password, setPassword]: State<string> = useState<string>('');
  const [isFormValid, setIsFormValid]: State<boolean> = useState<boolean>(false);
  const [loading, setLoading]: State<boolean> = useState<boolean>(false);

  const auth: Auth = FIREBASE_AUTH;

  const signUp: () => Promise<void> = async () => {
    setLoading(true);
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn: () => void = () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signIn: () => Promise<void> = async () => {
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
      <KeyboardAvoidingView behavior="padding" style={styles.card}>
        <View style={{
          flexDirection: "row",
        }}>
          <Text style={{
            fontSize: 50,
            color: light,
            fontWeight: "bold"
          }}>Gym</Text>
          <Text style={{
            fontSize: 50,
            color: primary,
            fontWeight: "bold"
          }}>lab</Text>
        </View>
        <Button buttonStyle={{
          width: "100%",
        }} title="Continue with Google" icon="google" iconPosition="left" onPress={handleGoogleSignIn} color="light" textColor="darkGray" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: lightGray}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', color: light}}>or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: lightGray}} />
        </View>
        <Input 
          color={light}
          borderColor={lightGray}
          placeholderTextColor={light}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input 
          color={light}
          borderColor={lightGray}
          placeholderTextColor={light}
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
            <Button title="Join the Gym" onPress={signIn} disabled={!isFormValid} />
            <Link href="/(public)/register" style={{
              color: primary
            }}>No account ? Create one now !</Link>
          </View>
        )}
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark,
  },
  card: {
    backgroundColor: darkGray,
    borderRadius: 8,
    height: "auto",
    width: "90%",
    padding: 20,
    alignItems: 'center',
    gap: 20,
  },
  buttons: {
    gap: 10,
    alignItems: 'center',
    padding: 10,
  }
})