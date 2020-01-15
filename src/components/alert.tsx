import React from 'react';
import './alert.style.css';

interface IAlertProps {
  mod: 'success' | 'warning' | 'danger';
  onClose: () => void;
  message: string;
}

const Alert = (props: IAlertProps) => {
  const { mod, onClose, message } = props;
  return <div>{message}</div>;
};

export default Alert;
