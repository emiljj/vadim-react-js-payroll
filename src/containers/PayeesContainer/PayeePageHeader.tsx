import React from 'react';
import './payees.container.style.css';

interface IPayeePageHeaderProps {
  companyBalance: number;
  payeesCount: number;
  totalSalary: number;
  adminNames: string;
  highestSalary: number;
  onAddButtonClick: () => void;
  handlePayClick: () => void;
}

const PayeePageHeader = (props: IPayeePageHeaderProps) => {
  const {
    companyBalance,
    payeesCount,
    totalSalary,
    adminNames,
    highestSalary,
    onAddButtonClick,
    handlePayClick,
  } = props;
  return (
    <div className="payee-container__header">
      <div>
        <button className="pay-button" onClick={handlePayClick}>
          PAY
        </button>
        <p>Company balance: {companyBalance} </p>
      </div>
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
