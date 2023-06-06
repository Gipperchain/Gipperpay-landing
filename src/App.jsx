import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Header from "./header";
import HeroSection from "./hero";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full">
            <Header />
            <HeroSection />
            <div className="h-[700px] w-full"></div>
        </div>
    );
}

export default App;
