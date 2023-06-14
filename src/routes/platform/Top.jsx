import tick from '../../assets/icons/tick-circle.png'
import diamonds from '../../assets/images/diamonds.png'
import dashboard from '../../assets/images/dashboard.png'
import shipment from '../../assets/images/shipment.png'
import analytics from '../../assets/images/analytics.png'
import dashboard1 from '../../assets/images/dashboard1.png'
import route from '../../assets/images/route.png'
const Top = () => {
    return (
        <div className='py-20 container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
                <div>
                    <div className="text-4xl font-bold">Customer Dashboard</div>
                    <ul className='mt-5 space-y-5'>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Maps
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Graphs
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Reports
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Alerts
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Controls
                        </li>
                    </ul>
                </div>
                <div className='order-first lg:order-none relative 2xl:static'>
                    <div className="absolute right-0 -z-10 ">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={dashboard} alt="dashboard" className='w-[100%]' />
                </div>
                <div>
                    <div className="absolute left-32 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={route} alt="route" className='w-[100%]' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className="text-4xl font-bold">Route Tracking Maps</div>
                    <div className='mt-5'>
                        Active line trail mapping will show the path history of all asset location moves and graphed condition data
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className="text-4xl font-bold">Asset Environment / Shipment Reports</div>
                </div>
                <div>
                    <div className="absolute right-0 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={shipment} alt="shipment" className='w-[100%]' />
                </div>

                <div className="lg:col-span-2">
                    <div className='lg:max-w-[50%] m-auto text-center'>
                        <div className="text-4xl font-bold">Customer Data Analytics Dashboard – Asset Controls</div>
                        <div className="mt-2 tex-sm">
                            Customers can create their own geofences around locations and set automated notifications to inventory management systems
                        </div>
                        <div className="mt-7 relative">
                            <div className="absolute -z-10">
                                <img src={diamonds} alt="diamonds" className='w-[80%]' />
                            </div>
                            <img src={analytics} alt="analytics" className='w-[100%]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="text-4xl font-bold text-center">SA Dashboard – Maps / Graphs / Reports</div>
                <div className="grid grid-cols-1 lg:grid-cols-7 mt-20 gap-7">
                    <div className='lg:col-span-2 bg-light p-5'>
                        <div className="text-lg font-bold">Data Points Capabilities  </div>
                        <ul className='space-y-3 mt-5 list-disc px-7'>
                            <li>GPS Location</li>
                            <li>Temperature</li>
                            <li>Humidity</li>
                            <li>Vibration / Impact</li>
                            <li>Speed / Direction</li>
                            <li>Light / Lux</li>
                            <li>Altitude / Air Pressure</li>
                            <li>Signal Strength</li>
                            <li>Battery Life</li>
                        </ul>
                    </div>
                    <div className='lg:col-span-3'>
                        <img src={dashboard1} alt="dashboard1" className='w-[100%]' />
                        <div className="mt-10 tex-sm font-bold text-center">
                            Connectivity – Active Sensors - LTE CAT M1/CAT NB1
                        </div>
                    </div>
                    <div className='lg:col-span-2 bg-light p-5'>
                        <div className="text-lg font-bold">Data Reports / Notifications</div>
                        <ul className='space-y-3 mt-5 list-disc px-7'>
                            <li>Automated Proximity Reports / Asset – Product Tracking & Tracing</li>
                            <li>Automated Product Threshold Notifications / Status Reports</li>
                            <li>Number of Touches / Velocity of Impacts</li>
                            <li>Automated Speed Parameters  Notifications </li>
                            <li>Light Sensor Reports – Trailer / Container Open and Close Tracking</li>
                            <li>Asset Utilization / Last Touch Reports</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top