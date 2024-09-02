import React from "react";
import { useNavigate } from "react-router-dom";


const Home = ()=>{
    const navigate = useNavigate()
    const handleButtonClick = ()=>{
        navigate('/chart')
    }

    return(
        <button onClick={handleButtonClick}>Click to see Chart</button>
    );
};

export default Home;
