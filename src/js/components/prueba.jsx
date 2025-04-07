import React, { useEffect, useState } from "react";


export const Prueba = () => {


    //useEffect
    // para generar efectos secundarios en el  componente
    // dos formas de usarlo:
    /*
    
    1. array de depdencias vacio --> window.onload ---> MUUUUUYYYYYY USADO para traer informacion de BBDD
    
    2. con estados en el array de dependencia --> cada vez que un estado sea modificado, se va a ejecutar el useEffect
    
    
    SIEMPRE... PERO SIEMPRE!!!!!! CON ,[]
    
    syntax:
    
    useEffect(()=>{},[])
    useEffect() --> hook
    ()=>{} --> callback function
    , [] ---> array de dependencias (SOLO ESTADOS)
    
    */

    const [list, setList] = useState([])
    const [item, setItem] = useState('')
    const [bg, setBg] = useState('')
    const randomId = () => Math.floor(Math.random() * 9999999)



    useEffect(() => {
        console.log('useEffect')
        if (list.length == 0) {
            setList([{ id: randomId(), label: 'Practice!' }])
        }
    }, [])//sin dependencias, se ejecuta una vez al cargarse el componente


    const handleSubmit = e => {
        e.preventDefault();
        setList([...list, { label: item, id: randomId() }])
        setItem('')
    }

    const handleDelete = (id) => {
        let aux = list.filter(el => el.id != id)
        setList(aux)
    }

    const handleDeleteByIndex = (index) => {
        let aux = list.filter((el, i) => i != index)
        setList(aux)
    }


    useEffect(() => {
        console.log('se modifico estado list')
        const colors = ['bg-danger', 'bg-success', 'bg-warning']
        setBg(colors[Math.floor(Math.random() * colors.length)])
    }, [list]) // estado list en dependencia, se ejecuta cada vez que el estado list sea modificado  


    const handleKeyDown = e => {
       if (e.key=='Enter') {
        //enviar
        console.log('le diste al enter!!')
       }
        
    }

    return (
        <div className={bg}>

            <form onSubmit={handleSubmit} >
                <input type="text" value={item} onChange={e => setItem(e.target.value)} onKeyDown={handleKeyDown} />
                <input type="submit" value="add" />
                {/* <input type="submit" value="add"  hidden />  ---> atributo hidden, esconde el elemento html*/}
            </form>
            <ul>
                {/* {list.map(el => <li key={el.id}>{el.label}<span onClick={e=>handleDelete(el.id)} className="bg-danger p-1">X</span></li>)} */}
                {list.map((el, index) => <li key={index}>{el.label}<span onClick={e => handleDeleteByIndex(index)} className="bg-danger p-1">X</span></li>)}

            </ul>
        </div>
    )
}