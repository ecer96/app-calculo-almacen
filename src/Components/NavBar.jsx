import React from 'react'

export const NavBar = () => {
  return (
    <div>
        <nav className='bg-orange-400 flex  h-20 items-center justify-between'>
            <a href='/'><img src={require('../Assets/casa.png')} alt='logo' className='h-10 invert ml-5'></img></a>
            <div>

            <a href='/' className='capitalize text-white  p-4'>How we work</a>
            <a href='/' className='capitalize text-white  p-4'>Services</a>
            <a href='/' className='capitalize text-white  p-4'>Free Quote</a>
            <a href='/' className='capitalize text-white  p-4'>Contact</a>
            </div>
        </nav>
    </div>
  )
}
