import { useState } from "react";

import Assinatura  from "../src/components/Assinatura";
import PostForm from "../src/components/PostForm";

export default function Home(){
    const [assinaturas, setAssinaturas] = useState([]);


function handleSubmit({history, userName}){
    setAssinaturas([
        ...assinaturas,
        {
            id: Math.random(),
            content : history,
            userName,
            publishedAt: new Date(),
        }
    ]);
}


    return (
        <>
        
        <PostForm onSubmit={handleSubmit} />
        <main>
            <Assinatura assinaturas={assinaturas}
                        title="aaa"
                        subtitle="aa"
            />
        </main>
        </>
    )

}