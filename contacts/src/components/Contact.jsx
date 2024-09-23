export function Contact ({handleChangeName, handleChangeNumber, addContact, newName, newNumber}) {


    
    return (
        <div className="border-2 bg-slate-500 rounded-lg p-2 flex">
            <form onSubmit={addContact}>
                <div>
                    <div className="flex gap-3 my-3">
                        <label htmlFor="">Name: </label>
                        <input type="text"  value={newName} onChange={handleChangeName} className="border-black border-2 rounded-md w-full"/>
                    </div>
                    <div className="flex gap-3">
                        <label htmlFor="">Number: </label>
                        <input type="text" value={newNumber} onChange={handleChangeNumber} className="border-black border-2 rounded-md"/>
                    </div>
                </div>
                <div className="flex justify-center">
                <button type="submit"
                className="border-2 border-black rounded-md px-4 py-2 mt-3 bg-slate-900 text-white font-bold cursor-pointer"
                >Add</button>
                

                </div>
                
            </form>
        </div>
    )
}