import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "../components";
import {
  ErrorPage,
  JoinTheMovement,
  Landing,
  Science,
  Questionnaires,
} from "../pages";

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/science" element={<Science />} />
      <Route path="/join" element={<JoinTheMovement />} />
      <Route path="/questionnaires" element={<Questionnaires />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
