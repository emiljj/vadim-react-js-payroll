import React from 'react';
import { connect } from 'react-redux';

import './payees.container.style.css';

interface IPayeePageHeaderProps {
  payeesCount: number;
  totalSalary: number;
  adminNames: string;
  highestSalary: number;
  onAddButtonClick: () => void;
  count: number;
}

const PayeePageHeader = (props: IPayeePageHeaderProps) => {
  const {
    payeesCount,
    totalSalary,
    adminNames,
    highestSalary,
    onAddButtonClick,
    count,
  } = props;
  return (
    <div className="payee-container__header">
      <div>
        <p>Test: {count} </p>
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
const mapStateToProps = (state: number) => {
  return { count: state };
};
export default connect(mapStateToProps)(PayeePageHeader);
