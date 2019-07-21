import React, { Fragment } from "react";
import { Text, View } from "react-native";
import Input from "../forms/Input";
import { Button, IconButton, Colors } from "react-native-paper";
const Values = ({ distance, duration }) => {
  const dur = Math.round(duration);

  return (
    <Fragment>
      <View
        style={{
          position: "absolute",
          color: "white",
          left: 10,
          top: 50,
          fontSize: 20,
          paddingTop: 10,
          borderRadius: 100,
          backgroundColor: "#fb9120",
          width: 130,
          height: 40,
          borderRadius: 100
        }}
      />
      <Text
        style={{
          position: "relative",
          color: "white",
          left: 30,
          top: 46,
          fontSize: 20,
          paddingTop: 10,
          borderRadius: 100,
          width: 150
        }}
      >
        {distance} Km
      </Text>
      <View
        style={{
          color: "white",
          left: 13,
          top: 63,
          fontSize: 20,
          paddingTop: 10,
          borderRadius: 100,
          backgroundColor: "#fb9120",
          width: 130,
          height: 40
        }}
      />
      <Text
        style={{
          position: "relative",
          color: "white",
          left: 30,
          top: 20,
          fontSize: 20,
          paddingTop: 10,
          borderRadius: 100,
          width: 150,
          height: 60
        }}
      >
        {dur} Mins
      </Text>

      {!distance ? (
        <Fragment>
          <View
            style={{
              position: "absolute",
              color: "white",
              left: 128,
              top: 433,
              borderRadius: 100,
              backgroundColor: "black",
              opacity: 0.4,
              width: 160,
              height: 40
            }}
          />
          <Text
            style={{
              color: "white",
              flexDirection: "column",
              width: 200,
              height: 40,
              paddingTop: 10,
              borderRadius: 100,
              textAlign: "center",
              marginTop: 300,
              alignSelf: "center",
              justifyContent: "space-between"
            }}
          >
            Tap to create route
          </Text>
        </Fragment>
      ) : (
        <Fragment>
          <View
            style={{
              display: "none"
            }}
          />
          <Text
            style={{
              display: "none"
            }}
          >
            Tap to create route
          </Text>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Values;
