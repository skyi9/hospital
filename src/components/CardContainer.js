import React from 'react'
import Card from './Card'
import doctor from './images/doctor.svg'
import patient from './images/patient.svg'
import payment from './images/payment.svg'
import laboratory from './images/laboratory.svg'
import appointments from './images/appointments.svg'
import medicine from './images/medicine.svg'
import bloodBank from './images/bloodBank.svg'
import report from './images/report.svg'
import language from './images/language.svg'


import { Link } from "react-router-dom";

const CardContainer = () => {
    return (
        <div className='container align-items-center my-3'>
            <h1 className='text-center'>Dashboard</h1>
            <div className='row'>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/doctor'> <Card img={doctor} title={'Doctor'} /></Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/laboratory'>
                        <Card img={laboratory} title={'Laboratory'} /> </Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/appointments'> <Card img={appointments} title={'Appointments'} /></Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/patient'> <Card img={patient} title={'Patient'} /> </Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/medicine'> <Card img={medicine} title={'Medicine'} /> </Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/bloodBank'> <Card img={bloodBank} title={'Blood Bank'} /></Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/report'> <Card img={report} title={'Report'} /></Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/transaction'> <Card img={payment} title={'transaction'} /> </Link>
                </div>
                <div className='col-4 my-2'>
                    <Link className='text-decoration-none text-dark mb-0 h1' to='/language'> <Card img={language} title={'Language'} /> </Link>
                </div>
            </div>
        </div>
    )
}

export default CardContainer
