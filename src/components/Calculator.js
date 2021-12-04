import { useState } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";

function Calculator() {
    const [calc, setCalc] = useState({
        num: '',
        res: 0
    })

    // builded simple calc with eval()
    const calcOperation = (val) => {
        console.log(val)
        let op = calc.num;
        switch (val) {
            case 'CE': op = ''; break;
            case 'C': op = op.slice(0,-1); break;
            case '=': op = eval(op).toString(); break;
            default: if(calc.num.length<=8) op += val
        }
        setCalc({...calc, num: op})
    }

    return <div className="calculator">
        <Display value={calc.num}/>
        <Keyboard calcClick={(e) => calcOperation(e)}/>
    </div>
}

export default Calculator;