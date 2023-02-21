import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    const css = { backgroundColor: hexToRgba(time.cor, '0.6'), backgroundImage: 'url(/imagens/fundo.png)' }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <input value={time.cor} onChange={e => mudarCor(e.target.value, time.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                        corDeFundo={time.cor}
                        key={indice}
                        colaborador={colaborador}
                        aoDeletar={aoDeletar}
                    />;
                })}
            </div>
        </section>
    )
}

export default Time