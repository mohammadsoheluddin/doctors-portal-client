import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mb-3">{children}</button>
    );
};

export default PrimaryButton;