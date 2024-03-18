export default function TabButton({children, onSelect}) {
    function handleClick() {
        console.log("Du har trykket på knappen!")
    }

    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
};