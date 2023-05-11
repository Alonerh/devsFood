import React from "react";
import { LinkArea, LinkIcon } from './styled';
import { useNavigate, useLocation } from 'react-router-dom';


export const MenuItem = ({icon, link})=>{

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === link;


    const handleLinkClick = (e)=>{
        e.preventDefault();
        navigate(link);
    }

    return (
        <LinkArea href={link} onClick={handleLinkClick} active={isActive}>
            <LinkIcon src={icon}/>
        </LinkArea>
    );
};

export default MenuItem;