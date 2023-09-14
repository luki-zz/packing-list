import { useState } from "react";
import style from "./Form.module.css";

export default function Form({ onAddItem }: { onAddItem: any }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAddItem(description, quantity);
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className={style.addForm} onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
