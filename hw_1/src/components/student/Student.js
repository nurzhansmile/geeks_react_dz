import React from 'react';

const Student = (props) => {
    return (
        <div>
            <p> {props.name}, хорошо учится?</p>
            <p>{props.boolean}</p>
        </div>
    );
};

export default Student;