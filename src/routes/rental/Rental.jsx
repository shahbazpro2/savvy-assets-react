
const Rental = () => {
    return (
        <div className='py-20 container'>
            <div className="text-center">
                <div className="text-4xl font-bold">Rental Application</div>
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2 col-span-1 md:col-start-2 space-y-5">
                    <div>
                        <label className='block text-sm font-bold'>Company Name</label>
                        <input type="text" placeholder='Company name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Contact First Name</label>
                        <input type="text" placeholder='First Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Contact Last Name</label>
                        <input type="text" placeholder='Last Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Contact Email</label>
                        <input type="text" placeholder='Email' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Contact Phone</label>
                        <input type="text" placeholder='Phone' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Contact Address</label>
                        <input type="text" placeholder='Address' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Asset Rental SKU</label>
                        <input type="text" placeholder='Rental SKU' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Asset Rental Quantity</label>
                        <input type="text" placeholder='Quantity' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Contact Delivery Address</label>
                        <input type="text" placeholder='Delivery Address' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Requested Delivery Date</label>
                        <input type='date' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <button className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rental