import React, { useState } from 'react';
import './Role-component.css'; // Make sure to import the updated CSS file

const RoleTable = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Super Admin', status: false },
    { id: 2, name: 'Academy Manager', status: true },
    { id: 3, name: 'Teacher', status: true },
  ]);

  const toggleStatus = (id) => {
    setRoles(
      roles.map((role) =>
        role.id === id ? { ...role, status: !role.status } : role
      )
    );
  };

  return (
    <table className="role-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{role.name}</td>
            <td>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={role.status}
                  onChange={() => toggleStatus(role.id)}
                />
                <span className="slider round"></span>
              </label>
            </td>
            <td>
              <button>...</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;
