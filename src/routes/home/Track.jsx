import track from '../../assets/images/track.png'
const Track = () => {
    return (
        <div className='py-20 bg-light w-full'>
            <div className="container">
                <div className='flex justify-center'>
                    <img src={track} alt="track" />
                </div>
                <div className="md:py-20 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className='flex justify-center border-b md:border-b-0 md:border-r items-center py-7 md:py-0'>
                            <div>
                                <div className="text-lg font-bold">Intelligent Track and Trace Systems</div>
                                <ul className='space-y-3 mt-5 list-disc px-7'>
                                    <li>Asset ID and product data integrations</li>
                                    <li>Shipment accountability visibility</li>
                                    <li>Product journey data storage</li>
                                    <li>Supply chain notifications set on events</li>
                                    <li>Product temperature management with alert controls</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex justify-center items-center' >
                            <div>
                                <div className="text-lg font-bold">Leverage Operations System Data Intelligence</div>
                                <ul className='space-y-3 mt-5 list-disc px-7'>
                                    <li>Storage and distribution history tracking</li>
                                    <li>Actional reporting based on set parameters </li>
                                    <li>Manage recalls, temperature spoilage and expirations</li>
                                    <li>Alert program participants with out of parameter alert</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track