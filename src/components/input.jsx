
function Input({placeholder,id}){
    return(
        <input type="text" name="Usuário" id={id} placeholder={placeholder} className="bg-white text-xl px-2 py-2 w-full rounded-lg focus:outline-none focus:ring-0" />
    );
}

export default Input;
