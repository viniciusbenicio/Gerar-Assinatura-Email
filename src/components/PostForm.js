import { Input, Button, Label, Form, Row, Col } from 'reactstrap';
import { useState } from 'react';

import '../styles/PostForm.css';

export default function PostForm(props) {
    const [userName, setUserName] = useState('');
    const [jobRole, setjobRole] = useState('');
    const [contactTel, setcontactTel] = useState('');
    const [contactCel, setcontactCel] = useState('');
    const [email, setEmail] = useState('');
    const [conf, setConf] = useState('');
    const [website, setWebSite] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({ userName, jobRole, email, contactTel, contactCel, conf, website });

        // setUserName('');
        // setjobRole('');
        // setcontactTel('');
        // setcontactCel('');
        // setEmail('');
        // setConf('');
        // setWebSite('');
    }

    return (
        <Form onSubmit={handleSubmit} >
            <div>
                <Row>
                    <Col md={4}>
                        <Label>
                            Nome :
                        </Label>
                        <Input
                            value={userName}
                            placeholder="Digite seu Nome..."
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <Label>
                            Cargo :
                        </Label>
                        <Input
                            value={jobRole}
                            placeholder="Digite seu Cargo..."
                            onChange={(event) => setjobRole(event.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Label>
                            E-mail :
                        </Label>
                        <Input
                            type="email"
                            value={email}
                            placeholder="Digite seu E-mail..."
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <Label>
                            Skype :
                        </Label>

                        <Input
                            value={conf}
                            placeholder="Digite seu Skype ou outro aplicativo de Conferência..."
                            onChange={(event) => setConf(event.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Label>
                            Telefone :
                        </Label>
                        <Input
                            value={contactTel}
                            placeholder="Digite seu Telefone..."
                            onChange={(event) => setcontactTel(event.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <Label>
                            Celular :
                        </Label>
                        <Input
                            value={contactCel}
                            placeholder="Digite seu Celular..."
                            onChange={(event) => setcontactCel(event.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Label>
                            Site :
                        </Label>
                        <Input
                            type="url"
                            value={website}
                            placeholder="Digite seu Site..."
                            onChange={(event) => setWebSite(event.target.value)}
                        />
                    </Col>
                </Row>
            </div>
            <Button color="dark" type="submit" outline>Gerar</Button>
        </Form>
    
    );
}