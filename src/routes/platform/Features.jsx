import gearpeople from '../../assets/icons/gearpeople.png'
import meter from '../../assets/icons/meter.png'
import order from '../../assets/icons/order.png'
import heartbox from '../../assets/icons/heartbox.png'
import timer from '../../assets/icons/timer.png'
import scan from '../../assets/icons/scan.png'
import toggle from '../../assets/icons/toggle.png'
import useradd from '../../assets/icons/useradd.png'
const Features = () => {
    return (
        <div className='py-20 bg-light'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                    <div className='text-center'>
                        <img src={gearpeople} alt='gearpeople' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Manage assets from any where </div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={meter} alt='meter' className='w-[65px] m-auto' />
                        <div className="text-lg font-bold mt-3">Speed up request tickets </div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={order} alt='order' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Get record- level attachments  </div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={heartbox} alt='heartbox' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Create custom notifications</div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={timer} alt='timer' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">View asset history</div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={scan} alt='scan' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Built-in barcode scanner </div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={toggle} alt='toggle' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Enable role-based access</div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={useradd} alt='useradd' className='w-[70px] m-auto' />
                        <div className="text-lg font-bold mt-3">Add unlimited users</div>
                        <div className="text-sm mt-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features