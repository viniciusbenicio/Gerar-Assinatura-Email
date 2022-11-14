import Assinatura from "../components/Assinatura";

export default function YourSignature(){
    const assinaturas = [
        {
            id: Math.random(),
            userName: 'Vinicius',
            jobRole: 'Analista de Sistemas',
            email: 'vinicius.benicio97@gmail.com',
        }
    ];

    return (
        <main>
            <Assinatura assinaturas={assinaturas}
                        title="Assinatura de E-mail..."
                        subtitle="Suas assinaturas de e-mail criadas..."
            />
        </main>
    );
}
