// import Logo from '../images/logo.png';
// import user from '../images/user.png';
// import password from '../images/password.png'

import '../styles/Gerar.css';

export default function Login(){
    return (
        <div className="wrapper">
        <form className="" onSubmit={null}>
            <div className="">
            <label>Nome: </label>
            <input 
            value={null}
            placeholder="Digite seu Nome..."
            onChange={null}
            />
            <label>E-mail: </label>
            <input 
            value={null}
            placeholder="Digite seu E-mail..."
            onChange={null}
            />
            
            <button type="submit">
                LOGAR
            </button>
            </div>
            
        </form>
        </div>
    );    
}