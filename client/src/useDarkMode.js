import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [valuesDarkMode, setValuesDarkMode] = useLocalStorage(
    "dark",
    "initial"
  );

  useEffect(() => {
    var body = document.querySelector("body");
    valuesDarkMode
      ? body.classList.toggle("dark-mode")
      : body.classList.remove("dark-mode");
  }, [valuesDarkMode]);
  debugger;
  return [valuesDarkMode, setValuesDarkMode];
};
