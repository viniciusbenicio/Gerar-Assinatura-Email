import Assinatura from "../components/Assinatura";

export default function MostViewed(){
    const assinaturas = [
        {
            id: Math.random(),
            content: 'Content',
            userName: 'Vinicius',
            publishedAt: new Date(),
        }
    ];

    return (
        <main>
            <Assinatura assinaturas={assinaturas}
                        title="aaaa"
                        subtitle="aaaaaaa"
            />
        </main>
    );
}
