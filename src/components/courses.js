import CourseCard from "./card";
import React from "react";
import './courses.css'

const Courses = () => {
  return (
    <div className="courses">
      <h2 className="title">Course</h2>
      <div className="cardContainer">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
