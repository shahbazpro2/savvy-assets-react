import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sales = () => {
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
            <div className="text-center md:w-[600px] m-auto">
                <div className="text-4xl font-bold">Sales Tracking</div>
                <div className="mt-3 text-lg font-bold">Commission Structure = 8% top line revenue of all sales paid monthly for length of 36 month rental term.</div>
            </div>
            <form onSubmit={onSubmit} ref={form}>
                <div className="mt-14  grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-2 col-span-1 md:col-start-2 space-y-5">
                        <div className="text-2xl font-bold mb-10">Sales Contractor</div>
                        <div>
                            <label className='block text-sm font-bold'>First Name</label>
                            <input type="text" name="first_name" required placeholder='First Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Last Name</label>
                            <input type="text" name="last_name" required placeholder='Last Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Email</label>
                            <input type="text" name="email" required placeholder='Email' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Phone</label>
                            <input type="text" name="phone" required placeholder='Phone' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Company Name</label>
                            <input type="text" name="company_name" required placeholder='Savvy-Assets' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>

                        <div>
                            <label className='block text-sm font-bold'>Date</label>
                            <input type='date' name="date" required className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
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

export default Sales