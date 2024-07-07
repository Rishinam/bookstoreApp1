import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
      <p className="mt-12">It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing</p>
      <Link to="/">
      <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
      </Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
      {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default Course;