import React from "react";

export default function Saludar(props) {
    
    return (
        <div>
            <h2>hola {props.userInfo.nombre} y tu edad es {props.userInfo.edad} y tu color favorito es {props.userInfo.color} </h2>
        </div>
    );
}