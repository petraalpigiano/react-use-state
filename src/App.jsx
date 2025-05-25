import languages from "./data/languages";
import Button from "./components/Button";
import Card from "./components/Card";

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
          {languages.map(function (currentLanguage) {
            return (
              <Card
                key={currentLanguage.id}
                title={currentLanguage.title}
                description={currentLanguage.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
