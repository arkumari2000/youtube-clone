import React from 'react';

const Spinner = () =>{
    return(
        <div className="ui active dimmer" style={{height: '50vh'}}>
            <div className="ui big text loader">Loading...</div>
        </div>
    );
};

export default Spinner;