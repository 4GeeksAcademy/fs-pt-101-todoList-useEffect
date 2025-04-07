import React, { useState } from "react";

//SPA --> Single Page Application --> Aplicacion de una sola pagina

export const SignUp = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [data, setData] = useState([])

    const handleChange = (evento) => {
        console.log(evento)
        //setFormData({ ...formData, [evento.target.name]: evento.target.value })
        //desestructurar el evento:
        const { name, value } = evento.target
        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = e => {
        e.preventDefault() // evita que se recarge la pagina
        setData([...data, formData])
        setFormData({
            email: '',
            password: ''
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" value={formData.email} name="email" onChange={handleChange} />
                <input type="password" name="password" minLength={8} maxLength={20} value={formData.password} onChange={handleChange} />
                <input type="submit" value={'signup'} />
            </form>
            <ul>

                {data.map((el, i) => <li key={i}>{el.email}</li>)}
            </ul>

        </div>
    )
}