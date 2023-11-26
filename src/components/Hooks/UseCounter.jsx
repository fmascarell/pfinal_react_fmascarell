import { useState } from "react"

export const useCounter = (min, max) => {
    const [count, setCount] = useState(min)
    
    const handleSuma = () => {
        if (count < max) {
            setCount(count + 1)            
        }
    }
     
    const handleResta = () => {
        if (count >= min) {
            setCount(count - 1)            
        } else if (count === 0){
            setCount(1);
        }
    }
    console.log("contador use counter " + count)
    
    return {
        count,
        handleResta,
        handleSuma,
        setCount,
    }
}