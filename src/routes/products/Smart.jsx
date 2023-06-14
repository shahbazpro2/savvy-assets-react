import trayfront from '../../assets/images/trayfront.png'
const Smart = () => {
    return (
        <div className='py-20 container'>
            <div className='lg:w-[600px] m-auto text-center space-y-3'>
                <div className="text-4xl font-bold">SA 1SB Smart Block Plastic Pallet</div>
                <div className="text-lg font-bold">
                    Heavyweight Racking – Recycled Plastic
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:py-20 pt-20 gap-14">
                <div className='text-center'>
                    <img src={trayfront} alt='tray' className=' m-auto' />
                </div>
                <div>
                    <div className="text-2xl font-bold">Performance Specifications</div>
                    <table className="mt-5 w-full">
                        <tbody>
                            <tr>
                                <td className='text-[#9D9D9D]'>External Dimensions :</td>
                                <td>1200 x 1000 x 160 mm</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Weight :</td>
                                <td>51 (Lbs)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Dynamic Load :</td>
                                <td>3,700 (Lbs)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Static Load :</td>
                                <td>33,000 (Lbs)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Racking :</td>
                                <td>3,300 (Lbs)</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Material :</td>
                                <td>Recycled HDPE</td>
                            </tr>
                            <tr>
                                <td className='text-[#9D9D9D]'>Battery Life :</td>
                                <td>5 – 8 Years – subject to ping/transmit schedule</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Smart