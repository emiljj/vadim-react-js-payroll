import React from 'react';

import './payees.container.style.css';

interface IPayeePageHeaderProps {
  payeesCount: number;
  totalSalary: number;
  adminNames: string;
  highestSalary: number;
  onAddButtonClick: () => void;
}

const PayeePageHeader = (props: IPayeePageHeaderProps) => {
  const {
    payeesCount,
    totalSalary,
    adminNames,
    highestSalary,
    onAddButtonClick,
  } = props;
  return (
    <div className="payee-container__header">
      <div>
        <p>Payees count: {payeesCount} </p>
      </div>
      <div>
        <p>Total salary: {totalSalary} </p>
      </div>
      <div>
        <p>Admin: {adminNames}</p>
      </div>
      <div>
        <p>Highest salary: {highestSalary}</p>
      </div>
      <button className="add-button" onClick={onAddButtonClick}>
        ADD
      </button>
    </div>
  );
};

export default PayeePageHeader;
