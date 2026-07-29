import { useState } from "react";

import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";

import "./styles/App.css";

function App() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  return (
    <div className="container">
      <Header />

      <PlatformSelector
        selectedPlatforms={selectedPlatforms}
        setSelectedPlatforms={setSelectedPlatforms}
      />
    </div>
  );
}

export default App;