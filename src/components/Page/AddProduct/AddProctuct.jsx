import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const AddProctuct = ({ coffee }) => {
    const { name, chef, supplier, price, category, details, _id, photo } = coffee;
    console.log(coffee);

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
                        <button className="btn rounded-xl">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn rounded-xl">X</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

AddProctuct.propTypes = {
    coffee: PropTypes.object.isRequired
}

export default AddProctuct;