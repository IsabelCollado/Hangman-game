const Form = ({ onChange, lastLetter }) => {
  return (
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
        onChange={onChange}
        value={lastLetter}
      />
    </form>
  );
};

export default Form;
