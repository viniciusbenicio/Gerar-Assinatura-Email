import { useState } from 'react';

export default function PostForm (props){
    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');


    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit({history, userName});

        setHistory('');
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
            value={history}
            placeholder="Criando uma nova Assinatura..."
            onChange={(event) => setHistory(event.target.value)}
            />
            <div>
                <img src={null} alt="User" />
                <input 
                value={userName}
                placeholder="Digite seu nome..."
                onChange={(event) => setUserName(event.target.value)}
                />

                <button type="submit">
                    <img src={null} alt="Paper Planne" />
                    Publicar
                </button>
            </div>
            
        </form>
    );
}