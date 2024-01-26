import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Link, useRouter } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

export const Carousel = ({ category }: any) => {
  const [datas, setDatas] = useState<any>();
  const [isLoading, setIsloading] = useState<boolean>(true);
  const router = useRouter();
  const DataHandler = async () => {
    let newcat: string = category.toLowerCase();
    const result: any = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[categories]=${newcat}&page[limit]=20`
    );
    setDatas(result.data.data);
  };
  useEffect(() => {
    DataHandler();
    setIsloading(false);
  }, []);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "#212121",
          }}
        >
          {category}
        </Text>
        <Link
          href={`/seeall/${category}`}
          style={{ color: "#06C149", fontSize: 16 }}
        >
          See all
        </Link>
      </View>
      {isLoading == true ? (
        <Text>Loading...</Text>
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal={true}
            data={datas}
            renderItem={({ item: anime, index }) => (
              <TouchableOpacity
                onPress={() => router.navigate(`/anime/${anime.id}`)}
                style={{ width: 130, height: 200, marginLeft: 12 }}
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
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
