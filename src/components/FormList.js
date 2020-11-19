import React from "react";
import FormListButton from "./FormListButton";
import FormListInputpass from "./FormListInputpass";
import FormListInputAcc from "./FormListInputAcc";

export default function FormList() {
  return (
    <div>
      <FormListInputAcc />
      <FormListInputpass />
      <FormListButton />
    </div>
  );
}
