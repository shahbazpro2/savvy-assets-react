import truck from '../../assets/icons/truck.png'
import search from '../../assets/icons/search.png'
import dashboard from '../../assets/icons/dashboard.png'
import tick from '../../assets/icons/tick.png'
import linegraph from '../../assets/icons/linegraph.png'
import avatar from '../../assets/icons/avatar.png'
import frame1 from '../../assets/icons/frame1.png'
import disk from '../../assets/icons/disk.png'
import danger from '../../assets/icons/danger.png'

const DigitizeMore = () => {
    return (
        <div className='md:py-20 py-10 bg-light w-full'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 md:py-20 gap-14">
                    <div className='text-center'>
                        <img src={truck} alt='truck' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Move </div>
                        <div className="text-sm">
                            Savvy Assets pallet fleet provides robust shipping platforms for the most demanding shipment and storage requirements. The reuse of durable pallets provides shippers with a consistent footprint for efficient operations
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={search} alt='search' className='w-[65px] m-auto' />
                        <div className="text-lg font-bold mt-3">Monitor</div>
                        <div className="text-sm">
                            Savvy Assets combines the latest tracking IOT technologies that have cellular, Wi-FI, bluetooth, QR Code, RFID capabilities to monitor every movement
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={dashboard} alt='dashboard' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Optimize</div>
                        <div className="text-sm">
                            The Savvy Assets IOT platform provides a comprehensive dashboard that monitors movement, KPI reports and alert settings in real time. Manual inventory processes of stock levels, storage costs, transport cost and equipment cost can be digitally automated.
                        </div>
                    </div>

                </div>
                <div className="border border-l-0 border-r-0 py-5 md:py-10 mt-10 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className='flex justify-center border-b sm:border-b-0 sm:border-r py-5'>
                            <ul className='space-y-3'>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Reduce stock levels</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Reduce warehouse space</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Reduce transport costs</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Reduce carbon footprint</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='flex justify-center'>
                            <ul className='space-y-3'>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Eliminate equipment loss</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Increase on time delivery</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Increase on shelf availability</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3">
                                        <img src={tick} alt="tick" className='w-[15px]' />
                                        <div>Increase sales</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 py-20 gap-14">
                    <div className='text-center'>
                        <img src={linegraph} alt='linegraph' className='w-[80px] m-auto' />
                        <div className="text-lg font-bold mt-3">Data presentation </div>
                    </div>
                    <div className='text-center'>
                        <img src={avatar} alt='avatar' className='w-[65px] m-auto' />
                        <div className="text-lg font-bold mt-3">KPIS</div>
                    </div>
                    <div className='text-center'>
                        <img src={frame1} alt='frame' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Dashboards</div>

                    </div>
                    <div className='text-center'>
                        <img src={disk} alt='disk' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Plastic pallet pooling</div>
                    </div>
                    <div className='text-center'>
                        <img src={danger} alt='danger' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Alerts</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitizeMore