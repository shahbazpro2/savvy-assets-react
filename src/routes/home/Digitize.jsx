
import Gear from '../../assets/icons/gear.png'
import Time from '../../assets/icons/time.png'
import Wifi from '../../assets/icons/wifi.png'
import Touch from '../../assets/icons/touch.png'
import Loc from '../../assets/icons/loc.png'
import Graph from '../../assets/icons/graph.png'
import Screen from '../../assets/icons/screen.png'
import Users from '../../assets/icons/users.png'
import GearPlay from '../../assets/icons/gearplay.png'
import Disk from '../../assets/icons/disk.png'
import Satelite from '../../assets/icons/satelite.png'
import Refresh from '../../assets/icons/refresh.png'


const Digitize = () => {
    return (
        <div className='md:py-20 py-10 container'>
            <div className='md:w-[600px] m-auto text-center space-y-3'>
                <div className="text-4xl font-bold">Digitize your operations</div>
                <div className="text-lg">
                    Savvy Assets Products bring power to your supply chain with durable reusable rental products and real time data intelligence.
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 gap-14">
                <div className='text-center'>
                    <img src={Gear} alt='gear' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Digitally Transform Your Operation </div>
                </div>
                <div className='text-center'>
                    <img src={Time} alt='time' className='w-[65px] m-auto' />
                    <div className="text-lg font-bold mt-3">Reduce Cost and Time Increased Efficiency </div>
                </div>
                <div className='text-center'>
                    <img src={Wifi} alt='wifi' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Leverage Your Data Capabilities  </div>
                </div>
                <div className='text-center'>
                    <img src={Touch} alt='touch' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Leverage Your Data Capabilities  </div>
                </div>
                <div className='text-center'>
                    <img src={Loc} alt='loc' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Geofencing </div>
                    <div className="text-sm">
                        Get instant alerts to any connected device if your cargo moves outside of predefined geographical locations
                    </div>
                </div>
                <div className='text-center'>
                    <img src={Graph} alt='graph' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Real-time data </div>
                    <div className="text-sm">
                        Check that the right product is reaching your production lines in the right quantity and meeting quality assurance guidelines.
                    </div>
                </div>
                <div className='text-center'>
                    <img src={Screen} alt='screen' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Condition monitoring</div>
                    <div className="text-sm">
                        Along with location data, the system can monitor a wide range of container and pallet conditions, depending on what is most important to you and your business.
                    </div>
                </div>
                <div className='text-center'>
                    <img src={Users} alt='users' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Efficient Fleet Management</div>
                    <div className="text-sm">
                        Armed with accurate, real-time business intelligence you’ll be equipped to make intelligent, insights driven business decisions.
                    </div>
                </div>
                <div className='text-center'>
                    <img src={GearPlay} alt='gearplay' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Automation & Optimisation</div>
                    <div className="text-sm">
                        Our system allows you to automate your asset management throughout your supply chain for greater accuracy, efficiency and time and cost savings.
                    </div>
                </div>
                <div className='text-center'>
                    <img src={Disk} alt='disk' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Pallet</div>
                    <div className="text-sm">
                        Pallet Level Intelligence, Collection of data at a pallet level in the supply chain can provide valuable insight to supply chain operations.
                    </div>
                </div>
                <div className='text-center'>
                    <img src={Satelite} alt='satelite' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Satellite or with a Transmit</div>
                    <div className="text-sm">
                        Zero Infrastructure Required, Battery powered IOT devices transmit data over cellular networks.
                    </div>
                </div>
                <div className='text-center'>
                    <img src={Refresh} alt='refresh' className='w-[70px] m-auto' />
                    <div className="text-lg font-bold mt-3">Synchronized</div>
                    <div className="text-sm">
                        Synchronize Systems, Leverage data sets across various organization operations before software systems for full supply chain visibility and optimizations.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digitize