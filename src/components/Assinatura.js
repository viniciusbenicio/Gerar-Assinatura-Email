import TemplateEmail from '../images/TemplateEmail.png';

import '../styles/Assinatura.css';

export default function Assinatura(props){
    if(props.assinaturas.length === 0){
        return (
            <div>
                <img src={null} alt=""/>
                <h1>Não encontramos nada</h1>
                <h2>Parece que você não criou sua Assinatura...</h2>
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
            {
            props.assinaturas.map((assinaturas) => 
            (                
            <article key={assinaturas.id}>
            <div className="texto">
                <img src={TemplateEmail} alt="Template do E-mail" />
                <h1>{assinaturas.userName}</h1>
                <h2>{assinaturas.jobRole}</h2>
                <footer>
                 <h3>{assinaturas.contactTel}</h3>
                 <h4>{assinaturas.contactCel}</h4>
                 <h5>{assinaturas.email}</h5>
                 <h6>{assinaturas.conf}</h6>
                 <h7>{assinaturas.website}</h7>
                </footer>
                </div>
                </article>
            ))}
            </section>
        </>
    );
}