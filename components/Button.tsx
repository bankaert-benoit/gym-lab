import { Palette } from "@/constants/Colors";
import { usePalette } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableHighlight, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  color?: keyof Palette;
  textColor?: keyof Palette;
  disabled?: boolean;
  loading?: boolean;
  icon?: ComponentProps<typeof MaterialCommunityIcons>['name'];
  iconPosition?: "left" | "right";
};

export default function Button(props: ButtonProps) {
  const palette = usePalette('dark');

  const styles = StyleSheet.create({
    active: {
      backgroundColor: palette[props.color ?? "primary"],
      padding: 10,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: palette[props.textColor ?? "light"],
      fontSize: 16,
    },
    disabled: {
      backgroundColor: palette[props.color ?? "primary"],
      padding: 10,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.5,
    },
  });

  const handlePress = () => {
    if (props.disabled) {
      return;
    }
    props.onPress();
  };

  return (
    <TouchableHighlight onPress={handlePress} disabled={props.disabled}>
      <View style={props.disabled ? styles.disabled : styles.active}>
        {props.loading ? (
          <ActivityIndicator color={props.color} size={"small"} />
        ) : (
          <>
            {props.icon && props.iconPosition === "left" && (
              <MaterialCommunityIcons name={props.icon} style={{
                color: palette[props.textColor ?? "light"],
                fontSize: 16,
                marginRight: 5,
              }} />
            )}
            <Text style={{
              color: palette[props.textColor ?? "light"],
              fontSize: 16,
            }}>{props.title}</Text>
            {props.icon && props.iconPosition === "right" && (
              <MaterialCommunityIcons name={props.icon} style={{
                color: palette[props.textColor ?? "light"],
                fontSize: 16,
                marginRight: 5,
              }} />
            )}
          </>
        )}
      </View>
    </TouchableHighlight>
  )
}