import React from 'react'

const BankCard = (props) => {
    return (
        <>
            <div className="container">
                <div className="card bg-light my-4" >
                    <div className="card-body overflow-hidden">
                        <h5 className="card-title">{props.title} &rarr; <strong>{props.group}</strong></h5>
                        <p>Available: {props.available}</p>
                        <button className="btn btn-outline-primary me-3 " type="submit">Request Blood</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankCard
