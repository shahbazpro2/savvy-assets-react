import diamonds from '../../assets/images/diamonds.png'
import pattle from '../../assets/images/pattle.png'
const Smart2 = () => {
    return (
        <div className='py-20 container'>
            <div className='lg:w-[600px] m-auto text-center space-y-3'>
                <div className="text-4xl font-bold">SA 1SN Smart Nestable Plastic Pallet</div>
                <div className="text-lg font-bold">
                    Heavyweight Nestable – Recycled Plastic
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 py-20 gap-14">

                <div className='lg:col-span-3'>
                    <div className="text-2xl font-bold">Performance Specifications</div>
                    <table className="mt-5 w-full">
                        <tbody>
                            <tr>
                                <td className='text-[#9D9D9D]'>External Dimensions :</td>
                                <td>1200 X 1000 X 133 (mm)</td>
                                <td>48 X 40 X 5.25 (in)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Weight :</td>
                                <td>17 (Kg)</td>
                                <td>39 (Lbs)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Dynamic Load :</td>
                                <td>1,587 (Kg)</td>
                                <td>3,500 (Lbs)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Static Load :</td>
                                <td>9,071 (Kg)</td>
                                <td>20,000 (Lbs)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Racking :</td>
                                <td>NA</td>
                                <td>NA</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Material :</td>
                                <td>HDPE recycled</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Battery Life :</td>
                                <td>5 – 10 Years – subject to ping/transmit schedule</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='lg:col-span-2 text-center'>
                    <div className="absolute right-0 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={pattle} alt='pattle' className=' m-auto' />
                </div>
            </div>
        </div>
    )
}

export default Smart2