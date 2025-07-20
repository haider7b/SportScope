import React,{useContext} from 'react'
import CompD from './CompD'
import { CountContext } from '../const/index'

export default function CompA() {
    const countContext = useContext(CountContext)
    return (
        <div 
        style={{display:'flex',gap:'10px'}}
        >
            <div>compA</div>
            <div>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
            {/* <div><CompD /></div> */}
        </div>
    )
}
