import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";


function Courses() {
  
  return (
    <>
    <Navbar />
    <div>
    <Course className=" min-h-screen"/>
    </div>
    <Footer />
    
    </>
  )
}

export default Courses;