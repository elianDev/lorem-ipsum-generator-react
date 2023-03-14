import React, { ReactEventHandler } from "react";
import text from "./data";

function App() {
  const [value, setValue] = React.useState(0);
  const [paragraphs, setParagraphs] = React.useState<string[]>([]);

  function handleSubmit(event: React.FormEvent) {
    event?.preventDefault();
    setParagraphs(text.slice(0, value));
  }

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs: </label>
        <input
          type="number"
          name="number"
          id="number"
          min="1"
          max={text.length - 1}
          value={value}
          onChange={({ target }) => setValue(+target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs && paragraphs.map((p, index) => <p key={index}>{p}</p>)}
      </article>
    </section>
  );
}

export default App;
