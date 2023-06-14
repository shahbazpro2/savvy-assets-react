import diamonds from '../../assets/images/diamonds.png'
import tray from '../../assets/images/tray.png'
const Pricing = () => {
    return (
        <div className='py-20 container'>
            <div className="text-center lg:w-[400px] m-auto">
                <div className="text-4xl font-bold">Savvy Asset Pallet Rental Pricing</div>
                <div className="mt-3 text-sm">Pricing Model – Per Month / 36 Month Term</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 my-14">
                <div>
                    <div className="text-xl font-bold">Pallet Rental + Monthly Data Service + SA Platform System Access/Support</div>
                    <div className="text-base font-bold mt-4">Includes:</div>
                    <ul className='mt-5 space-y-5'>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Equipment Rental - Asset Delivery / Pickup
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Branded company dashboard setup
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            24/7 GPS cellular data monitoring of SA products + support
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Online access 24/7 by computer or mobile app to your account SA platform accessed through savvy-assets.com
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Custom reporting requirements upon client request
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Custom notification programs upon client request
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Serialized inventory asset management
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            WMS systems integrations assistance / data reporting
                        </li>
                    </ul>
                    <div className="text-xl font-bold mt-10">Service Terms 36 Months / 24 Month Renew Option</div>
                    <ul className='mt-5 space-y-5'>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Discounts based on volume of assets and prepayment
                        </li>
                        <li className="flex gap-3 items-center">
                            <img src="/assets/icons/tick.png" alt="tick" />
                            Minimum multi year commitments required for volume clients
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="text-xl font-bold">Rental Price Per Month = $8</div>
                    <div className="text-lg font-bold mt-2">Volume Discounts Over 5k</div>
                    <div className="mt-20 flex items-center h-full">
                        <div className="absolute right-0 -z-10">
                            <img src={diamonds} alt="diamonds" className='w-[80%]' />
                        </div>
                        <img src={tray} alt="tray" className='w-[90%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing