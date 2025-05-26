import { useState } from "react";
import languages from "./data/languages";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedLanguage = languages.find(function (currentLanguage) {
    return currentLanguage.id === selectedId;
  });

  return (
    <>
      <div className="background-title">
        <h1>Learn Web Development</h1>
      </div>
      <div className="container ">
        <div className="container-buttons">
          {languages.map(function (currentLanguage) {
            return (
              <Button
                key={currentLanguage.id}
                title={currentLanguage.title}
                handleClick={function () {
                  return setSelectedId(currentLanguage.id);
                }}
              />
            );
          })}
        </div>
        <div className="container-card">
          <Card
            title={selectedLanguage.title}
            description={selectedLanguage.description}
          />
        </div>
      </div>
    </>
  );
}
