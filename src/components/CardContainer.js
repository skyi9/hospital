import React from 'react'
import Card from './Card'
import doctor from '../images/doctor.svg'
import patient from '../images/patient.svg'
import payment from '../images/payment.svg'

const CardContainer = () => {
    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col-4'>
                    <Card img={doctor} title={'doctor'} />

                </div>
                <div className='col-4'>
                    <Card img={patient} title={'patient'} />

                </div>
                <div className='col-4'>
                    <Card img={payment} title={'transaction'} />

                </div>
            </div>
        </div>
    )
}

export default CardContainer
