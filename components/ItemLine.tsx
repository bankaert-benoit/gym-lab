import { StyleSheet, Text, View } from "react-native";

export type ItemLineProps = {
  item: string[];
  children?: React.ReactNode;
  color: string;
  textColor: string;
};

export default function ItemLine({ item, children, color, textColor }: ItemLineProps) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      { children ?
        children :
        item.map((text, index) => (
          <Text key={index} style={[styles.text, { color: textColor }]}>{text}</Text>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});