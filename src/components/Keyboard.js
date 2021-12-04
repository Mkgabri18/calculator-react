import Key from "./Key";

function Keyboard({calcClick}) {
    return <div className="calculator__keyboard">
        <div className="d-flex">
            <Key value="CE" operation={(e)=>calcClick(e.target.value)}/>    
            <Key value="C" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="/" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="*" operation={(e)=>calcClick(e.target.value)}/>
        </div>
        <div className="d-flex">
            <Key value="7" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="8" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="9" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="-" operation={(e)=>calcClick(e.target.value)}/>
        </div>
        <div className="d-flex">
            <Key value="4" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="5" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="6" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="+" operation={(e)=>calcClick(e.target.value)}/>
        </div>
        <div className="d-flex">
            <Key value="1" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="2" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="3" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="=" dimButon="bigC" operation={(e)=>calcClick(e.target.value)}/>
        </div>
        <div className="d-flex ab-b0">
            <Key value="0" dimButon="bigR" operation={(e)=>calcClick(e.target.value)}/>
            <Key value="." operation={(e)=>calcClick(e.target.value)}/>
        </div>
    </div>
}

export default Keyboard;