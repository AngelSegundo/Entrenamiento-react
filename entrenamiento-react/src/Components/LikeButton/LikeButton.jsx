import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [counter, setCounter] = useState(0)
    const [index, setIndex] = useState(0)

    const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [colorSelected, setColorSelected] = useState(colorArray[index])

    function plus() {

        setCounter(counter + 1)

        if (index === colorArray.length - 1) {
            setColorSelected(colorArray[0])
            setIndex(0)

        } else {
            setColorSelected(colorArray[index + 1])
            setIndex(index + 1)
        }
    }

    return (
        <button
            style={{ backgroundColor: colorSelected }} onClick={() => plus()}>{counter} Likes</button>
    )

}

export default LikeButton
