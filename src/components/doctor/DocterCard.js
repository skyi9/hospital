import React from 'react'


const DocterCard = (props) => {
    return (
        <>
            <div className="card my-3">
                <img src={props.img} style={{ height: '25rem', objectFit: 'cover' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center mb-0 h3 mb-3">{props.name}</h5>
                    <p className="card-text fs-5 mb-1" >Location - {props.location}</p>
                    <p className='fs-5'>Specialist - {props.specialist}</p>
                </div>
            </div>
        </>
    )
}

export default DocterCard
