

function Label({text,id}){
    return(
        <label htmlFor={id} className="text-2xl text-white ml-2 mb-2">{text}</label>
    )
}

export default Label;
