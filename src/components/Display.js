function Display({value}) {
    return <div className="calculator__display">
        <input type="text" value={value} id="display" className="inputBox" readOnly/>
    </div>
}

export default Display;