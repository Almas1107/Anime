import { Play, Plus } from "@/assets";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Page() {
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: "100%", height: 400 }}>
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/564x/9a/8f/eb/9a8febb90891a8e0ccbaa8dfdf980fa4.jpg",
            }}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={{ rowGap: 10, padding: 20 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Demon Slayer: Kimetsu...
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Action, Shounen, Martial Arts, Adventure, ...
              </Text>
              <View style={{ flexDirection: "row", columnGap: 20 }}>
                <TouchableOpacity
                  style={{
                    width: 100,
                    backgroundColor: "#06C149",
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    columnGap: 6,
                  }}
                >
                  <Play />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    Play
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "transparent",
                    borderWidth: 3,
                    padding: 12,
                    borderRadius: 100,
                    borderColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    columnGap: 6,
                  }}
                >
                  <Plus />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    My List
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
