
import tool from '../../assets/icons/tool.png'
import teacher from '../../assets/icons/teacher.png'
import loc from '../../assets/icons/loc.png'
import task from '../../assets/icons/task.png'
import tick from '../../assets/icons/tick.png'
import trayfront from '../../assets/images/trayfront.png'

const Trace = () => {
    return (
        <div className='py-20 container'>
            <div className='md:w-[600px] m-auto text-center space-y-3'>
                <div className="text-4xl font-bold">Traceability and Transparency Turn Key Systems</div>
                <div className="text-lg">
                    Zero Infrastructure Cost / No Hardware Required - Real time monitoring of asset journey and product performance from an advanced software platform connected to powered devices within products.
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-20 gap-7">
                <div className='text-center'>
                    <img src={tool} alt='tool' className='w-[70px] m-auto' />
                    <div className="text-lg mt-3">Complete supply chain transparency on pallet level.</div>
                </div>
                <div className='text-center'>
                    <img src={teacher} alt='teacher' className='w-[70px] m-auto' />
                    <div className="text-lg mt-3">Utilize data driven decisions for optimal inventory decisions.</div>
                </div>
                <div className='text-center'>
                    <img src={loc} alt='loc' className='w-[70px] m-auto' />
                    <div className="text-lg mt-3">Know where all assets are located and conditional history</div>
                </div>
                <div className='text-center'>
                    <img src={task} alt='task' className='w-[70px] m-auto' />
                    <div className="text-lg mt-3">Automated auditing, traceability reports and simplified regulatory compliance controls.</div>
                </div>
            </div>
            <div className=" py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-start flex-col">
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className="text-lg font-bold">Data Driven Real Time Decisions</div>
                            <ul className='space-y-3 mt-5'>
                                <li className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        Set monitoring and alert parameters  for temperature, location and shock.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        Automated management of inventory and shipment tracking
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        Gain visibility into supply chain bottlenecks
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className="text-lg font-bold">Track Assets and Product Conditions</div>
                            <ul className='space-y-3 mt-5'>
                                <li className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        Eliminate accounting costs for pallet inventory tracking with automated reports
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        Identify missing or mishandled pallets across facilities and shipping partners.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        Validate on-time and in-full deliveries to customers
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div >
                                        Trace chain of custody, temperature, and shock events of damaged, lost, or stolen product
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <img src={trayfront} alt="trayfront" className='sm:w-[35%] w-full m-auto' />
            </div>
        </div>
    )
}

export default Trace