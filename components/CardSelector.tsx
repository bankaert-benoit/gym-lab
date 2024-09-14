import { StyleProp, Text, View } from "react-native"

export type CardSelectorProps = {
  title: string,
  data: string,
  textColor?: string,
  cardStyle?: StyleProp<any>
}

export default function CardSelector({ title, data, textColor, cardStyle }: CardSelectorProps) {
  return (
    <View style={{
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between",
      height: 50,
      borderBottomWidth: 1,
      padding: 10,
      ...cardStyle
    }}>
      <Text style={{
        width: "100%",
        fontSize: 20, 
        fontWeight: "bold", 
        color: textColor || "black",
        textAlign: "left"
      }}>{title}</Text>
      <Text style={{ 
        fontSize: 20, 
        width: "100%",
        fontWeight: "bold", 
        color: textColor || "black",
        textAlign: "right"
      }}>{data}</Text>
    </View>
  )
}