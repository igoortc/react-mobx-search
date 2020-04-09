import React, { Component } from "react";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { newDiagram } from "./newDiagram";

import { Title } from "../../components/Title";

import { DiagramContainer } from "./styled";

export default class ModelerPage extends Component {
  modeler = null;

  componentDidMount = () => {
    this.modeler = new BpmnJS({
      container: "#bpmnContainer"
    });

    this.createNewDiagram(newDiagram);
  };

  createNewDiagram = xml => {
    this.modeler.importXML(xml, err => {
      if (err) {
        console.log("Error rendering", err);
      } else {
        console.log("We are good!");
      }
    });
  };

  render() {
    return (
      <>
        <Title>
          <span role="img" aria-label="Writing hand">
            ✍️
          </span>{" "}
          Modeler
        </Title>
        <DiagramContainer id="bpmnContainer" />
      </>
    );
  }
}
