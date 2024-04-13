
import icon1 from '../../../assets/images/icons/1.png'
import icon2 from '../../../assets/images/icons/2.png'
import icon3 from '../../../assets/images/icons/3.png'
import icon4 from '../../../assets/images/icons/4.png'
import Banner from './Banner';

const Home = () => {
    return (
        <div>
        <Banner/>
            <div className=" w-full bg-[#ECEAE3] ">
                <div className="grid lg:grid-cols-4 container mx-auto gap-3 place-content-center place-items-center">
                    <div className=" p-5">
                        <img className=' mb-3' src={icon1} alt="" />
                        <p className="text-3xl text-[#331A15]">Awesome Aroma</p>
                        <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className=" p-5 ">
                        <img className=' mb-3' src={icon2} alt="" />
                        <p className="text-3xl text-[#331A15]">High Quality</p>
                        <p className='text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="  p-5">
                        <img className=' mb-3' src={icon3} alt="" />
                        <p className="text-3xl text-[#331A15]">Pure Grades</p>
                        <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className=" p-5">
                        <img className='mb-3' src={icon4} alt="" />
                        <p className="text-3xl text-[#331A15]">Proper Roasting</p>
                        <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;