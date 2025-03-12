"use client";

import { ChangeEvent, useState } from "react";
import Input from "./components/Input";
import { Provider } from "react-redux";
import { store } from "./stores/store";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Provider store={store}>
        <Input value={inputValue} onChange={handleTextChange} />
      </Provider>
    </div>
  );
}
