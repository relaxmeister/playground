import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";

import Front from "./screens/front/Front";
import ModalDisplayer from "./screens/modalDisplayer/ModalDisplayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Front />} />
        <Route path={"/modaldisplay"} element={<ModalDisplayer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
