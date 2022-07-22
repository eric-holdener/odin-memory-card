export default function GuessCard(props) {

  function checkAnswer() {
    if (props.guessed.includes(props.id)) {
      if (props.guesses > props.bestGuesses) {
        props.setBestGuesses(props.guesses);
      }        
      props.setGuesses(0);
      props.setRandomShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      props.setGuessed([]);
    } else {
      props.setGuessed([...props.guessed, props.id]);
      props.setRandomShuffle(props.shuffle(props.randomShuffle));
      props.setGuesses(props.guesses+1);
    }
  };

  return (
    <div className="guessCard" onClick={checkAnswer}>
      <p>{props.id}</p>
    </div>
  );
}