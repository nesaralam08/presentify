import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    
    const navigate = useNavigate();

    const enroll = () => {
        navigate('/enroll');
    }

    const attendance = () => {
        navigate('/verify');
    }
  return (
    <div>
        <div
            className="hero min-h-screen bg-cover"
            style={{
                backgroundImage: "url(../src/assets/back.svg)"
            }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-white text-5xl font-bold">Welcome to Liveness Detection and Verification.</h1>
                    <p className="mb-5 text-white">
                    A Liveness Detection Software that Demonstrates the face liveness detection in the edge.
                    </p>
                    <button className="btn m-5 btn-info" onClick={enroll}>Enroll Yourself</button>
                    <button className="btn m-5 btn-info" onClick={attendance}>Verify Yourself</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
