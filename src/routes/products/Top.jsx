import { Link } from 'react-router-dom'
import homebg1 from '../../assets/images/homebg1.png'
import tray from '../../assets/images/tray.png'
const Top = () => {
    return (
        <div className='lg:h-[800px] container'>
            <div className='absolute right-0 top-0 -z-10'>
                <img src={homebg1} alt="homebg1" className='w-[100%] h-[100%]' />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 lg:py-20 py-10">
                <div className='space-y-5'>
                    <div className="text-5xl font-bold">
                        About our Products
                    </div>
                    <div className="text-lg">The Savvy Fleets is a IOT equipped pooled rental pallet program that collects data for comprehensive real time visibility of asset performance and product condition monitoring through the supply chain. Digitizing pallet level reading creates operational industry 4.0 benefits for the manufacturer, distributor and retailer through the product shipment journey. </div>
                    <br />
                    <div className="text-lg">
                        Savvys plastic pallets improve operational systems by decreasing transport costs, eliminating wood chips and other food safety hazards.
                    </div>
                    <br />
                    <div className="text-lg">
                        Data services, analytics and asset reporting for customer captive pallet fleets as well as other types of equipment: roll containers, bins, crates, boxes etc are available in turn key rental fleet programs.
                    </div>
                    <div className="text-start">
                        <Link to='/rental'>
                            <a className="btn">Start Now</a>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-end items-center h-full'>
                    <div className='2xl:absolute right-0 md:px-10'>
                        <img src={tray} alt="tray" className='w-full 2xl:w-[80%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top