import React from 'react'
import DocterCard from './DocterCard'
import doctor1 from '../images/doctor1.jpg'
import doctor2 from '../images/doctor2.webp'
import doctor3 from '../images/doctor3.png'
import doctor4 from '../images/doctor4.jpg'
import doctor5 from '../images/doctor5.jpg'
import doctor6 from '../images/doctor6.jpg'


const DoctorContainer = () => {


    return (
        <div className='container my-4'>
            <div className='row'>
                <div className="col-md-4">
                    <DocterCard img={doctor1} name={'Dr. Mark hall'} location={'2168 ,Shattuck Avenue'} specialist={'Dermatalogists'} />
                </div>
                <div className="col-md-4">
                    <DocterCard img={doctor2} name={'Dr. Victoria Jefferson'} location={'4900 pearl E cir , bouldar'} specialist={'Oncologists'} />
                </div>
                <div className="col-md-4">
                    <DocterCard img={doctor3} name={'Dr. Jim Parsons'} location={'5 , way side road , burlington'} specialist={'Cardiologists'} />
                </div>
                <div className="col-md-4">
                    <DocterCard img={doctor4} name={'Dr. Sam Weizak'} location={'567 , la place port , carlsbad'} specialist={'Gastaronaterologists'} />
                </div>
                <div className="col-md-4">
                    <DocterCard img={doctor5} name={'Dr. Sarah Lynch'} location={'426 , w , randolf street , chicago'} specialist={'Neurologists'} />
                </div>
                <div className="col-md-4">
                    <DocterCard img={doctor6} name={'Dr. Andrew Manson'} location={'701 , pike street  , seattle'} specialist={'Dermatalogists'} />
                </div>
            </div>
        </div>
    )
}

export default DoctorContainer
