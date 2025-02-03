import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";
const contents = [
    "Core",
    "Basic",
    "Fundamental"
  ]
  
const getRandomElement = ((array) => {
    return (array[Math.floor(Math.random() * array.length)])
  })
export default function Header() {
      
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getRandomElement(contents)} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
