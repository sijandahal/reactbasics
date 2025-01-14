export function TabButton({onSelect, value}) {

    return (
        <li>
        <button onClick={onSelect}>{value}</button>
        </li>
    )
} 
