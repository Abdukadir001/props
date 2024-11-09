import React from 'react'
import './Card.scss'

const Card = ({title="Пока не указано", price="Пока не указано", photo="https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.gif"}) => {
    return (
        <>
            <div className="card">
                <img src={photo} alt="" />
                <h3>{title}</h3>
                <p>{price}</p>
                <button>Купить</button>
            </div>
        </>
    )
}

export default Card