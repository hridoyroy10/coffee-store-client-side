import { Link } from "react-router-dom";
import Bg from "../../../assets/images/more/11.png"
const Update = () => {
    return (
        <div className=" text-right container  mx-auto min-h-screen bg-no-repeat " style={{ backgroundImage: `url(${Bg})` }}>
            <Link to='/' className=" btn btn-primary">Black</Link>
            <div className=" container mx-auto p-14 bg-[#F4F3F0]">
                <div className=" text-center max-w-[900] my-0 mx-auto ">
                    <h1 className=" text-2xl font-medium text-[#374151]">Add New Coffee</h1>
                    <p className=" text-[#1B1A1A]">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <div className="md:flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="email" name="cofffee" placeholder="Coffee Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Update