import { useState } from "react";

import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import PostEditor from "./components/PostEditor";
import CharacterCounter from "./components/CharacterCounter";
import ValidationPanel from "./components/ValidationPanel";

import "./styles/App.css";

function App() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [post, setPost] = useState("");

  return (
    <div className="container">
      <Header />

      <PlatformSelector
        selectedPlatforms={selectedPlatforms}
        setSelectedPlatforms={setSelectedPlatforms}
      />

      <PostEditor
        post={post}
        setPost={setPost}
      />

      <CharacterCounter
        selectedPlatforms={selectedPlatforms}
        post={post}
      />
      <ValidationPanel
        selectedPlatforms={selectedPlatforms}
        post={post}
     />
    </div>
  );
}

export default App;