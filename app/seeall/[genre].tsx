import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { Arrow, Search } from "@/assets";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Seeall() {
  let { genre } = useLocalSearchParams();
  const [datas, setDatas] = useState<any>();
  const [isLoading, setIsloading] = useState<boolean>(true);
  const router = useRouter();
  function isString(value: string | string[]): value is string {
    return typeof value === "string";
  }
  const DataHandler = async () => {
    let Lower = genre;
    if (isString(genre)) {
      Lower = genre.toLowerCase(); // Safe to call toLowerCase()
    }
    const result: any = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[categories]=${Lower}&page[limit]=20`
    );
    setDatas(result.data.data);
  };
  useEffect(() => {
    DataHandler();
    setIsloading(false);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "95%",
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Arrow />
          </TouchableOpacity>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            {genre}
          </Text>
        </View>
        <TouchableOpacity>
          <Search color={"black"} />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={datas}
          numColumns={2}
          renderItem={({ item: anime, index }) => (
            <TouchableOpacity
              onPress={() => console.log(anime.posterImage)}
              style={{ width: "45%", height: 300, margin: 10 }}
            >
              <ImageBackground
                source={{ uri: anime.attributes.posterImage.original }}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                }}
                imageStyle={{
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#06C149",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 55,
                    alignSelf: "flex-end",
                    padding: 5,
                    marginTop: 5,
                    marginRight: 5,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    {anime.attributes.averageRating}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 60,
                    fontWeight: "bold",
                    padding: 6,
                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                  }}
                >
                  {index + 1}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
  },
});
