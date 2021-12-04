function Key({value, dimButon, operation}) {
    return <button className={`digit ${dimButon ? dimButon : ''}`} value={value} onClick={operation}>{value}</button>
}

export default Key;