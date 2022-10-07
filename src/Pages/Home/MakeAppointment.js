import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center rounded-lg'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="doctor" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold py-2'>Appointment</h3>
                <h2 className='text-3xl text-white  py-2'>Make an Appointment Today</h2>
                <p className='text-white  py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quis corporis quo fugit obcaecati sequi voluptatum blanditiis, aliquam eligendi, ex doloribus eaque ipsam optio est odio minus ducimus, cupiditate nisi.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;