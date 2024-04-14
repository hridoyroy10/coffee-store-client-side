import { Link } from "react-router-dom";
import Bg from "../../../assets/images/more/11.png"
import { FaArrowLeft } from "react-icons/fa6";
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const hanldeAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const addedNewCoffee = {
            name, chef, supplier, price, category, details, photo
        }


        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedNewCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: "btn btn-success",
                            cancelButton: "btn btn-danger"
                        },
                        buttonsStyling: false
                    });
                    swalWithBootstrapButtons.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, Added",
                        cancelButtonText: "No, cancel!",
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            swalWithBootstrapButtons.fire({
                                title: "Successfully",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        } else if (
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            swalWithBootstrapButtons.fire({
                                title: "Cancelled",
                                text: "Your imaginary file is safe :)",
                                icon: "error"
                            });
                        }
                    });
                }
            }
            )

    }

    return (
        <div>
            <div className=" p-20 container mx-auto min-h-screen bg-no-repeat" style={{ backgroundImage: `url(${Bg})` }}>
                <Link to='/' className=" flex gap-3 items-center text-[#331A15] text-3xl  font-medium " style={{ textShadow: "black 2px -1px 3px" }}><FaArrowLeft />Back to home</Link>
                <div className=" container mx-auto">
                    <div className=" text-center max-w-[900] mb-9 mx-auto ">
                        <h1 className=" text-5xl font-medium mb-14 text-[#374151]" style={{ textShadow: "black 2px -2px 9px" }} >Add New Coffee</h1>
                        <p className="text-lg text-[#1B1A1A]">
                            It is a long established fact that a reader will be distraceted by the readable content of <br /> a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less <br /> normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>
                    <form onSubmit={hanldeAddCoffee}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-xl text-[#1B1A1A]">Name</span>
                                </label>
                                <label>
                                    <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered input-primary w-full" />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-xl text-[#1B1A1A]">Chef</span>
                                </label>
                                <label>
                                    <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered input-primary w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-[#1B1A1A]">Supplier</span>
                                </label>
                                <label>
                                    <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered input-primary w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-[#1B1A1A]">Price</span>
                                </label>
                                <label>
                                    <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered input-primary w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-[#1B1A1A]">Category</span>
                                </label>
                                <label>
                                    <input type="text" name="category" placeholder="Enter coffee category" className="input input-primary  w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl text-[#1B1A1A]">Details</span>
                                </label>
                                <label>
                                    <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered input-primary w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <label className="label">
                                <span className="text-2xl text-[#1B1A1A]">Photo</span>
                            </label>
                            <label>
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered  w-full" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <label>
                                <input type="submit" value="Add Coffee" name="cofffee" className="input input-bordered text-2xl text-slate-900 w-full bg-[#D2B48C]" />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;