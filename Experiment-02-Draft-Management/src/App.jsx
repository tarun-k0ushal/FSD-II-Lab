import { useState } from "react";

import Header from "./components/Header";
import DraftEditor from "./components/DraftEditor";

import "./styles/App.css";

function App() {

  const [content, setContent] = useState("");

  const saveDraft = () => {
    alert("Draft Saved");
  };

  return (
    <div className="container">

      <Header />

      <DraftEditor
        content={content}
        setContent={setContent}
        saveDraft={saveDraft}
        isEditing={false}
      />

    </div>
  );
}

export default App;