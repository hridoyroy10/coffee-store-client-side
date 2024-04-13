import { Link } from "react-router-dom";
import Bg from "../../../assets/images/more/11.png"
import { FaArrowLeft } from "react-icons/fa6";

const AddCoffee = () => {
    return (
        <div>
        <div className=" p-20 container mx-auto min-h-screen bg-no-repeat" style={{ backgroundImage: `url(${Bg})` }}>
        <Link to='/' className=" flex gap-3 items-center text-[#331A15] text-2xl  " style={{textShadow: "black 2px -1px 3px"}}><FaArrowLeft/>Back to home</Link>
                <div className=" container mx-auto">
                    <div className=" text-center max-w-[900] my-0 mx-auto ">
                        <h1 className=" text-2xl font-medium text-[#374151]">Add New Coffee</h1>
                        <p className=" text-[#1B1A1A]">
                            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>
                    <form >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label>
                                    <input type="text" name="cofffee" placeholder="Enter coffee name" className="input input-bordered input-primary w-full"  />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <label>
                                    <input type="text" name="cofffee" placeholder="Enter coffee chef" className="input input-bordered input-primary w-full"  />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <label>
                                    <input type="text" name="cofffee" placeholder="Enter coffee supplier" className="input input-bordered input-primary w-full"  />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <label>
                                    <input type="text" name="cofffee" placeholder="Enter coffee taste" className="input input-bordered input-primary w-full"  />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label>
                                    <input type="text" name="cofffee" placeholder="Enter coffee category" className="input input-primary  w-full"  />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label>
                                    <input type="text" name="cofffee" placeholder="Enter coffee details" className="input input-bordered input-primary w-full"  />
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label>
                                <input type="text" name="cofffee" placeholder="Enter photo URL" className="input input-bordered input-primary w-full"  />
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <label>
                                <input type="submit" value="Add Coffee" name="cofffee" className="input input-bordered text-slate-900 w-full bg-[#D2B48C]"  />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;