import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getWordFromApi from '../services/api';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('pepino');
  // const [userLetters, setUserLetters] = useState([{},{}]);  //este es un array relleno
  //array vacio
  //array de estado (spread)  setseries([...series]);

  const [userLetters, setUserLetters] = useState([]);

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');

    return wordLetters.map((eachWord, index) => {
      if (userLetters.includes(eachWord)) {
        return (
          <li key={index} className="letter">
            {eachWord}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) =>
        word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };

  const handleChangeLastLetter = (ev) => {
    //el valor del if tiene q ser el value en este caso, xq se coge el valor q se escribe en el input
    if (ev.target.value.search(/[a-zñáéíóúü]/i) === 0) {
      setLastLetter(ev.target.value);
      // /[a-zñaeiou]/ es una expresión reservada, donde i es un modificador q indica q da igual q las letras se pongan en mayúsculas o minúsculas.

      setUserLetters([...userLetters, ev.target.value]);
    } else {
      setLastLetter('');
    }
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleChangeLastLetter}
              value={lastLetter}
            />
            <button onClick={handleClickBtn} className="buttom">
              Incrementar
            </button>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
