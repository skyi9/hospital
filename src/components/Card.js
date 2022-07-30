import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                </div>
            </div>
        </>
    )
}

export default Card
