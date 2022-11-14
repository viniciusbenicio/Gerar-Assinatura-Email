import { useState } from 'react';

export default function PostForm (props){
    const [userName, setUserName] = useState('');
    const [jobRole,setjobRole] = useState('');
   // const [contactTel,setcontactTel] = useState('');
   // const [contactCel,setcontactCel] = useState('');
    const [email, setEmail] = useState('');
   // const [conf,setConf] = useState('');
   // const [website,setWebSite] = useState('');


    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit({userName, jobRole, email});

        // setUserName('');
        // setEmail('');
        
    }

    return (
        <form onSubmit={handleSubmit} >
            
            <div>
                <img src={null} alt="" />
                <input 
                value={userName}
                placeholder="Digite seu Nome..."
                onChange={(event) => setUserName(event.target.value)}
                />
                <input
                value={jobRole}
                placeholder="Digite seu Cargo..."
                onChange={(event) => setjobRole(event.target.value)}
                />
                <input
                value={email}
                placeholder="Digite seu E-mail..."
                onChange={(event) => setEmail(event.target.value)}
                />

                <button type="submit">
                    <img src={null} alt="" />
                    Gerar
                </button>
            </div>
            
        </form>
    );
}