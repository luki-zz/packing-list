import type { ItemsType } from "../../types/ItemsType";
import style from "./Item.module.css";

export default function Item({
  item,
  onPacked,
  onRemove,
}: {
  item: ItemsType;
  onPacked(id: number): void;
  onRemove(id: number): void;
}) {
  return (
    <li key={item.id} className={style.listItem}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onPacked(item.id)}
      ></input>
      <span
        style={
          item.packed
            ? ({ textDecoration: "line-through" } as React.CSSProperties)
            : ({} as React.CSSProperties)
        }
      >
        {item.quantity} - {item.description}
      </span>
      <button onClick={() => onRemove(item.id)}>❌</button>
    </li>
  );
}
