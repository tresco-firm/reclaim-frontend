import { Navbar, Footer } from "./components";
import Landing from "./pages/Landing";
import { AuthProvider } from "./utils/auth";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Landing />
      <Footer />
    </AuthProvider>
  );
};

export default App;
