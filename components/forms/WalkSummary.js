import React, { useState, useEffect, Fragment } from "react";

import {
  View,
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  TextInput,
  Card,
  Title,
  Paragraph,
  Avatar,
  IconButton
} from "react-native-paper";
import EndWalk from "../buttons/EndWalk";
const WalkSummary = ({ data }) => {
  const [visible, setVisible] = useState(false);

  _showModal = () => setVisible(true);
  _hideModal = () => setVisible(false);
  const { noteSub, distSub, durSub, stopSub, qtySub } = data;

  return (
    <Provider>
      <Portal
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fffff"
        }}
      >
        <Modal visible={visible} onDismiss={_hideModal}>
          <Card>
            <Card.Content style={{ backgroundColor: "#f1f1f1", height: 100 }}>
              <Card.Title
                title="Walk Summary"
                subtitle={`${distSub} km | ${durSub} mins`}
                left={props => (
                  <Avatar.Image
                    {...props}
                    source={require("../../assets/avatar.png")}
                  />
                )}
                right={props => (
                  <IconButton {...props} icon="more-vert" onPress={() => {}} />
                )}
              />
            </Card.Content>
            <Card.Content style={{ height: 100 }}>
              <Title>Walk Notes</Title>
              <Paragraph>{noteSub}</Paragraph>
            </Card.Content>

            <Card.Content style={{ backgroundColor: "#f1f1f1", height: 100 }}>
              <Title>Toilet Stops</Title>
              <Paragraph>{stopSub}</Paragraph>
            </Card.Content>
          </Card>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default WalkSummary;
