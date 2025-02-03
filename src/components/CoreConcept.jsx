export function CoreConcept({img, title, description}) {
    // In the above paramenter we have used {} descructure instead of (props) and after return we prev had something like props.title before detructuring
    
    return (
        <li>
      <img src = {img} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
    )
}

//this is a child component