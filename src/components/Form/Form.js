import {useState} from 'react'


const Form = () => {
    
    //react me pide vincular los eventos con react, usando los estados, es apartir de esto, que react entiende que algo sucedio y que eso tiene impacto en el ciclo de vida 
    const [input, setInput] = useState('')
    
    const handleSubmit = (e) => {
        //el prevent default va pa evitar que luego del submit se reactualice la pagina
        e.preventDefault()
        console.log(input)
    }

    // el evento "handlekeydown" opera cuando PRESIONO una tecla 
    const handleKeyDown = (e) => {
        console.log(e)

        //quiero evitar que el usuario ponga como input la tecla "space", revisando el objeto sintetico puedo ver que el nombre de la tecla sale en la propiedad "code" del objeto sintetico, así que entonces puedo poner una condicional y esto hara que cuando se apriete SPACE se PREVENGA la accion default de apretar space que es "registrar space en el input" y entonces aunque ponga space no se registrara NADA--- lo mismo pasa si yo por ej prevengo otros codes ocmo "keyA" o whatever
        if (e.code === 'Space'){
            e.preventDefault()
        }
    }

    //event bubblin sirve para invertir la escucha de los eventos para en lugar de ir de hijos a padres, ir de padres a hijos (or similar -- buscar info al respecto)

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
                onChange={(e) => {setInput(e.target.value)}}
                onKeyDown={handleKeyDown}
            />
            <button type= 'submit'>SUBMIT</button>
        </form>
    )
}

export default Form