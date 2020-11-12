import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    );
  };

  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <Part part={props.part[0].name} exercises={props.part[0].exercises} />
        <Part part={props.part[1].name} exercises={props.part[1].exercises} />
        <Part part={props.part[2].name} exercises={props.part[2].exercises} />
      </div>
    );
  };

  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises{" "}
          {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content part={parts}></Content>
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      ></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
