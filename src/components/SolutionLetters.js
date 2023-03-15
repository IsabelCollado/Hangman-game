import "../styles/layout/letters.scss";

function SolutionLetters(props) {

  const renderSolutionLetters = () => {
    const wordLetters = props.word.split("");

    return wordLetters.map((eachWord, index) => {
      if (props.userLetters.includes(eachWord)) {
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

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

export default SolutionLetters;
