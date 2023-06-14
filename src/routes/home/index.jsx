import Digitize from "./Digitize"
import DigitizeMore from "./DigitizeMore"
import Trace from "./Trace"
import Track from "./Track"
import Vision from "./Vision"
import Homebg1 from '../../assets/images/homebg1.png'
import Homebg2 from '../../assets/images/homebg2.png'
import Tray from '../../assets/images/tray.png'

const Home = () => {
    return (
        <>
            <div className='h-[800px] container'>
                <div className='absolute left-0 top-0 -z-10'>
                    <img src={Homebg2} alt="homebg2" className='w-[100%] h-[100%]' />
                </div>
                <div className='absolute right-0 top-0 -z-10'>
                    <img src={Homebg1} alt="homebg1" className='w-[100%] h-[100%]' />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
                    <div className='space-y-5'>
                        <div className="text-sm text-primary">Savvy-Assets - Knowledgeable asset rental solutions</div>
                        <div className="text-5xl font-bold">
                            The smartest <span className='text-primary'>pallet</span> period.
                        </div>
                        <div className="text-lg font-medium">The smartest pallet period.</div>
                        <div className="text-lg">The Savvy Assets Supply Chain Rental Programs create an intelligent, transparent and digital control system to manage assets and product performance through supply chain operations with the latest IOT technologies. </div>
                        <div className="text-center">
                            <button className="btn">Start Now</button>
                        </div>
                    </div>
                    <div className='flex justify-end items-center h-full'>
                        <div className='2xl:absolute right-0 md:px-10'>
                            <img src={Tray} alt="tray" className='w-full 2xl:w-[80%]' />
                        </div>
                    </div>
                </div>
            </div>
            <Digitize />
            <DigitizeMore />
            <Vision />
            <Track />
            <Trace />
        </>
    )
}

export default Home