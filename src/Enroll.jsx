import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {handleError,handleSuccess} from './Toast'
export default function Enroll() {
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [AadharNumber, setAadharNumber] = React.useState('');
    const [dob, setDOB] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [file, setFile] = React.useState(null); // File input should be initialized to null, not an empty string

    const btnClick = async () => {
        if (name === '' || AadharNumber === '' || dob === '' || gender === '' || !file) {
            // alert('Please fill all the fields');
            return handleError("All fields are manadatory")
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('Aadhar_No', AadharNumber);
        formData.append('dob', dob);
        formData.append('gender', gender);
        formData.append('image', file); 

        try {
            const response = await axios.post('http://localhost:5000/api/enroll', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // alert("Enrolled Successfully: " + response.data.message);
            handleSuccess("Enrolled Successfully "+ response.data.message)
        } catch (error) {
            console.error('Error enrolling:', error);
            handleError("Failed to Enrolled");
        }
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="card bg-base-100 w-full ">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Aadhar Card Enrollment</h2>
                    <div className="card-actions">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body items-center text-center">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="mb-5 input input-bordered input-info w-full max-w-xs"
                                />
                                <input
                                    type="text"
                                    placeholder="Aadhar Number"
                                    onChange={(e) => setAadharNumber(e.target.value)}
                                    className="mb-5 input input-bordered input-info w-full max-w-xs"
                                />
                                <input
                                    type="date"
                                    placeholder="Date of Birth"
                                    onChange={(e) => setDOB(e.target.value)}
                                    className="mb-5 input input-bordered input-info w-full max-w-xs"
                                />
                                <select
                                    onChange={(e) => setGender(e.target.value)}
                                    className="mb-5 select select-bordered select-info w-full max-w-xs"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <input
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])} // Change to handle the file object
                                    className="mb-5 file-input file-input-bordered file-input-info w-full max-w-xs"
                                />
                                <div className="card-actions">
                                    <button className="btn btn-info" onClick={btnClick}>Enroll Your Self</button>
                                    <button className="btn btn-info" onClick={goHome}>Go Back To Home Page</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
