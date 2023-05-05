import CourseCard from "./card";
import React from "react";
import './courses.css'

const Quizes = () => {
  return (
    <div className="courses">
      <h2 className="title">Quizes</h2>
      <div className="cardContainer">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Quizes;
