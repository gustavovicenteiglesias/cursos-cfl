import React, { useState } from "react";




const Home = () => {
    const [nombre, setNombre] = useState()
    const [isvissible, setIsvisible] = useState(true)
    //cada vez que apreto una tecla se lo agrego a nombre
    const cambiarNombre = (e) => {
        setNombre(e.target.value)

    }

    //cuando apreto enviar hago visible atraves de setIsVisible al h1 con el nombre 
    const guardarDatos = (e) => {
        e.preventDefault();
        console.log(nombre)
        setIsvisible(false)
    }

    return (
        <>
            <form onSubmit={(e) => guardarDatos(e)}>
                <label >Nombre</label>
                <input name="nombre" onChange={(e) => cambiarNombre(e)}></input>
                <button type="submit">Enviar</button>
            </form>
            {/* imprimir  nombre*/}
            <div hidden={isvissible}>
                <h1>Tu nombre es {nombre}</h1>
            </div>
        </>

    )
}

export default Home;