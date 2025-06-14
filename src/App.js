// src/App.js
import { useEffect, useState } from 'react';
import PrimarySearchAppBar from './navbar'; // if you have one
import RecipeReviewCard from './components/card'
import { fetchCards } from './services/cardService';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCards();
      console.log("Fetched cards:", data);
      setCards(data);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards.map((card) => (
          <RecipeReviewCard
            key={card.id}
            title={card.title}
            subheader={card.subheader}
            image={card.image}
            description={card.description}
            method={card.method}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
