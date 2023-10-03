import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [val, setVal] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, val, packed: false, id: Date.now() }
    onAddItems(newItem);
    setDescription('');
    setVal(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={val} onChange={(e) => setVal(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}>
      </input>
      <button>Add</button>
    </form>
  )
}