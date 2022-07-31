import React from 'react'

const PatientsCard = (props) => {
  return (
    <>
      <div className="card my-2">
        <img src={props.img} style={{ height: '250px', width: '250px', backgroundSize: 'cover', display: 'block', borderRadius: '50%', marginLeft: '5rem', marginTop: '1rem' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center mb-0 h3 mb-2">{props.name}</h5>
          <p className="card-text fs-5 mb-1" >Age: {props.age}</p>
          <p className='fs-5 mb-1'>Gender: {props.gender}</p>
          <a href="/" className="btn btn-success float-end">More Info</a>
        </div>
      </div>
    </>
  )
}

export default PatientsCard
