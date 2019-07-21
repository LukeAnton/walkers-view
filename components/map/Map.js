import React, { Component, Fragment, useState, useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Values from "../values/Values";
import Input from "../forms/Input";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_API_KEY = "AIzaSyCFzbD_10mMJU7AC7lStxIKSddM4yEAVwE";
// let lat = 0;
// let lng = 0;

const Map = props => {
  // Hard Coded Route
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState(0);
  const [coordinates, setCoordinates] = useState([]);
  let mapView = 0;

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   //Will give you the current location
    //   position => {
    //     //setting latitude to state
    //     setLatitude(position.coords.latitude);
    //     //setting longitude to state
    //     setLongitude(position.coords.longitude);
    //   },
    //   error => alert(error.message),
    //   {
    //     enableHighAccuracy: true,
    //     timeout: null
    //   }
    // );
    // console.log(`Distance: ${distance} km`);
    // console.log(`Duration: ${duration} min.`);
  }, [latitude, longitude, distance, duration]);

  //TODO - Max out markers
  onMapPress = e => {
    setCoordinates([...coordinates, e.nativeEvent.coordinate]);
    if (coordinates.length === 2) {
      setCoordinates([]);
    }
  };
  //State is not set in time to provide dynamic coords to the initial region
  return (
    <MapView
      initialRegion={{
        latitude: -33.790131,
        longitude: 151.185459,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }}
      style={StyleSheet.absoluteFill}
      ref={c => (mapView = c)}
      onPress={onMapPress}
    >
      {coordinates.map((coordinate, index) => (
        <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
      ))}

      <MapViewDirections
        mode="WALKING"
        origin={coordinates[0]}
        destination={coordinates[1]}
        optimizeWaypoints={true}
        strokeWidth={5}
        strokeColor="black"
        apikey={GOOGLE_API_KEY}
        onStart={params => {
          // console.log(
          //   `Started routing between "${params.origin}" and "${
          //     params.destination
          //   }"`
          // );
        }}
        onReady={result => {
          setDistance(result.distance.toString());
          setDuration(result.duration);
          // console.log(`Distance: ${result.distance} km`);
          // console.log(`Duration: ${result.duration} min.`);
          setTimeout(() => {
            mapView.fitToCoordinates(coordinates, {
              edgePadding: {
                right: width / 20,
                bottom: height / 20,
                left: width / 20,
                top: height / 20
              }
            });
          }, 999999999999);
          2;
        }}
        onError={errorMessage => {
          console.log("Map Error");
        }}
      />
      <Values distance={distance} duration={duration} />
    </MapView>
  );
};

export default Map;
