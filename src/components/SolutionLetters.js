const renderSolutionLetters = (props) => {
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

function SolutionLetters(props) {
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

export default SolutionLetters;
