import React from 'react'
import PatientsCard from './PatientsCard'
import patient1 from '../images/patient1.webp'
import patient2 from '../images/patient2.jpg'
import patient4 from '../images/patient4.webp'
import patient5 from '../images/patient5.jpg'
import patient9 from '../images/patient9.jpg'
import patientF3 from '../images/patientF3.jpg'
import patientF6 from '../images/patientF6.webp'
import patientF7 from '../images/patientF7.jpg'
import patientF8 from '../images/patientF8.jpg'

const PatientsContainer = () => {
    return (
        <>
            <div className="container my-4">

                <div className="row">
                    <div className="col-md-4">
                        <PatientsCard img={patient1} name={'Roger Curtis'} age={'32'} gender={'Male'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patientF3} name={'Lois Lane'} age={'28'} gender={'Female'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patient2} name={'Olive Yew'} age={'46'} gender={'Male'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patient4} name={'Ben Dover'} age={'41'} gender={'Male'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patientF6} name={'Anne Ortha'} age={'49'} gender={'Female'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patientF7} name={'Clyde Stale'} age={'26'} gender={'Female'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patient9} name={'Tim Buyers'} age={'36'} gender={'Male'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patient5} name={'Stefan Grate'} age={'52'} gender={'Male'} />
                    </div>
                    <div className="col-md-4">
                        <PatientsCard img={patientF8} name={'Percy Vere'} age={'30'} gender={'Female'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientsContainer
