import { useState } from "react";

function Card(){
    const[nome, setNome] = useState("nome1");

    // Function to collect data
    const getRecords = async () => {
        
        const response = await fetch(
        "http://localhost:5000/address"
        ).then((response) => response.json());
        setNome(response[0].from);
        // update the state
        
    };
    return (
        <div className="card" style={{margin: '0px'}}>
            <div className="card-header">
                {nome}
                <div className="spinner-grow text-success" role="status" style={{height: '10px', width: '10px'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button className="btn btn-primary" onClick={getRecords}>Go somewhere</button>
            </div>
        </div>
    );
}

export default Card;