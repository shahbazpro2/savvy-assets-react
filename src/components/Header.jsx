import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/icons/logo.png'




const links = [
    { name: 'About', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Platform', path: '/platform' },
    { name: 'Pricing', path: '/pricing' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Header = () => {
    const { pathname } = useLocation()
    console.log('location', pathname)
    return (
        <>

            <div className='container'>
                <Disclosure as="nav">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-7">
                                <div className="relative flex h-16 items-center justify-between">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        {/* Mobile menu button*/}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between py-5">
                                        <div className='sm:w-[100px] lg:w-[150px] flex sm:block justify-center lg:justify-start'>
                                            <img src={Logo} alt="logo" className='w-full' />
                                        </div>
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4 items-center h-full">
                                                {links.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        className={classNames(
                                                            pathname === item.path ? ' text-primary' : 'text-black hover:text-primary ',
                                                            'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:flex hidden">
                                            <div>
                                                <button className="btn">Login</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden bg-white rounded-lg">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {links.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as={Link}
                                            to={item.path}
                                            className={classNames(
                                                pathname === item.path ? ' text-primary' : 'text-black hover:text-primary',
                                                'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                    <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <div>
                                            <button className="btn">Login</button>
                                        </div>

                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div >

        </>
    )
}

export default Header