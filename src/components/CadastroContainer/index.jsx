import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import Botao from '../Botao'
export default function CadastroContainer() {
    return (<div className={styles.containerCadastro}>
        <div className={styles.subcontainerPrincipal}>
            <h1>Crie sua conta</h1>
            <p className={styles.conviteAoCadastramento1}>Já possui uma conta? Entre <u>aqui</u>.</p>
            <p className={styles.emailComAsterisco}>Email *</p>
            <input type="text" className={styles.campoDeDigitacaoDoEmail} placeholder='Insira seu email' />
            <Botao cor={'white'} corFundo={'#C92071'} largura={'255px'} altura={'48px'} texto={'Criar Conta'} />
        </div>
        <div className={styles.subcontainerSecundario}>
            <p className={styles.conviteAoCadastramento2}>Ou faça login com</p> 
            {/* <img src={faceLogo} alt="logo facebook" /> */}
        </div>  
    </div>) 
}                                                                               