import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export const MyAlert = ({ variant, message }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert variant={variant} onClose={handleCloseAlert} dismissible>
          <p>{message}</p>
        </Alert>
      )}
    </div>
  );
};
