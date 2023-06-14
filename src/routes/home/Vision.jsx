import tick from '../../assets/icons/tick.png';
import diamonds from '../../assets/images/diamonds.png';
import screen from '../../assets/images/screen.png';


const Vision = () => {
    return (
        <div className='md:py-20 container'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className='flex items-center justify-center'>
                    <div className="text-4xl font-bold w-[400px] leading-[50px]">
                        Vision - Next Generation Supply Chain - Industry 4.0
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="absolute right-0 -z-10">
                        <img src={diamonds} alt="diamonds" className='w-[80%]' />
                    </div>
                    <img src={screen} alt="screen" className='w-[40%]' />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-28">
                <div className='bg-light p-5'>
                    <div className="text-lg font-bold">Asset Tracking –  GPS + Geo Fencing </div>
                    <ul className='space-y-3 mt-5 list-disc px-7'>
                        <li>Real time global visibility on all assets in the field</li>
                        <li>Notifications of arrival or departure of a location and integration into ERP systems</li>
                        <li>Verify on time deliveries</li>
                        <li>Zero infrastructure cost</li>
                    </ul>
                </div>
                <div className='bg-light p-5'>
                    <div className="text-lg font-bold">Condition Monitoring Temperature, Humidity, Light, Pressure/Shock  </div>
                    <ul className='space-y-3 mt-5 list-disc px-7'>
                        <li>Preserve integrity of your product by closely monitoring and maintaining optimal environmen</li>
                        <li>Maintain quality and improve regulatory compliance of refrigerated goods and cold chain integrity s</li>
                        <li>Capture excessive movement and shock during transit to ensure product is delivered intact / rejected load accountability.</li>
                        <li>Custom sensor capabilities</li>
                    </ul>
                </div>
                <div className='bg-light p-5'>
                    <div className="text-lg font-bold">Data Points </div>
                    <ul className='space-y-3 mt-5 list-disc px-7'>
                        <li>GPS Location</li>
                        <li>Temperature</li>
                        <li>Vibration / Impact</li>
                        <li>Speed / Direction</li>
                        <li>Light / Lux</li>
                        <li>Altitude / Air Pressure</li>
                        <li>Signal Strength</li>
                        <li>Battery Life</li>
                    </ul>
                </div>
            </div>
            <div className="md:py-20 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className='flex justify-center border-b md:border-b-0 md:border-r items-center pb-4'>
                        <ul className='space-y-3'>
                            <li>
                                <div className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        <div className='font-bold'>
                                            The dashboard is completely customized to your specific needs
                                        </div>
                                        <div className="mt-3">Each pallet is unique wit its own ID and current location</div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center' >
                        <ul className='space-y-3'>
                            <li>
                                <div className="flex items-start gap-3">
                                    <img src={tick} alt="tick" className='w-[15px]' />
                                    <div>
                                        <div className='font-bold'>
                                            Authorized users have complete control over your supply chain
                                        </div>
                                        <div className="mt-3">Data is granular and can be drikked down to each pallet history and cycle pathway.</div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision