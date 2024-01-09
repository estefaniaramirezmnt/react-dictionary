import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
  console.log(props.meaning);
  return (
    <div className="meaning-container">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <Examples example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
};

export default Meaning;