import React from "react";

export const Product = () => {
    const products = {
        porsche: { name: "Porsche-Diesel Master 419", img: "porsche.svg" },
        fendt: { name: "Fendt F20 Dieselroß", img: "fendt.svg" },
        eicher: { name: "Eicher Diesel 215/16", img: "eicher.svg" }
    };

    const name = products.porsche.name;
    const img = products.porsche.img;

    return (
        <div>
            <h1>{name}</h1>
            <img src={`https://mi-fr.org/img/${img}`} width="200" />
        </div>
    );
};