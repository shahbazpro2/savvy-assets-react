import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
const Footer = () => {
    return (
        <div className='bg-secondary text-white'>
            <div className="container">
                <div className="grid grid-cols-12 lg:gap-10 py-5 lg:py-0">
                    <div className="col-span-12 lg:col-span-4 bg-[#3A3A3F] p-5 flex justify-center flex-col items-center ">
                        <img src={Logo} alt="logo" className='lg:w-[200px]' />
                        <div className="mt-3">
                            Knowledgeable Asset Rental Solutions
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 flex flex-col items-center justify-center ">
                        <div className="py-7 border-b border-[#515151] flex items-center justify-center w-full">
                            <ul className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
                                <Link to="/resources">
                                    <li className='text-lg'>Resources</li>
                                </Link>
                                <Link to="/rental">
                                    <li className='text-lg'>Rental Application</li>
                                </Link>
                                <Link to="/sales">
                                    <li className='text-lg'>Sales Tracking</li>
                                </Link>
                                <Link to="/contact">
                                    <li className='text-lg'>Contact</li>
                                </Link>

                            </ul>
                        </div>
                        <div className='text-sm mt-7 text-[#838383]'>
                            Copyright © {new Date().getFullYear()} Savvy Assets Inc. All rights reserved
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer