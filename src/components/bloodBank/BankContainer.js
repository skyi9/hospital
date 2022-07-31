import React from 'react'
import { Link } from 'react-router-dom'
import BankCard from './BankCard'

const BankContainer = () => {
    return (
        <>
            <div className='container my-3'>
                <div className="input-group my-5">
                    <span className="input-group-text" id="inputGroup-sizing-default">Blood Group </span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <button className='float-end text-bold' style={{ width: '4rem' }}>Search</button>
                </div>
                <div className="row">
                    <div className='col-4 my-2'>
                        <Link className='text-decoration-none text-dark mb-0 h1' to='/bloodbank'>
                            <BankCard title={'City Hospital'} available={'130ml'} group={'B+'} />  </Link>
                    </div>
                    <div className='col-4 my-2'>
                        <Link className='text-decoration-none text-dark mb-0 h1' to='/bloodbank'>
                            <BankCard title={'City Hospital'} available={'100ml'} group={'A+'} />  </Link>
                    </div>
                    <div className='col-4 my-2'>
                        <Link className='text-decoration-none text-dark mb-0 h1' to='/bloodbank'>
                            <BankCard title={'City Hospital'} available={'400ml'} group={'A-'} />  </Link>
                    </div>
                    <div className='col-4 my-2'>
                        <Link className='text-decoration-none text-dark mb-0 h1' to='/bloodbank'>
                            <BankCard title={'City Hospital'} available={'200ml'} group={'AB+'} />  </Link>
                    </div>
                    <div className='col-4 my-2'>
                        <Link className='text-decoration-none text-dark mb-0 h1' to='/bloodbank'>
                            <BankCard title={'City Hospital'} available={'320ml'} group={'O-'} />  </Link>
                    </div>
                    <div className='col-4 my-2'>
                        <Link className='text-decoration-none text-dark mb-0 h1' to='/bloodbank'>
                            <BankCard title={'City Hospital'} available={'700ml'} group={'O+'} />  </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankContainer
