import React, { useState } from "react";

//SPA --> Single Page Application --> Aplicacion de una sola pagina

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    const handleChange = (evento) => {
        console.log(evento.target.value)
        setEmail(evento.target.value)
    }

    const reg = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

    const handleSubmit = e => {
        e.preventDefault() // evita que se recarge la pagina
        if (!email.match(reg)) {
            return setError(true)
        }
        setData([...data, { email, password }])
        setEmail('');
        setPassword('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" className={`${error ? 'border border-warning' : ''}`} value={email} onChange={handleChange} />
                {error && <span className="bg-danger">error</span>}
                <input type="password" minLength={8} maxLength={20} value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value={'login'} />
            </form>
            <ul>

                {data.map((el, i) => <li key={i}>{el.email}</li>)}
            </ul>

        </div>
    )
}