import React, {useState} from 'react';

const HomeBanner = (props) => {

    const [color, setcolor] = useState("Red")

    const Blue = () => {
      setcolor("Blue")
    }

    const green = () => {
        setcolor("Green")
    }

    return (
        <div>
            <h1>{color}</h1>
            <button onClick={Blue}> Change Blue</button>
            <button onClick={green}>Green</button>
        </div>
    );
};

export default HomeBanner;