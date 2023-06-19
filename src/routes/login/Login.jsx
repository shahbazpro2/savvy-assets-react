
const Login = () => {
    return (
        <div className='py-20 container'>
            <div className="flex flex-col justify-center items-center">
                <div className="md:w-[50%] w-full mb-32">
                    <div className="text-4xl font-bold">Login</div>
                    <div className='mt-5'>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className='border border-[#515151] p-2' />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" className='border border-[#515151] p-2' />
                            </div>
                            <div className="flex justify-center">
                                <button className='bg-[#FFD600] text-black py-2 px-5 rounded-md'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login