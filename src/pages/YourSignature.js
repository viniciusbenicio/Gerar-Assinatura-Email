import Assinatura from "../components/Assinatura";

export default function YourSignature(){
    const assinaturas = [
        {
            id: Math.random(),
            userName: 'Vinícius Benício de Santana',
            jobRole: 'Desevolvedor Full Stack',
            email: 'vinicius.benicio97@gmail.com',
            contactTel: '+55 11 4002-8922',
            contactCel: '+55 11 95235-55735',
            website: 'www.vinicius.com.br',
        },
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
