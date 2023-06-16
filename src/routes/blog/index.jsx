import blog2 from '../../assets/images/blog2.png'
import blog3 from '../../assets/images/blog3.png'
import calender from '../../assets/icons/calendar.png'
import chat from '../../assets/icons/chat.png'


const Blog = () => {
    return (
        <div className='py-20 container'>
            <div className="text-center lg:w-[400px] m-auto">
                <div className="text-4xl font-bold">Our Latest Blog</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 my-14">
                {
                    [blog2, blog3, blog2, blog3, blog2, blog3].map((item, index) => (
                        <div key={index} className='relative'>
                            <div className="flex absolute top-14 items-start left-24 h-full w-full">
                                <div className="bg-white rouneded-lg shadow-lg p-5 w-[70%] md:w-[250px]">
                                    <div className="flex justify-between w-full">
                                        <div className="flex gap-2 items-start border-r border-black pr-4">
                                            <img src={calender} alt="calender" className='w-5' />
                                            <div className="text-sm">June 12, 2021</div>
                                        </div>
                                        <div className="flex gap-2 items-start">
                                            <img src={chat} alt="chat" className='w-5' />
                                            <div className="text-sm">143</div>
                                        </div>
                                    </div>
                                    <div className="text-sm my-2">By: Micheal jon</div>
                                    <p className='font-medium'>
                                        Administrators and IT
                                        Professionals Stratefies
                                        and methods
                                    </p>
                                    <button className='btn mt-2 text-sm'>Read more</button>
                                </div>
                            </div>
                            <div className="w-[80%] h-[350px]">
                                <img src={item} alt="" className='h-full object-cover' />
                            </div>

                        </div>
                    ))

                }
            </div>
            <div className="mt-5 text-center">
                <button className='btn'>Load more</button>
            </div>
        </div>
    )
}

export default Blog