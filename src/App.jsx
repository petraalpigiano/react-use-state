export default function App() {
  return (
    <>
      <div className="background-title">
        <h1>Learn Web Development</h1>
      </div>
      <div className="container ">
        <div className="container-buttons">
          <button className="button active">HTML</button>
          <button className="button">CSS</button>
          <button className="button">JavaScript</button>
          <button className="button">Node.js</button>
          <button className="button">Express</button>
          <button className="button">ReactJS</button>
        </div>
        <div className="container-card">
          <div className="card-title">HTML</div>
          <div className="card-content">
            HTML (HyperText Markup Language) è il linguaggio standard per creare
            pagine e applicazioni web. Struttura il contenuto web e fornisce
            elementi di base come titoli, paragrafi e immagini.
          </div>
        </div>
      </div>
    </>
  );
}
