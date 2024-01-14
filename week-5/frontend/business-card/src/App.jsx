import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "rahmat",
      description: "Hi I'm Rahmat",
      interests: ["coding, basketball"],
      socialMedia: ["facebook", "instagram", "linkedin"],
    },
    {
      id: 2,
      name: "rahmat",
      description: "Hi I'm Rahmat",
      interests: ["coding, basketball"],
      socialMedia: ["facebook", "instagram", "linkedin"],
    },
    {
      id: 3,
      name: "rahmat",
      description: "Hi I'm Rahmat",
      interests: ["coding, basketball"],
      socialMedia: ["facebook", "instagram", "linkedin"],
    },
  ]);

  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          description={card.description}
          interests={card.interests}
          socialMedia={card.socialMedia}
        />
      ))}
    </>
  );
}

export default App;
