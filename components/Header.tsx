import { View, Text, Image, TouchableOpacity } from "react-native";
import { Logo, Notification, Search } from "@/assets";

export const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "transparent",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        top: 50,
        zIndex: 1,
      }}
    >
      <Logo />
      <View style={{ flexDirection: "row", columnGap: 10 }}>
        <TouchableOpacity>
          <Notification />
        </TouchableOpacity>
        <TouchableOpacity>
          <Search />
        </TouchableOpacity>
      </View>
    </View>
  );
};
