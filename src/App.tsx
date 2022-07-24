import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";

import { Landing } from "./pages/Landing";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="dashboard" element={<div>dashboard</div>}/>
            <Route path="stats" element={<div>stats</div>}/>
            <Route path="generator" element={<div>generator</div>}/>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
