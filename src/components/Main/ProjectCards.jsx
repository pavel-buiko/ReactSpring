import { useState } from "react";
import Cards from "./Cards";
import ProjectSearch from "./ProjectSearch";
export default function ProjectCards() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="main__cards">
      <div className="cards-container">
        <ProjectSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Cards searchTerm={searchTerm} />
      </div>
    </div>
  );
}
