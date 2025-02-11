import './index.css'

const Button = ({ label = 'Baixar CV' }) => {
    return <button className="btn" onClick={() => alert('A label desse botão é Baixar CV')}>{label}</button>
}
export default Button