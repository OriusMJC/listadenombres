import React,{useState} from 'react'

const Formnombre = ()=>{
    const [nombre,setNombre] = useState('')
    const [edad,setEdad] = useState('')

    //Realmente no es para nada necesario este boton
    const Validar = (event)=>{
        event.preventDefault()
    }

    return(
        <div className='container'>
            <form onSubmit={Validar} className='form-group'>
                <input
                    onChange={(e)=>{setNombre(e.target.value)}}
                />
                <input
                    onChange={(e)=>{setEdad(e.target.value)}}
                />
                <input className='btn btn-info btn-block mb-2' type='submit'/>
            </form>
            <h2>Tu nombre es {nombre} y tu edad {edad}</h2>
        </div>
    )
}

export default Formnombre