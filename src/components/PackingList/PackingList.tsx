import style from "./PackingList.module.css";
import { ItemsType } from "../App/App";
import Item from "../Item/Item";

export default function PackingList({
  items,
  onPacked,
  onRemove,
  setSortBy,
  sortBy,
  onClearList,
}: {
  items: ItemsType[];
  onPacked(id: number): void;
  onRemove(id: number): void;
  sortBy: string;
  setSortBy(e: string): void;
  onClearList(): void;
}) {
  return (
    <div className={style.list}>
      <ul>
        {items.map((item) => (
          <Item item={item} onPacked={onPacked} onRemove={onRemove} />
        ))}
      </ul>
      <div className={style.actions}>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
