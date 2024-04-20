import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {createUser} = useContext(AuthContext);
    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            console.log(result.user);

            const createdAt = result.user?.metadata?.creationTime;
            

            const user = {email, createdAt: createdAt};
            fetch('http://localhost:5000/user', {
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        })
        .catch(error=>console.log(error.error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSingUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;