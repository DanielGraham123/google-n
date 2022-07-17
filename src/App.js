import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-slate-800 dark:text-gray-200 min-h-screen">
        <Navbar darkMode={theme} setDarkMode={setTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
