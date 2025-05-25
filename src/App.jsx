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
          {languages.map(function (currentLanguage) {
            return (
              <Button key={currentLanguage.id} title={currentLanguage.title} />
            );
          })}
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
