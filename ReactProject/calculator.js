function Calculator() {
    const [input, setInput] = React.useState("");

    function handleButtonClick(value) {
        if (value === "=") {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput("Hiba");
            }
            
        } else if (value === "C") {
            setInput("");
        } else {
            setInput(input + value);
        }
    }

    return (
        <div>
            <h2>Számológép</h2>
            <input type="text" value={input} readOnly style={{ width: "160px", fontSize: "20px", textAlign: "right" }} />
            <br />
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(value => (
                <button key={value} onClick={() => handleButtonClick(value)} style={{ width: "40px", height: "40px", fontSize: "18px", margin: "5px" }}>
                    {value}
                </button>
            ))}
            <button onClick={() => handleButtonClick("C")} style={{ width: "100px", height: "40px", fontSize: "18px", margin: "5px" }}>C</button>
        </div>
    );
}

window.Calculator = Calculator;
