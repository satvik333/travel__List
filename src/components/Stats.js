export default function Stats({ items }) {
  if (items.length <= 0) return (
    <p className="stats">
      <em>Start adding some items to your packing list</em>
    </p>
  )

  const numItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const percentOfPacked = Math.round((numberOfPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {
          (percentOfPacked !== 100) ?
            `You have ${numItems} items in your list, and you already packed ${numberOfPacked} (${percentOfPacked}%)` :
            'You are ready to go!!!!'
        }
      </em>
    </footer>
  )
}