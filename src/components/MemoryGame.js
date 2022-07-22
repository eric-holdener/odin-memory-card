import { useEffect, useState } from "react";
import GuessCard from "./GuessCard";

export default function MemoryGame() {
  const [bestGuesses, setBestGuesses] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [guessed, setGuessed] = useState([]);
  const [randomShuffle, setRandomShuffle] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    };
  
    return array;
  }

  return (
    <div>
      <h2>Guesses - {guesses}</h2>
      <h2>Best Guesses - {bestGuesses}</h2>
      <div className="container">
        {randomShuffle.map((guess, idx) => {
          return <GuessCard id={guess} shuffle={shuffle} 
          setRandomShuffle={setRandomShuffle} randomShuffle={randomShuffle} 
          guessed={guessed} setGuessed={setGuessed} 
          guesses={guesses} setGuesses={setGuesses}
          bestGuesses={bestGuesses} setBestGuesses={setBestGuesses}
          />
        })}
      </div>
    </div>
  )
}