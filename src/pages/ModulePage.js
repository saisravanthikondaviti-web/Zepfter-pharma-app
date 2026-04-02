import React from "react";
import { useLocation } from "react-router-dom";

const ModulePage = () => {
  const { state } = useLocation();

  if (!state) return <h2>No Data Found</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>{state.title}</h2>
      <p>{state.description}</p>
      <small>Duration: {state.duration}</small>
    </div>
  );
};

export default ModulePage;