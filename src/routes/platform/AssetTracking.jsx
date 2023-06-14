/* eslint-disable no-irregular-whitespace */
import diamonds from '../../assets/images/diamonds.png';
import screen from '../../assets/images/screen.png';

const AssetTracking = () => {
    return (
        <>
            <div className='py-20 bg-light w-full text-center'>
                <div className="container">
                    <div className="lg:max-w-[80%] m-auto space-y-8">
                        <div className="text-sm text-primary">Low-Power 5G</div>
                        <div>
                            <div className="text-xl font-bold">Asset Tracking meets Connected Sensors</div>
                            <div className='my-3'>
                                Savvy Assets devices offer a combination of GPS technologies, low-power 5G connection and on-board smart sensors, making our products a very versatile solution with numerous and various applications.
                                For example, you can simply track a trailer simply using the GPS feature, or you can also track the trailer and measure the conditions of the cargo inside using the on-board temperature and humidity sensors.
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-bold">Supply Chain, Logistics and Industry 4.0 Intelligence!</div>
                            <div className='my-3'>
                                Insights that is gained from the data that asset tracking provides will make an impact on companies’ operating costs. Savvy Assets  tracking devices are equipped with motion sensors that can deliver real-time data about the movement of goods in transit or at a warehouse.  Other sensors can report data on the condition of those goods such as temperature and humidity.
                            </div>
                        </div>
                        <div>
                            <div className="text-xl font-bold">Manufacturing, Food & Beverage, Retail, Consumer Goods, Shipping</div>
                            <div className='my-3'>
                                There are an endless array of emerging use cases that can benefit from the arrival of low-power 5G network technology. Everything from reusable pallets, specialized equipment, manufacturing components worked on and shipped to multiple facilities, containers…the list grows daily.
                                Help your company explore how low-power 5G LTE-M and NB-IoT can help disrupt how your business is done.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div className="absolute left-32 -z-10">
                            <img src={diamonds} alt="diamonds" className='w-[80%]' />
                        </div>
                        <img src={screen} alt="screen" className='w-[50%] m-auto' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className="text-4xl font-bold">Connected Logistics</div>
                        <div className='mt-5'>
                            Savvy Assets provides real-time information on location, temperature, impact and light exposure for sensitive and high-valued goods in transit. Real-time sensor and location information is provided on-line through an intuitive map based interface providing visibility into the entire supply chain.
                        </div>
                        <div className='mt-3'>
                            Pick-up and drop-off locations are delivered in real-time and easily integrated into 3rd party applications through a readily available web service interface. Temperature, light and impact sensors provide immediate notifications should adherence to storage and transportation requirements for goods and inventory exceed thresholds.
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                            <div className='flex lg:justify-center lg:border-r px-5'>
                                <ul className='space-y-3 list-disc'>
                                    <li>
                                        Real-time GPS tracking
                                    </li>
                                    <li>
                                        Asset dispatching
                                    </li>
                                    <li>
                                        Utilization reporting
                                    </li>
                                    <li>
                                        High-powered battery
                                    </li>
                                    <li>Compatible with Environmental Monitors</li>
                                </ul>
                            </div>
                            <div className='flex lg:justify-center px-5'>
                                <ul className='space-y-3 list-disc'>
                                    <li>
                                        Temperature and humidity logs
                                    </li>
                                    <li>
                                        Real-time alerts
                                    </li>
                                    <li>
                                        Wireless and waterproof
                                    </li>
                                    <li>
                                        Compatible with external temperature probe
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssetTracking