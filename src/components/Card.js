import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="container">
                <div className="card" >
                    <img src={props.img} style={{ height: '9rem' }} className="card-img-top" alt="..." />
                    <div className="card-body overflow-hidden">
                        <h5 className="card-title text-center">{props.title}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
