import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./containers/Home";
import Notes from "./containers/Notes";
import MainRoute from "./MainRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <MainRoute path="/" element={<Home />} />
        <MainRoute path="/notes" element={<Notes />} />

        {/* for example, login page does not need menu and footer */}
        <Route path="/login" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App