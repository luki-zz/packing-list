import { useState } from "react";
import style from "./App.module.css";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";

export interface ItemsType {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<ItemsType[]>([]);

  function handleAddItem(description: string, quantity: number) {
    const item = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    setItems([...items, item]);
  }
  return (
    <div className={style.app}>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
