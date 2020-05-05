import React from 'react';
import './payees.page.style.css';
import './payees.page';

interface IPayeePageHeaderProps {
  disabled: boolean;
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
    disabled,
    companyBalance,
    payeesCount,
    totalSalary,
    adminNames,
    highestSalary,
    onAddButtonClick,
    handlePayClick,
  } = props;
  return (
    <div className="payee-page__header">
      <div>
        <button
          className="pay-button"
          onClick={handlePayClick}
          disabled={disabled}>
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
