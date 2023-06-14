
const Sales = () => {
    return (
        <div className='py-20 container'>
            <div className="text-center md:w-[600px] m-auto">
                <div className="text-4xl font-bold">Sales Tracking</div>
                <div className="mt-3 text-lg font-bold">Commission Structure = 8% top line revenue of all sales paid monthly for length of 36 month rental term.</div>
            </div>
            <div className="mt-14  grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2 col-span-1 md:col-start-2 space-y-5">
                    <div className="text-2xl font-bold mb-10">Sales Contractor</div>
                    <div>
                        <label className='block text-sm font-bold'>First Name</label>
                        <input type="text" placeholder='First Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Last Name</label>
                        <input type="text" placeholder='Last Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Email</label>
                        <input type="text" placeholder='Email' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Phone</label>
                        <input type="text" placeholder='Phone' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Company Name</label>
                        <input type="text" placeholder='Savvy-Assets' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>

                    <div>
                        <label className='block text-sm font-bold'>Date</label>
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

export default Sales