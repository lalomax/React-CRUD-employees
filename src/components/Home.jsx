import { Heading } from './Heading';
import { EmployeeList } from './EmployeeList';

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
        Employee Management System
        </h3>
        <Heading />
        <EmployeeList />
      </div>
    </>
  );
};
