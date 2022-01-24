import React,{useState} from 'react'
import uniqid from 'uniqid'

const Listadenombres = ()=>{
    const [nombre,setNombre] = useState('')
    const [lista,setLista] = useState([])
    const [edicion,setEdicion]= useState(false)
    const [id,setId] = useState('')
    const [error,setError] = useState('null')

    const addName = (event)=>{
        event.preventDefault()
        if(!nombre.trim()){
            setError('El campo Nombre esta vacio')
            return
        }
        const nuevoNombre = {
            id:uniqid(),
            name:nombre
        }
        setLista([...lista,nuevoNombre])
        setNombre('')
        setError('null')

    }
    const deleteName = (id)=>{
        const nuevoArray = lista.filter(item => item.id !== id)
        setLista(nuevoArray)
        setNombre('')
    }
    const edit = (item)=>{
        setEdicion(true)
        setNombre(item.name)
        setId(item.id)
        
    }

    const editName=(e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError('El campo Nombre esta vacio')
            return
        }
        const newArray = lista
        .map(item => item.id === id? {id:id,name:nombre}:item)
        setLista(newArray)
        setEdicion(false)
        setNombre('')
        setError('null')
    }

    return (
        <div>
            <h2>App de Lista</h2>
            <div className='row'>
                <div className='col' id='1'>
                    <h2>Listado de nombres</h2>
                    <ul className='list-group'>
                        {
                            lista.map((item)=>
                                <li key ={item.id} className='list-group-item'>
                                    {item.name}
                                    <button
                                        className='btn btn-danger float-end'
                                        onClick = {()=>{deleteName(item.id)}}
                                    >
                                        BORRAR
                                    </button>
                                    <button
                                        className='btn btn-info float-end'
                                        onClick = {()=>{edit(item)}}
                                    >
                                        EDITAR
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className='col' id='2'>
                    <h2>Formulario para anadir nombres</h2>
                    <form onSubmit={edicion ? editName : addName} className='form-group d-grid'>
                        <input 
                            className='form-control mb-3' 
                            type='text' placeholder='Introduce el nombre'
                            onChange={(e)=>{setNombre(e.target.value)}}
                            value = {nombre}
                        >
                        </input>
                        <input 
                            className='btn btn-info' 
                            type='submit' 
                            value={edicion ? 'Editar nombre': 'Registrar nombre'}>    
                        </input>
                    </form>
                    {
                        error !== 'null' ? (
                            <div className = 'alert alert-danger mt-2'>
                                {error}
                            </div>
                        ) :
                            (
                                <div> </div>  
                        )
                    }
                </div>
            </div>
        </div>
        )
}

export default Listadenombres