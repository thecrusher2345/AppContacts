export function Notification ({ message,error}){


    return(
        <div>
            { message ? (<div className={`bg-red-100 border ${error ? 'border-red-600 text-red-700' : 'border-green-600 text-green-700'  } px-4 py-3 rounded-md fixed top-4 right-4`}>
            {message}
        </div>): null}
        </div>

        
    )
}