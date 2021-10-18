import React from "react";

function Details(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.technologies}</p>
      <p>
        <a href={props.liveLink}>Visit {props.name} </a>
      </p>
      <p>
        <a href={props.githubLink}>Visit {props.name} Repo</a>
      </p>
      <img src={props.img} />
    </div>
  );
}

export default Details;
