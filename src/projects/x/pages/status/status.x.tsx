import React from "react";
import { useParams } from "react-router-dom";

const Status: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <h1>Status Page {id}</h1>;
};

export default Status;
