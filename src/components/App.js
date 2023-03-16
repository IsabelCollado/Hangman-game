import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getWordFromApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';

function App() {
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

  /* const handleClickBtn = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };
 */
  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
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
      <Header className="header__title" />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <Form onChange={handleChangeLastLetter} lastLetter={lastLetter} />
        </section>
        <Dummy className={`dummy error-${getNumberOfErrors()}`} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
