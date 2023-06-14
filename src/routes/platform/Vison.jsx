import dashscreen from '../../assets/icons/dashscreen.png'
import locscreen from '../../assets/icons/locscreen.png'
import chain from '../../assets/icons/chain.png'
const Vison = () => {
    return (
        <div className='py-20 container'>
            <div className='lg:w-[600px] m-auto text-center space-y-3'>
                <div className="text-4xl font-bold">Vision - Next Generation Supply Chain</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">
                <div className='bg-light px-5 py-10'>
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3">
                        <img src={dashscreen} alt="dashscreen" className='w-[25px] ' />
                    </div>
                    <div className="text-lg font-bold">Asset Tracking</div>
                    <div className="text-lg text-primary">GPS + Geo Fencing</div>
                    <ul className='space-y-3 mt-5 list-disc px-7'>
                        <li >Real time global visibility on all assets in the field</li>
                        <li >Notifications of arrival or departure of a location and integration into ERP systems</li>
                        <li>Verify on time deliveries</li>
                        <li>Zero infrastructure cost</li>
                    </ul>
                </div>
                <div className='bg-light px-5 py-10'>
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3">
                        <img src={locscreen} alt="locscreen" className='w-[25px] ' />
                    </div>
                    <div className="text-lg font-bold">Condition Monitoring</div>
                    <div className="text-lg text-primary">Temperature, Humidity, Light, Pressure/Shock</div>
                    <ul className='space-y-3 mt-5 list-disc px-7'>
                        <li >Preserve integrity of your product by closely monitoring and maintaining optimal environment</li>
                        <li >Maintain quality and improve regulatory compliance of refrigerated goods and cold chain integrity</li>
                        <li>Capture excessive movement and shock during transit to ensure product is delivered intact / rejected load accountability.</li>
                        <li>Custom sensor capabilities</li>
                    </ul>
                </div>
                <div className='bg-light px-5 py-10'>
                    <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-3">
                        <img src={chain} alt="chain" className='w-[25px] ' />
                    </div>
                    <div className="text-lg font-bold">Data Points</div>
                    <ul className='space-y-3 mt-5 list-disc px-7'>
                        <li >GPS Location</li>
                        <li >Temperature</li>
                        <li>Humidity</li>
                        <li>Vibration / Impact</li>
                        <li>Speed / Direction</li>
                        <li>Light / Lux</li>
                        <li>Altitude / Air Pressure</li>
                        <li>Signal Strength</li>
                        <li>Battery Life</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Vison