import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EmployeeList = () => {
  const { employees, removeEmployee } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <>
      {employees.length > 0 ? (
        <>
          {employees.map((employee) => (
            <div
              className="flex items-center bg-gray-100 mb-3 shadow"
              key={employee.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">{employee.name}</p>
                <p className="text-gray-600">{employee.designation}</p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {employee.location}
                </span>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                {/* <Link to={`/edit/${employee.id}`} title="Edit Employee"> */}
                <button
                  onClick={() =>
                    navigate('/edit', { state: { id: employee.id } })
                  }
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-edit"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
                {/* </Link> */}
                <button
                  onClick={() => removeEmployee(employee.id)}
                  className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                  title="Remove Employee"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </>
  );
};
