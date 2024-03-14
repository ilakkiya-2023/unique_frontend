import React, { useState } from 'react';
import axios from 'axios'

export const Doctor = async () =>{
const [listing , setListing] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/get-doctordetails');
      const json = await response.json();
      setListing(json);
    };

    fetchData();
  }, []);

  
  // const appointments = [
  //   { id: 1, patientName: 'Ilakkiya', date: '2024-03-15', time: '10:00 AM' },
  //   { id: 2, patientName: 'Madhu', date: '2024-03-16', time: '11:30 AM' },
  //   { id: 3, patientName: 'Jayasri', date: '2024-03-17', time: '02:00 PM' },
  // ];//here we need db result..

  const response = await axios.get('http://localhost:8000/get-doctordetails',{ })
  console.log(response) 
  

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>
      <h2>Your Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{fetchData}</td>
              <td>{response.city}</td>
              <td>{response.specialisation}</td>
              <td>{response.phone_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

