import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<index />} />
      <Route path="/about" element={<about />} />
    </Routes>
  );
}

export default App;
