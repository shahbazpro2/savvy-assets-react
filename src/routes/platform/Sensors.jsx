import refrigerated from '../../assets/images/refrigerated.png'
import datavisual from '../../assets/images/datavisual.png'
import diamonds from '../../assets/images/diamonds.png'
import mobdesktop from '../../assets/images/mobdesktop.png'
import tick from '../../assets/icons/tick.png'
import bords from '../../assets/images/bords.png'
import mapdash from '../../assets/images/mapdash.png'
import track1 from '../../assets/images/track1.png'
import map from '../../assets/images/map.png'
const Sensors = () => {
    return (
        <div className='lg:py-20 container'>
            <div className='grid lg:grid-cols-2 lg:gap-20 gap-10'>
                <div className="col-span-2">
                    <div className="text-3xl font-bold text-center leading-[50px]">
                        GPS SA sensors make it possible to identify the driver, the temperature of special loads and data from sensors. All information is available in real-time, and the data can be shared to create new valuable applications, such as notify when the vehicles reach certain locations or special events occur.
                    </div>
                    <div className="lg:my-16 mt-16">
                        <img src={refrigerated} alt="refrigerated" className='md:w-[80%] w-full m-auto' />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="text-3xl font-bold text-center">
                        Vaccine Temperature Tracking Program – Data Visualization
                    </div>
                    <div className="my-16">
                        <img src={datavisual} alt="datavisual" className='md:w-[70%] m-auto' />
                    </div>
                </div>
                <div className='flex flex-col justify-center col-span-2 lg:col-span-1'>
                    <div className="text-4xl font-bold">Supply Chain Software Development – Dock Load Tracking Vaccine Deliveries</div>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <div className="absolute right-0 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={map} alt="map" className='w-[100%]' />
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <div className="absolute left-32 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={mobdesktop} alt="mobdesktop" className='w-[100%]' />
                </div>
                <div className='flex flex-col justify-center col-span-2 lg:col-span-1'>
                    <div className="text-4xl font-bold">Your Rules</div>
                    <div className='mt-5'>
                        Setup *your* rules in a few clicks so that when a condition is met, the selected action is triggered. You can also always build advanced conditions by using scripts!
                    </div>
                    <ul className='space-y-3 mt-5'>
                        <li>
                            <div className="flex items-center gap-3">
                                <img src={tick} alt="tick" className='w-[15px]' />
                                <div>Email</div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3">
                                <img src={tick} alt="tick" className='w-[15px]' />
                                <div>SMS</div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3">
                                <img src={tick} alt="tick" className='w-[15px]' />
                                <div>Push notifications</div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3">
                                <img src={tick} alt="tick" className='w-[15px]' />
                                <div>Run scripts</div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3">
                                <img src={tick} alt="tick" className='w-[15px]' />
                                <div>MQTT Publish</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center col-span-2 lg:col-span-1'>
                    <div className="text-4xl font-bold">Supply chain real-time visibility</div>
                    <div className='mt-5'>
                        Setup *your* rules in a few clicks so that when a condition is met, the selected action is triggered. You can also always build advanced conditions by using scripts!
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <div className="absolute right-0 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={bords} alt="bords" className='w-[100%]' />
                </div>
                <div className="col-span-2 text-center">
                    <div className="text-3xl font-bold text-center">All in One</div>
                    <div className='mt-5'>
                        The complete turn key system provides supply chain intelligence
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <div className="absolute left-32 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={mapdash} alt="mapdash" className='w-[100%]' />
                </div>
                <div className='flex flex-col justify-center col-span-2 lg:col-span-1'>
                    <div className="text-4xl font-bold">Location & Sensing & More</div>
                </div>
                <div className='flex flex-col justify-center col-span-2 lg:col-span-1'>
                    <div className="text-4xl font-bold">Custom geofences can be created and alert controls can be set from the platform</div>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <div className="absolute right-0 -z-10 ">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={track1} alt="track1" className='w-[100%]' />
                </div>
            </div>
        </div>
    )
}

export default Sensors