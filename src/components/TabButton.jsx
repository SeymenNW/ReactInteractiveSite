export default function TabButton({children, onSelect, isSelected}) {
    function handleClick() {
        console.log("Du har trykket på knappen!")
    }



    return(
        <li>
            <button className={isSelected ? "active" : null} onClick={onSelect}>{children}</button>
        </li>
    )
};