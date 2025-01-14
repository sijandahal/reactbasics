
import componentImage from "./assets/components.png"
import { Greeting } from "./Greeting"
import { CORE_CONCEPTS } from "./data"
import {CoreConcept}  from "./assets/components/CoreConcept"
import Header from "./assets/components/Header/Header"
import { TabButton } from "./assets/components/Button/TabButton"


//Sijan's THinking -- Not Bad
// const randomNumber = Math.floor(Math.random() * contents.length);
// const randomContent = contents[randomNumber];
// console.log(randomContent);


// function CoreConcept(props) {
//   return (
//     <li>
//       <img src = {props.img} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function App() {
  function handleClick(selectedButton) {
    //selectedButton is a parameter, which helps us to know which button is being clicked, for example: Component, JSX, Props, State
    console.log("Clicked")
    console.log(selectedButton);
  }

  console.log(CORE_CONCEPTS);
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id = "core-concepts">
          <ul>
            {
              CORE_CONCEPTS.map((concept, index)=> {
                return (
                  <div key = {concept.title} >
                    {/* From parentcomponent app we are passing the value to the child component called CoreConcept which is a another file */}
                  <CoreConcept title = {concept.title} img = {concept.image} description = {concept.description}/> 
                  </div>
                )
              })
            }
          {/* <CoreConcept title = "Components" 
          description = "The core UI building block" 
          img = {componentImage} />
          {/* <CoreConcept title = "Props" description/>
          <CoreConcept title = "Awesome"/>
          <CoreConcept title = "Awesome"/> */}
          </ul>
        </section>

        <section id = "examples">
            <h2>Examples</h2>
            <menu>
              <TabButton  value = "Components" onSelect={() => handleClick("components")}/>
              <TabButton value = "JSX" />
              <TabButton value = "Props"/>
              <TabButton value = "State"/>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
