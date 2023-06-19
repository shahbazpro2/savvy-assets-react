import { useRef } from 'react';
import pin from '../../assets/icons/pin.png'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const form = useRef();
    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qb9fjpq', 'template_j0l5wed', form.current, 'MKUm7GoVqoMVYERBG')
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
                <div className="text-4xl font-bold">Contact</div>
            </div>
            <form onSubmit={onSubmit} ref={form}>
                <div className="flex justify-center mt-14">
                    <div className="md:w-[90%] shadow-lg rounded-lg md:p-10 p-5">
                        <div className=" grid grid-cols-1 md:grid-cols-5 gap-14">
                            <div className="md:col-span-3 space-y-5">
                                <div className="text-2xl font-bold">Get In Touch.</div>
                                <div className="mt-2 text-sm mb-10">Consistent routines, rituals and structures help children feel safe. They can lean on these and rely on them. Yet most children are.</div>
                                <div>
                                    <label className='block text-sm font-bold'>Full Name</label>
                                    <input type="text" name="full_name" required placeholder='Name' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
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
                                    <label className='block text-sm font-bold'>Comment</label>
                                    <textarea rows={4} name="comment" required type="text" placeholder='Type your comment' className='w-full mt-2 bg-primary-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                                </div>
                                <div>
                                    <button className='btn'>Submit</button>
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-5">
                                <div className="flex gap-5 md:mt-28">
                                    <div className="bg-primary rounded-lg w-16 h-20 flex items-center">
                                        <img src={pin} alt="pin" className='w-[30px] m-auto' />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold">Address</div>
                                        <div className="mt-1 text-[#9D9D9D]">16192 Coastal Hwy, Lewes, DE 19958</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Contact