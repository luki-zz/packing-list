import { ItemsType } from "../App/App";
import style from "./Stats.module.css";

export default function Stats({ items }: { items: ItemsType[] }) {
  const packed = items.filter((item) => item.packed);
  return (
    <p className={style.stats}>
      <em>
        {items.length > 0
          ? `You have ${
              items.length
            } items on your list, and you already packed ${
              packed.length
            } (${Math.floor((packed.length / items.length) * 100)})`
          : "Start adding some items to your packing list 🚀"}
      </em>
    </p>
  );
}
