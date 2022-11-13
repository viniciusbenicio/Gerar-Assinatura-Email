


export default function Assinatura(props){
    if(props.assinaturas.length === 0){
        return (
            <div>
                <img src={null} alt="AAAAAAA SEM NADA"/>
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
                     <p>{assinaturas.content}</p>
                     <footer>
                     <div className="user-details">
                     <img src={null} alt="User" />
                        <strong>{assinaturas.userName}</strong>
                        </div>
                        <div className="time">
                        <img src={null} alt="Clock" />
                        <span>{assinaturas.publishedAt.toLocaleDateString('pt-br')}</span>
                    </div>
                     </footer>
                </article>
            ))}
            </section>
        </>
    );
}