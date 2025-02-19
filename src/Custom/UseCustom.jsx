import { useState } from "react";

export const useCounter=(value)=>{
    const [count, setCount] = useState(value);
    const increment = () => setCount(count + 1);
    const decrement =()=>setCount(count-1);

    return(
        {
            count,
            increment,
            decrement,
        }
    )
}
