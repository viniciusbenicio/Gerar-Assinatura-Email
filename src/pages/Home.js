import { useState } from 'react';
import Assinatura  from '../components/Assinatura';
import PostForm from '../components/PostForm';

export default function Home(){
    const [assinaturas, setAssinaturas] = useState([]);


function handleSubmit({userName, jobRole, email, conf, contactTel, contactCel,website}){
    setAssinaturas([
        ...assinaturas,
        {
            id: Math.random(),
            userName,
            jobRole,
            email,
            conf,
            contactTel,
            contactCel,
            website,
        }
    ]);
}


    return (
        <>
        <PostForm onSubmit={handleSubmit} />
        <main>
            <Assinatura assinaturas={assinaturas}
                        title="Assinatura de E-mail."
                        subtitle="Legal, temos uma assinatura de E-mail no estilo profissional..."
            />
        </main>
        </>
    )
}