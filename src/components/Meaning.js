import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "../styles/Meaning.css";

const Meaning = (props) => {
  if (props.meaning) {
    return (
      <div className="meaning-container">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <Examples example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
};

export default Meaning;
