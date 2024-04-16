import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProctuct = ({ coffee, coffees, setCoffees }) => {
    const { name, chef, price, _id, photo } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className=" grid grid-cols-3 justify-center items-center  shadow-xl">
                <figure><img className=' w-full' src={photo} alt="Photo" /></figure>

                <div className=' space-y-4'>
                    <h2><span className="text-2xl font-serif">Name: </span> <small className=' text-lg'>{name}</small></h2>
                    <h2><span className="text-2xl font-serif">Chef: </span> <small className=' text-lg'>{chef}</small></h2>
                    <h2><span className="text-2xl font-serif">Price: </span> <small className=' text-lg'>{price}</small></h2>
                </div>

                <div>

                    <div className="join join-vertical space-y-4">
                        <button className="btn rounded-xl">View</button>
                        <Link to={`/update/${_id}`}>
                            <button className="btn rounded-xl">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn rounded-xl">X</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

AddProctuct.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.object.isRequired,
    setCoffees: PropTypes.object.isRequired
}

export default AddProctuct;