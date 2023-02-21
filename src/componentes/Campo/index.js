import './Campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterar, obrigatorio = false }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={e => aoAlterar(e.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder} 
            />
        </div>
    )
}

export default Campo