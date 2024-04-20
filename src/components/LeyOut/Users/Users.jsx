import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDeleteUser = id => {
        console.log(id);
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreationTime</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://lh3.googleusercontent.com/a/ACg8ocIHwloTVn61D9-bIQYNtdtOpuESJ8bBxyTIPm2LcD3bTEyN9ziR=s288-c-no" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{user.email}</span>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{user.createdAt}</button>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className=" btn text-red-700">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;