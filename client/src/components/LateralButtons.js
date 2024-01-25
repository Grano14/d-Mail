function LateralButton(){
    return (
        <div className="list-group" data-bs-theme="dark" style={{borderRadius: '0px'}}>
            <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor: '#05061a'}}>The current button</button>
            <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor: '#05061a'}}>A second button item</button>
            <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor: '#05061a'}}>A third button item</button>
            <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor: '#05061a'}}>A fourth button item</button>
            <button type="button" className="list-group-item list-group-item-action" style={{backgroundColor: '#05061a'}}>A disabled button item</button>
        </div>
    );
}

export default LateralButton;