import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { Share, Save } from "../../assets";

export default function Anime() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<any>();
  const [isLoading, setIsloading] = useState<boolean>(true);
  const DataHandler = async () => {
    const result = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
    setData(result.data.data);
    setIsloading(false);
  };
  useEffect(() => {
    DataHandler();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading == true ? (
        <Text>Loading...</Text>
      ) : (
        <View style={{ width: "100%", height: 320, alignItems: "center" }}>
          <ImageBackground
            source={{
              uri: data.attributes.coverImage.original,
            }}
            resizeMode="cover"
            style={styles.image}
          ></ImageBackground>
          <View style={{ width: "90%" }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  width: "75%",
                }}
                numberOfLines={1}
              >
                {data.attributes.canonicalTitle}
              </Text>
              <View style={{ flexDirection: "row", columnGap: 15 }}>
                <TouchableOpacity>
                  <Save />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Share />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
