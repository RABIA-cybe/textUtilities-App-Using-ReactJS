import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState ({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor : 'black',
    //         border : '1px solid white'
    //     })

    //     setBtnText("Enable Light Mode");

    // }

    // else{
    //     setMyStyle({
    //         color:'black',
    //         backgroundColor : 'white',
          
    //     })

    //     setBtnText("Enable Dark Mode");
    // }
    // }

    let myStyle = {
        color: props.mode === 'dark'? 'white': 'rgba(23,27,31,1)',
        backgroundColor: props.mode === 'dark'?'rgba(23,27,31,1)' : 'white'
    }


    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This TexUtitlities app allows to analyze your text, either changing to upper and lower case or removing vowels 
                            from the text, word and character count etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>Free to Use</strong>  
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtlities is a free text analyzer tool, that provides a number of text based functions including 
                            words, character count, time to read words etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Thisn TextUtlities app is Compatible with any web browsers such as firefox, chrome, edge, safari
                             etc, it's suitable for all.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className='btn btn-dark my-3' onClick={toggleStyle}>{btnText}</button> */}
        </div>
    )
}
