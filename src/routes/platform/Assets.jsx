import twilio from '../../assets/icons/twilio.png'
import att from '../../assets/icons/att.png'
import supply from '../../assets/images/supply.png'
import checks from '../../assets/icons/checks.png'
import tick from '../../assets/icons/tick-circle.png'
import badge from '../../assets/icons/badge.png'
import safety from '../../assets/icons/safety.png'
const Assets = () => {
    return (
        <div className='py-20 container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                <div className="col-span-1">
                    <div className="text-4xl font-bold">Savvy Assets Supply Chain Solutions - Service Programs</div>
                    <div className="mt-5 tex-lg font-bold">
                        SA Supply Chain Solutions works with leading carriers for global data coverage
                    </div>
                    <div className="my-5 text-sm">
                        SA Turn Key Solutions – Savvy Assets will provide full service tracing and tracking solutions warehousing and supply chain operations. Monitoring by the pallet or tote level capturing environmental and operational information 24/7.  SA offers the following programs to provide data analytics visibility, environment monitoring and operational insight.
                    </div>
                    <div className="flex gap-5 items-center my-10">
                        <img src={twilio} alt="twilio" className='w-[100px]' />
                        <img src={att} alt="att" className='w-[70px]' />
                    </div>
                </div>
                <div className="col-span-1">
                    <img src={supply} alt="supply" className='w-[100%]' />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-28">
                <div className='bg-light px-5 py-10'>
                    <div className="lg:border-r">
                        <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3">
                            <img src={checks} alt="checks" className='w-[25px] ' />
                        </div>
                        <div className="text-lg font-bold">Compliance Programs</div>
                        <ul className='space-y-3 mt-5 list-disc px-7'>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Cellular Real Time Visibility Monitoring 24/7
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Track and Trace Route Solutions

                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Seed to Sale Distribution Tracking
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Serialize Unit Programs
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Compliance Documenting
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Sustainability Footprint Auditing
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-light px-5 py-10'>
                    <div className="lg:border-r">
                        <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3">
                            <img src={badge} alt="badge" className='w-[25px] ' />
                        </div>
                        <div className="text-lg font-bold">Quality – Optimization Programs</div>
                        <ul className='space-y-3 mt-5 list-disc px-7'>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Product/Assets – Operational Optimization
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Product Quality Analytics
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Cultivation to Distribution Environment Monitoring
                                Production Yield Analysis
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Spoilage – Loss Rate Analysis
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Temperate Sensitive Cold Chain Optimization

                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={tick} alt="tick-circle" />
                                Business Intelligence Auditing
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-light px-5 py-10'>
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3">
                        <img src={safety} alt="safety" className='w-[25px] ' />
                    </div>
                    <div className="text-lg font-bold">Security Programs</div>
                    <ul className='space-y-3 mt-5 list-disc px-7'>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Security Asset Monitoring
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Geofencing
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Secure Ledger Transactions
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Chain of custody tracking
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src={tick} alt="tick-circle" />
                            Blockchain Integrations
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center">
                <button className='btn'>Next Generation Asset Tracking / Product Monitoring</button>
            </div>
        </div>
    )
}

export default Assets