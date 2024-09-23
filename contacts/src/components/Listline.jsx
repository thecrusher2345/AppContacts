export function ListLine({ name, number}) {

    return (
        <li className="flex gap-3">
            <h4 className="">{name} - </h4>
            <p>{number}</p>
        </li>
    )
}

