import React from 'react';
import './alert.style.css';

interface IAlertProps {
  mod: 'success' | 'warning' | 'danger';
  onClose: () => void;
  message: string;
}

const Alert = (props: IAlertProps) => {
  const { mod, onClose, message } = props;
  return (
    <div className={`alert ${mod}`}>
      <div>
        <p>{message}</p>
      </div>
      <div className="close-massage" onClick={onClose} role="button">
        x
      </div>
    </div>
  );
};

export default Alert;
