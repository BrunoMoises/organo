import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.6'), backgroundImage: 'url(/imagens/fundo.png)' }

    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <input value={props.corSecundaria} onChange={e => props.mudarCor(e.target.value, props.nome)} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador
                        corDeFundo={props.cor}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={props.aoDeletar}
                    />;
                })}
            </div>
        </section>
    )
}

export default Time