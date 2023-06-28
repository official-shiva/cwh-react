export default function About(props) {
    const style = {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white'
    }

    return (
        <div className='container py-2 px-10'>
            <h3 style={{ color: props.mode === 'light' ? "black" : 'white' }} >About Us</h3>
            <div className="accordion" id="accordionExample" style={style}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
                            <strong> Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quality and efficiently. Be it word count, character count and many more
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character counter & word counter statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, firefox, Internet Explorer, Safari, Opera etc. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
