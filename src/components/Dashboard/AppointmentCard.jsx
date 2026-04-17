import React from 'react';

const AppointmentCard = ({ appointment }) => {
    return (
        <div className="appointment-item">
            <div className="appointment-info">
                <h4>{appointment.patientName}</h4>
                <p>{appointment.doctor} • {appointment.type}</p>
            </div>
            <div className="appointment-time">
                <div className="time">{appointment.time}</div>
                <button className="start-btn">Start</button>
            </div>
        </div>
    );
};

export default AppointmentCard;