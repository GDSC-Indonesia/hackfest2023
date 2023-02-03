import React from 'react'

export default function Navbar() {
  return (
    <section className='bg-white sticky top-0 left-0'>
        <div className='flex border-y-[2px] border-black justify-start items-center relative'>
            <div className='pl-[60px] pr-[50px]'>
                <h6>Logo</h6>
            </div>
            <div className='absolute lg:static top-0 right-0 h-screen lg:h-fit bg-white lg:bg-transparent lg:w-full'>
                <div className='flex justify-between items-center flex-col lg:flex-row'>
                    <ul className='flex space-x-0 lg:space-x-[50px] flex-col lg:flex-row'>
                        <li>
                            <a href="" className='font-gooReg'>About</a>
                        </li>
                        <li>
                            <a href="" className='font-gooReg'>Events</a>
                        </li>
                        <li>
                            <a href="" className='font-gooReg'>Timeline</a>
                        </li>
                        <li>
                            <a href="" className='font-gooReg'>Prizes</a>
                        </li>
                        <li>
                            <a href="" className='font-gooReg'>FAQ</a>
                        </li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row'>
                        <li>
                            <a href="#" className='inline-block text-black font-gooReg py-[20px] px-[40px] hover:bg-gooYellow-800 hover:text-black transition-all border-y-2 lg:border-y-0 lg:border-x-2 border-black w-full lg:w-fit text-center'>Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block bg-black text-white font-gooReg py-[20px] px-[40px] hover:bg-gooYellow-800 hover:text-black transition-all w-full lg:w-fit text-center'>Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
