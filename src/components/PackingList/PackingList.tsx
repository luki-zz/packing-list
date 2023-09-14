import style from "./PackingList.module.css";
import { ItemsType } from "../App/App";

export default function PackingList({ items }: { items: ItemsType[] }) {
  return (
    <div className={style.list}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" value="false"></input>
            <span
              style={
                item.packed
                  ? ({ textDecoration: "line-through" } as React.CSSProperties)
                  : ({} as React.CSSProperties)
              }
            >
              {item.quantity} - {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
