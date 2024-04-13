import { Link } from 'react-router-dom';
import banner from '../../../assets/images/more/banner.jpeg';


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="lg:ml-[65rem]">
                <h1 className="mb-5 text-4xl ">Would you like a Cup of Delicious Coffee?</h1>
                <p className="mb-5 text-xl">It s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link to="/">
                    <input className='btn btn-outline bg-[#E3B577] text-black p-4' type="button" value="Learn More" />
                </Link>
            </div>

        </div>
    );
};

export default Banner;