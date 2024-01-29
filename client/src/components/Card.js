import { useState } from "react";

function Card(props){
    const[nome, setNome] = useState("0x0g36g38g8d3dgHYXZ6tfGp");

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
                From:{nome}
                <div className="spinner-grow text-success" role="status" style={{height: '10px', width: '10px'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.object}</h5>
                <p className="card-text">{props.mailBody}</p>
                <button className="btn btn-primary" onClick={getRecords}>Rispondi</button>
            </div>
        </div>
    );
}

export default Card;