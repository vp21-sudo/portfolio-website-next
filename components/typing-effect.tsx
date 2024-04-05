import React, { useEffect, useState } from 'react'


interface Props {
    text: string,
    delay: number,
    className?: string
}
const TypingEffect = ({text, delay, className}: Props) => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < text.length && index > 0) {
                setValue(value + text[index])
                setIndex(index + 1)
            } else if(index === text.length) {
                setTimeout(()=>{
                    setIndex(0)
                    setValue('')
                }, 1000)
            }
            else {
               setIndex(1)
               setValue(text[0])
            }
        }, delay * 1000 * ((text.length - index) * delay * delay))
        return () => clearTimeout(timer)
    })
  return (
    <div className={className}>
        {value}
    </div>
  )
}

export default TypingEffect