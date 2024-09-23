export function Search ({handleChangeSearch} ){
    return (
        <div className="flex w-[90%]  gap-3  px-4 py-10">
            <h3 className="text-black font-bold">Search: </h3>
            <input type="text" onChange={handleChangeSearch} className="border-black border-2 rounded-md w-full"/>

        </div>
    )
}