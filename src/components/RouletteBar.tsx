import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Card from "./Card";

export default function RouletteBar(){

  const [cards, setCards] = useState<string[]>([]);
  const [cardsToRender, setCardsToRender] = useState<string[]>([]);
  const [newCard, setNewCard] = useState<string>('');

  const { width } = useWindowDimensions();
  const numberOfCards = Math.ceil(width / 200); // 200px is currently the width of each card
  
  // There must be a cleaner way to do this. this is temporary
  useEffect(() => {
    if (cards.length < numberOfCards) {
      let cardsCopy = [...cards];
      for (let i = cards.length; i < numberOfCards; i++) {
        if (cards.length !== 0) {
          cardsCopy.push(cards[i%cards.length]);
        } else {
          cardsCopy.push("Hola");
        }
      }
      setCardsToRender(cardsCopy);
    }
  }, [cards, numberOfCards])

  return (
    <div className="flex flex-col h-screen w-screen">
    
    <div className="flex"> 
      {cardsToRender.map((card) => (
        <Card card={card}/>
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
          // if (newCard.trim() !== '') {
            setCards([...cards, ''+ (cards.length+1)]);
            setNewCard('');
          // }
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add card
      </button>     
    </div>
 
    </div>
  );
}
