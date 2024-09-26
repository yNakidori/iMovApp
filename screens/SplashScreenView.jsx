import { StyleSheet, View } from "react-native";

export default function SplashScreenView() {
  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backggoundColor: "#fff",
  },
});
