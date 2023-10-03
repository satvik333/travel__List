import { useState } from 'react';
import Item from './Items';

export default function PackingList({ items, onDeleteItem, onToggleItem, clearList }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value='input'>Sort By Input Order</option>
            <option value='description'>Sort By Input Description</option>
            <option value='packed'>Sort By Packed Status</option>
        </select>
        <button onClick={clearList}> Clear List </button>
        </div>
      </div>
  )
}