import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  const Header = (props) => {
    return (
      <div>
        <p>{props.course.name}</p>
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
          {props.parts[0].exercises +
            props.parts[1].exercises +
            props.parts[2].exercises}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content part={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
