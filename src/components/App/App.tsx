import { useState } from "react";
import style from "./App.module.css";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";
import type { ItemsType } from "../../types/ItemsType";

function App() {
  const [items, setItems] = useState<ItemsType[]>([]);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: ItemsType[] = [];

  function handleAddItem(description: string, quantity: number) {
    const item = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    setItems([...items, item]);
  }

  function handlePackedStatus(id: number) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  }

  function handleRemove(id: number) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  function handleClearList() {
    if (confirm("Are You shure You want to clear list") == true) {
      setItems([]);
    }
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  if (sortBy === "input") {
    sortedItems = items;
  }

  return (
    <div className={style.app}>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={sortedItems}
        onPacked={handlePackedStatus}
        onRemove={handleRemove}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
