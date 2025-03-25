import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 1235765,
      name: "Mr Kay",
      email: "mrkay@example.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // Default role
  });

  const handldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Reset the form data
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user")) {
      console.log("Deleted User:", userId);
    }
  };

  const handleRoleChange = (userId, newRole) => {
    console.log({ id: userId, role: newRole });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <div className="p-6 rounded mb-6">
        <h3 className="text-md font-bold mb-4">Add New User</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handldChange}
              className="input outline-gray-300 outline focus:border-2 rounded-tr rounded-br"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handldChange}
              className="input outline-gray-300 outline focus:border-2 rounded-tr rounded-br"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handldChange}
              className="input outline-gray-300 outline focus:border-2 rounded-tr rounded-br"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block">
              Password
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handldChange}
              className="input outline-gray-300 outline focus:border-2 rounded-tr rounded-br"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded"
          >
            Add User
          </button>
        </form>
      </div>

      <div className="overflow-x-auto shadow-sm sm:rounded-xl">
        <table className="min-w-full text-left text-gray-500">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-300 cursor-pointer hover:bg-gray-50"
                >
                  <td className="p-4 font-medium whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4 ">
                    <select
                      className="border border-gray-300 rounded outline-none focus:border-sky-500"
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                    >
                      <option value="customer">Customer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="p-4">
                    {" "}
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  No User Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
