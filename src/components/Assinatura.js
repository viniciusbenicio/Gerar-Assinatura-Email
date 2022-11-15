import templateEmail from '../images/mail.png';

import '../styles/Assinatura.css';

export default function Assinatura(props){
    if(props.assinaturas.length === 0){
        return (
            <div>
                <img src={null} alt=""/>
                <h1>Não encontramos nada</h1>
                <h2>Parece que você não criou nenhuma Assinatura...</h2>
            </div>
        );
    }

    return (
        <>
        <header>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </header>

            <section className="">
            {props.assinaturas.map((assinaturas) => (
                <article key={assinaturas.id}>
                    <div className="texto">
                   <img src={templateEmail} alt="logo" />
                     <h3>{assinaturas.userName}</h3>
                     <p>{assinaturas.jobRole}</p>
                     <footer>
                        <h4>{assinaturas.email}</h4>
                        <h5>{assinaturas.contactTel}</h5>
                        <h5>{assinaturas.contactCel}</h5>
                        <h6>{assinaturas.conf}</h6>
                        <h4>{assinaturas.website}</h4>
                     </footer>
                     </div>
                </article>
            ))}
            </section>
        </>
    );
}