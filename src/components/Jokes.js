import react from "react";
export default function Jokes(props) {
  return (
    <div className="jokesDiv">
      <div className="jokesSecondDiv">
        <h3>Setup : {props.setup}</h3>
        <p>Punchline : {props.punchline}</p>
        <hr></hr>
      </div>
    </div>
  );
}
