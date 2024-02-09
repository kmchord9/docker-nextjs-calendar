"use client";

import React from "react";
import App from "./App";
import ContextWrapper from "./context/ContextWrapper";

export default function Home() {
 
  return (
    <>
    <ContextWrapper>
      <App />
    </ContextWrapper>
    </>
  );
}
