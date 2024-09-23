import { ListLine } from "./Listline";

export function ListContact ({filter, onDeleteContact}) {
    if (!Array.isArray(filter)) {
        return <p>No contacts available</p>;
      }
    return (
        <div className="border-2 w-full bg-slate-500 rounded-md p-5" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h2 className="font-bold py-2">Numbers: </h2>
            <ul>
                {filter.map(person => (
                    <div key={person.id} className="flex flex-col gap-3">
                        <ListLine name={person.name} number={person.number} />
                        <button
                            className="border border-black rounded-md px-2 bg-slate-900 text-white cursor-pointer"
                            value={person.id}
                            onClick={() => onDeleteContact(person.id)}
                        >
                            Delete
                        </button>
                        <hr />
                    </div>
                ))}
            </ul>
        </div>
    );
}
