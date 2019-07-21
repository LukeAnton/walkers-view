import React, { useState, useEffect, Fragment } from "react";
import { ScrollView, AsyncStorage } from "react-native";
import WalkSummary from "./WalkSummary";
import {
  TextInput,
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Alert
} from "react-native-paper";

const Input = ({ distance }) => {
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [qty, setQty] = useState("");
  const [dist, setDist] = useState("");
  const [dur, setDur] = useState("");
  const [note, setNote] = useState("");
  const [stop, setStop] = useState("");
  const [data, setData] = useState({
    noteSub: "",
    distSub: "",
    durSub: "",
    stopSub: "",
    qtySub: ""
  });
  const { noteSub, distSub, durSub, stopSub, qtySub } = useState;

  let dogAmount = parseInt(qty);
  let drop = [];

  for (let i = 0; i < dogAmount; i++) {
    drop.push(i);
  }

  _showModal = () => setVisible(true);
  _hideModal = () => setVisible(false);
  hideWalkMod = () => {
    setFormVisible(false), _hideModal();
  };

  const saveData = () => {
    AsyncStorage.setItem("distance", JSON.stringify(dist));
    AsyncStorage.setItem("note", JSON.stringify(note));
    AsyncStorage.setItem("duration", JSON.stringify(dur));
    AsyncStorage.setItem("stopSub", JSON.stringify(stop));
    AsyncStorage.setItem("quantity", JSON.stringify(qty));
    alert("Saved");
  };

  const displayData = async () => {
    try {
      let distS = await AsyncStorage.getItem("distance");
      let noteS = await AsyncStorage.getItem("note");
      let durS = await AsyncStorage.getItem("duration");
      let stopS = await AsyncStorage.getItem("stopSub");
      let qtyS = await AsyncStorage.getItem("quantity");
      setData({
        noteSub: noteS,
        distSub: distS,
        durSub: durS,
        stopSub: stopS,
        qtySub: qtyS
      });
      _showModal();
      setFormVisible(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Fragment>
      <WalkSummary data={data} />
      <Provider>
        <Portal
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fffff"
          }}
        >
          <Modal
            displayData={displayData}
            visible={visible}
            onDismiss={_hideModal}
          >
            <ScrollView>
              <TextInput
                mode="flat"
                keyboardType="numeric"
                label="Multiple Dogs?.... "
                underlineColor="white"
                value={qty}
                style={{ backgroundColor: "white", opacity: ".9" }}
                onChangeText={qty => setQty(qty)}
              />
              <TextInput
                mode="flat"
                keyboardType="numeric"
                label="Walk Distance...."
                underlineColor="white"
                value={dist}
                style={{ backgroundColor: "white", opacity: ".9" }}
                onChangeText={dist => setDist(dist)}
              />
              <TextInput
                mode="flat"
                keyboardType="numeric"
                label="Walk Duration..."
                underlineColor="white"
                value={dur}
                style={{ backgroundColor: "white", opacity: ".9" }}
                onChangeText={dur => setDur(dur)}
              />
              <TextInput
                mode="flat"
                type="text"
                label="Notes..."
                underlineColor="white"
                value={note}
                style={{ backgroundColor: "white", opacity: ".9" }}
                onChangeText={note => setNote(note)}
              />
              {/* {drop.map(dog =>
                drop.length > 5 ? (
                  (dog = null)
                ) : (
                  <TextInput
                    mode="flat"
                    type="number"
                    label={`Dog ${dog} Stops`}
                    underlineColor="white"
                    value={stop}
                    style={{ backgroundColor: "white", opacity: ".9" }}
                    onChangeText={stop => setStop(stop)}
                  />
                )
              )} */}
              <TextInput
                mode="flat"
                type="number"
                label="Stop"
                underlineColor="white"
                value={stop}
                style={{ backgroundColor: "white", opacity: ".9" }}
                onChangeText={stop => setStop(stop)}
              />
            </ScrollView>
            <Button
              size={10}
              mode="contained"
              onPress={saveData}
              style={{
                alignSelf: "center",
                paddingTop: 10,
                paddingLeft: 15,
                height: 50,
                width: "100%",
                backgroundColor: "#fb9120"
              }}
            >
              Save
            </Button>
          </Modal>
          {visible === true ? (
            <Button
              icon="clear"
              size={10}
              mode="contained"
              onPress={_hideModal}
              style={{
                position: "absolute",
                bottom: 78,
                left: 10,
                paddingTop: 10,
                paddingLeft: 15,
                height: 50,
                width: 50,
                borderRadius: 100,
                backgroundColor: "#fb9120"
              }}
            />
          ) : (
            <Button
              icon="add"
              size={10}
              mode="contained"
              onPress={_showModal}
              style={{
                position: "absolute",
                bottom: 78,
                left: 10,
                paddingTop: 10,
                paddingLeft: 15,
                height: 50,
                width: 50,
                borderRadius: 100,
                backgroundColor: "#fb9120"
              }}
            />
          )}
          {formVisible === true ? (
            <Button
              icon="clear"
              size={10}
              mode="contained"
              onPress={hideWalkMod}
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
            />
          ) : (
            <Button
              icon="description"
              size={3}
              mode="contained"
              onPress={displayData}
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
            />
          )}
        </Portal>
      </Provider>
    </Fragment>
  );
};

export default Input;
