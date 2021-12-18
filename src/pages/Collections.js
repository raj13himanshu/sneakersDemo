import React from "react";
import Navbar from "../Navbar";
import Error404 from "../Error404";
import Collection from '../Collections';

const Collections = () => {
  return (
    <>
      <Navbar />

      <Collection />

      <Error404 />
      
    </>
  );
};

export default Collections;
