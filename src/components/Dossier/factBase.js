import React from "react";
import Hobbies from "./Hobbies";

export default function factBase() {
  const data = {
    fullName: "Недбальский Федор Дмитриевич",
    placeOfBirth: "г. Мурманск",
    dateOfBirth: "23.07.2002",
  };

  console.log(data);

  return <Hobbies data={data} />;
}
