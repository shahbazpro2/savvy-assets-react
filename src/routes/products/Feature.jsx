
const Feature = () => {
    return (
        <div className='py-20 bg-light w-full'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-20 gap-10 lg:gap-5">
                    <div className='lg:col-span-1 flex lg:justify-center items-start'>
                        <div>
                            <div className="text-lg font-bold">SA Signature Features</div>
                            <ul className='space-y-3 mt-5 list-disc px-7'>
                                <li>Red Rubber Grommet Top Deck – Anti Slip </li>
                                <li>QR Code Center Blocks</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:col-span-2 flex lg:justify-center items-start'>
                        <div>
                            <div className="text-lg font-bold">Smart Pallet Data Points</div>
                            <div>(device inside center block)</div>
                            <div className="flex gap-3">
                                <ul className='space-y-3 mt-5 list-disc px-7'>
                                    <li>GPS Location</li>
                                    <li>Temperature</li>
                                    <li>Humidity</li>
                                    <li>Vibration / Impact</li>
                                    <li>Speed / Direction</li>
                                </ul>
                                <ul className='space-y-3 mt-5 list-disc px-7'>
                                    <li>Light / Lux</li>
                                    <li>Altitude / Air Pressure</li>
                                    <li>Signal Strength</li>
                                    <li>Battery Life </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='lg:col-span-1 flex lg:justify-center items-start'>
                        <div>
                            <div className="text-lg font-bold">Connectivity / Scanning  Capabilities</div>
                            <ul className='space-y-3 mt-5 list-disc px-7'>
                                <li>LTE CAT M1/CAT NB1</li>
                                <li>Active Sensors + QR Scan Options</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:col-span-1 flex lg:justify-center items-start'>
                        <div>
                            <div className="text-lg font-bold">Full 53 Foot Truck – 540 Pallets</div>
                            <ul className='space-y-3 mt-5 list-disc px-7'>
                                <li>Discontinuous </li>
                                <li>Perimeter lip</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature