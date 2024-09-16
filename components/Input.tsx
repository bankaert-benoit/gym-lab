import { StyleSheet, TextInput, TextInputProps } from "react-native";

export type InputProps = {
  color: string,
  borderColor: string,

} & TextInputProps;

export default function Input(props: InputProps) {
  const styles = StyleSheet.create({
    input: {
      color: props.color,
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: props.borderColor,
      padding: 10,
      width: 300,
    }
  })
  return <TextInput style={[styles.input, props.style]} {...props} />;
}