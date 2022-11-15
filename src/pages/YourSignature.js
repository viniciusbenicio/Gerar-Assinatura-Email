import Assinatura from "../components/Assinatura";

export default function YourSignature(){
    const assinaturas = [
        {
            id: Math.random(),
            userName: 'Vinicius Benicio de Santana',
            jobRole: 'Analista de Sistemas',
            email: 'vinicius.benicio97@gmail.com',
            contactTel: '(11) 4002-8922',
            contactCel: '(11) 95235-55735',
            conf: 'viniciusbenicio',
            website: 'www.vinicius.com.br',
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
