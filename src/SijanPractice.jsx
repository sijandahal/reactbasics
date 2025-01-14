import reactImage from "./assets/react-core-concepts.png"
import { Greeting } from "./Greeting"

const contents = [
  "Core",
  "Basic",
  "Fundamental"
]

//Sijan's THinking -- Not Bad
// const randomNumber = Math.floor(Math.random() * contents.length);
// const randomContent = contents[randomNumber];
// console.log(randomContent);

const getRandomElement = ((array) => {
  return (array[Math.floor(Math.random() * array.length)])
})

// function UserProfile(props) {
//   return (
//     <>
//     <h1> {props.username} </h1>
//     <h1> {props.age} </h1>
//     <h1> {props.email} </h1>
//     </>
//   )
// }
// const users = [
//   {
//     username: "Sijan",
//     age: 24,
//     email: "dahalsijan7@gmail.com",
//   },
//   {
//     username: "Nisha",
//     age: 22,
//     email: "nishahusnabd@gmail.com",
//   },
//   {
//     username: "Alex",
//     age: 30,
//     email: "alexsmith@example.com",
//   },
//   {
//     username: "Maria",
//     age: 28,
//     email: "maria.jones@example.com",
//   },
// ];

// function ParentComponent() {
//   return (
//     users.map((user)=> {
//       return (
//         <UserProfile username = {user.username} age= {user.age} email = {user.email} />
//       )
//     })
//   )
//   // if (!uname) {
//   //   return (
//   //     <UserProfile username = "sijan" age= "24" email = "dahalsijan7@gmail.com" />
//   //   )
//   // } 
// }


function CoreConcept(props) {
  return (
    <li>
      <img/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function Header() {
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

function App() {
  return (
    <div>
      {/* <Greeting message = "Sijan"/> */}
      <Header />
      {/* <ParentComponent/> */}
      <main>
        <h2>Time to get started!</h2>
        <section id = "core-concepts">
          <ul>
          <CoreConcept title = "Awesome"/>
          <CoreConcept title = "Very Good"/>
          <CoreConcept title = "Awesome"/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
