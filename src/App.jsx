import { FaCartArrowDown } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6"
import './index.css'
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";

function App() {
  return (
    <section>
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </section>
  );
}

export default App;
