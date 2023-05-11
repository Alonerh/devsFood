import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Titulo } from './styled';
import { setName } from '../../redux/reducers/userReducer';

export default () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const name = useSelector((state) => state.name)
    

    let { nome } = useParams();


    const handleTextChange = (e) => {
        dispatch(setName(e.target.value))
    }

    return (
        <Container>
            <Titulo>Tela2 de {nome}</Titulo>

            <input type="text" value={name} onChange={handleTextChange} />

            <button onClick={()=>navigate(-1)}>Voltar</button>
        </Container>
    );
}