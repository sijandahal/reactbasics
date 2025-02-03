export function TabButton({onSelect, value, className, isSelected}) {

    return (
        <li>
        <button onClick={onSelect} className={isSelected ? "active": ""}>{value}</button>
        </li>
    )
} 
