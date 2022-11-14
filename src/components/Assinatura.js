


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
                     <p>{assinaturas.userName}</p>
                     <footer>
                     <div className="">
                     <img src={null} alt="" />
                     <p>{assinaturas.jobRole}</p>
                        <strong>{assinaturas.email}</strong>
                        </div>
                        <div className="">
                        <img src={null} alt="" />
                    </div>
                     </footer>
                </article>
            ))}
            </section>
        </>
    );
}