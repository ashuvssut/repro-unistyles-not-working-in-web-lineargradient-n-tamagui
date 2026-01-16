import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { View as TamaguiView, YStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <View style={ss.main}>
      <Text>This Repro is only applicable for web (not native apps)</Text>
      <Text>
        Unistyles is not working for Tamagui components + Expo LinearGradient
        component "on web"
      </Text>
      <Text>Unistyles is only working for React Native component</Text>
      <Text>DEMO:-</Text>
      <Text>
        --------------------------------------------------------------------
      </Text>
      <YStack height="100%">
        <TamaguiView style={ss.unistyleStyleHeight20percent}>
          <Text>
            Styles are NOT APPLYING to this Tamagui {`<View />`} component
          </Text>
        </TamaguiView>
        <Text>
          --------------------------------------------------------------------
        </Text>
        <LinearGradient
          colors={["rgb(229, 255, 125)", "rgb(255, 165, 249)"]}
          end={{ x: 0, y: 0.5 }}
          locations={[0, 0.6]}
          start={{ x: 1, y: 0.0 }}
          style={ss.unistyleStyleHeight20percent}
        >
          <Text>
            Styles are NOT APPLYING to this Expo {`<LinearGradient />`}{" "}
            component
          </Text>
        </LinearGradient>
        <Text>
          --------------------------------------------------------------------
        </Text>
        <View style={ss.unistyleStyleHeight20percent}>
          <Text>
            Styles are CORRECTLY APPLYING to this React Native {`<View />`}{" "}
            component
          </Text>
        </View>
      </YStack>
    </View>
  );
}

const ss = StyleSheet.create({
  unistyleStyleHeight20percent: {
    backgroundColor: "rgb(255, 165, 249)",
    height: "20%",
  },
  main: {
    backgroundColor: "#fff",
    height: "100%",
    flex: 1,
  },
});
