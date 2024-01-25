import React, { useState } from 'react';
import Card from './Card.js';
function MailList(){
    const [buttonHeight, setButtonHeight] = useState([
        { id: 1, height: 74 },
        { id: 2, height: 74 },
        { id: 3, height: 74 },
        { id: 4, height: 74 },
        { id: 5, height: 74 },
      ]); // Altezza iniziale del button
  
      function increaseButtonHeight(id) {
        // Copia l'array di oggetti di stato e aggiorna l'altezza del pulsante specificato
        setButtonHeight((prevButtonHeights) =>
          prevButtonHeights.map((button) =>
            button.id === id ? { ...button, height: 400 } : button
          )
        );
        decreaseButtonHeight(id);
      }

      function decreaseButtonHeight(id){
        setButtonHeight((prevButtonHeights) => 
            prevButtonHeights.map((button) => 
                button.id === id ? button : {...button, height: 74}
            )
        );
      }

    return (
        <div className="list-group" data-bs-theme="dark" style={{borderRadius: '0px'}}>
            {buttonHeight.map((button) => (
                <button
                    key={button.id}
                    type="button"
                    className="list-group-item"
                    style={{ backgroundColor: '#051128', height: `${button.height}px`, textAlign: 'left' }}
                    onClick={() => increaseButtonHeight(button.id)}
                >
                    {`Button ${button.id}`} mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm<br />
                    <Card />
                </button>
            ))}
            <button type="button" className="list-group-item list-group-item-action" style={{height: '2090px'}}>A second button item</button>
        </div>
    );
}

export default MailList;