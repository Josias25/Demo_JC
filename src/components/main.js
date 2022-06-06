import { NavLink } from 'react-router-dom'

export default function Main(){
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/calculargrados">Calcula los grados</NavLink>
                </li>
                <li>
                    <NavLink to="/formulariolaboral">Formulario Laboral</NavLink>
                </li>
                <li>
                    <NavLink to="/operacionesmate">Realiza operaciones</NavLink>
                </li>
            </ul>
        </div>
    )
}
