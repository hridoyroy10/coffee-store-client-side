import PropTypes from 'prop-types';

const AddProctuct = ({ coffee }) => {
    const {name, chef, supplier, price, category, details, photo}= coffee;
    console.log(coffee);

    return (
        <div>
            <div className="card card-side  shadow-xl">
                <figure><img className=' w-full' src={photo} alt="Photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
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