import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Rental = () => {
    const form = useRef();
    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qb9fjpq', 'template_jzohe6f', form.current, 'MKUm7GoVqoMVYERBG')
            .then((result) => {
                toast.success("We will get back to you soon!");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='py-20 container'>
            <div className="text-center">
                <div className="text-4xl font-bold">Rental Application</div>
            </div>
            <form onSubmit={onSubmit} ref={form}>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-2 col-span-1 md:col-start-2 space-y-5">
                        <div>
                            <label className='block text-sm font-bold'>Company Name</label>
                            <input type="text" name="company_name" required placeholder='Company name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Contact First Name</label>
                            <input type="text" name="first_name" required placeholder='First Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Contact Last Name</label>
                            <input type="text" name="last_name" required placeholder='Last Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Contact Email</label>
                            <input type="text" name="email" required placeholder='Email' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Contact Phone</label>
                            <input type="text" name="phone" placeholder='Phone' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Contact Address</label>
                            <input type="text" name="address" placeholder='Address' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Asset Rental SKU</label>
                            <input type="text" name="rental_sku" placeholder='Rental SKU' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Asset Rental Quantity</label>
                            <input type="text" name="rental_quantity" placeholder='Quantity' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Contact Delivery Address</label>
                            <input type="text" name="delivery_address" placeholder='Delivery Address' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Requested Delivery Date</label>
                            <input type='date' name="requested_delivery_date" className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <button className='btn'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Rental