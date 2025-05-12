import { useState } from "react";
import Card from "./Card";

export default function RouletteBar(){

  const [cards, setCards] = useState<string[]>([]);
  const [newCard, setNewCard] = useState<string>('');

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
    
    <div className="flex items-center justify-center">
      {cards.map(() => (
        <Card />
      ))}
    </div>

    <div className="flex items-center justify-center">
      <input
        type="text"
        value={newCard}
        onChange={(e) => setNewCard(e.target.value)}
        className="border border-gray-300 rounded p-2 mr-2"
        placeholder="Enter card name"
      />
      <button
        onClick={() => {
          if (newCard.trim() !== '') {
            setCards([...cards, newCard.trim()]);
            setNewCard('');
          }
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add card
      </button>     
    </div>
 
    </div>
  );
}
