/*
    <div>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        <span>6,</span>
        <span>7,</span>
        <span>8,</span>
        <span>9,</span>
        <span>10,</span>
    </div>
*/
import React from 'react'

function gerarLista(final = 10) {
    return Array(final).fill(0).map((_, i) => <span key={i}>{i},</span>);
}

export default function lista1() {
    return (
        <div>
            {gerarLista(10)}
        </div>
    )
}