import './button.css'
const alertClick = () => {
    alert("A label desse botão é Baixar CV")
}

const Button = ({label= 'Baixar CV'}) => {
    return <button className="btn" onClick={alertClick}>{label}</button>
}
export default Button