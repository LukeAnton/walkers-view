import React from "react";
import { Button } from "react-native-paper";

const EndWalk = () => {
  return (
    <Button
      style={{
        position: "absolute",
        left: 10,
        bottom: 10,
        paddingTop: 10,
        borderRadius: 100,
        backgroundColor: "#fb9120",
        width: "95%",
        height: 60
      }}
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      END WALK
    </Button>
  );
};

export default EndWalk;
