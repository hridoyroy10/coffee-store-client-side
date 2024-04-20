import { useLoaderData } from 'react-router-dom';
import icon1 from '../../../assets/images/icons/1.png';
import icon2 from '../../../assets/images/icons/2.png';
import icon3 from '../../../assets/images/icons/3.png';
import icon4 from '../../../assets/images/icons/4.png';
import coffeeBg from "../../../assets/images/more/1.png";
import AddProctuct from '../AddProduct/AddProctuct';
import Banner from './Banner';
import { VscCoffee } from "react-icons/vsc";
import { useState } from 'react';
const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees); 
    return (
        <div>
            <Banner />
            <div className=" w-full bg-[#ECEAE3] mb-36 ">
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
            <div>
                <div className=' max-w-[600px] m-auto text-center '>
                    <h2 className=' text-xl'>--- Sip & Savor ---</h2>
                    <h2 className=' text-[58px] mb-8' style={{ textShadow: 'text-shadow: rgb(82 72 59) 3px 3px 4px' }}>Our Popular Products</h2>
                    <a href="#" className=' bg-[#E3B577] p-4 text-2xl rounded-2xl text-white'>Add Coffee <VscCoffee className=' text-black text-2xl inline-block'/></a>

                </div>

                <div className='bg-no-repeat p-48 w-full ' style={{ backgroundImage: `url(${coffeeBg}` }}>

                    <div className="md:grid grid-cols-2 gap-4 container mx-auto">
                        {
                            coffees.map(coffee => <AddProctuct 
                                key={coffee._id} 
                                coffees={coffees}
                                setCoffees={setCoffees}
                                coffee={coffee} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;