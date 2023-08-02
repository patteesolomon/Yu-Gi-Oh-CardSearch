import './App.css';
import { useState } from "react";
import Form from './components/Form';
import { getCard } from './services/cards-api';
import CardDisplay from './components/CardDisplay';
import { json } from 'react-router';

function App() {
  const [card, setCard] = useState(null);
//call the Card data if the Card isn't there
  const CallCard = async (search: any) => {
        try {
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${search}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse.data[0]);
        setCard(jsonResponse.data[0]);
    }
    catch (e) {
        console.error(e);
    }
    console.log("card: ", card);
};
  const SavedCard = async (search: any) => {
  try{
    const response = (await getCard(search));
    const data = await response.data;
    // data loads
    console.log(data);
    setCard(data);
  }
  catch(e){
    console.error(e);
  }
  };
  // add saving cards to the database
  // and a check to see if the card is already in the database
  // if it is, then don't save it
  // and load that one instead
  const SaveCard = async () => {
    try {
      const response = await fetch(`localhost:3000/cards`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(card),
        }
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse.data[0]);
      
      response.json().then((data) => {
        console.log(data);
      });
      
      (jsonResponse.data[0]);
    }
    catch (e) {
      console.error(e);
    }
    console.log("card: ", card);
  };
  
  return (
    <>
      <h3>Yu-Gi-Oh! Card Search</h3>
      <h3>Search For any Yu-Gi-Oh card You want!</h3>
      <Form cardsearch={CallCard} />
        {card ? <CardDisplay card={card} /> : null}
    </>
  )
}

export default App
