import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#071d34", minHeight: "100vh" }}>
        <Routes>
          <Route index path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
