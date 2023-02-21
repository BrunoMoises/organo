import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome..."
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo..." 
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..."
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.cadastrarTime({ nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    obrigatorio
                    label="Cargo" 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario