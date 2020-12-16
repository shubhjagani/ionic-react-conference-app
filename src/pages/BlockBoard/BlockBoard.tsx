import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import "./BlockBoard.css";
import {
  SimpleCard,
  InteractiveCard,
  MediumCard,
} from "../../components/Card/Card";
import { Checkboxes } from "../../components/Checkboxes/Checkboxes";

const BlockBoard: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage style={{ padding: "20px", paddingLeft: "40px" }}>
      <h1>This is Blockboards. Experiment with random Ionic Blocks</h1>
      <SimpleCard />
      <InteractiveCard />
      <MediumCard />
      <Checkboxes />
    </IonPage>
  );
};

export default BlockBoard;
