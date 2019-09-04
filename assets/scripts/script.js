document.addEventListener("DOMContentLoaded", () => {
    // For user editing
    const TEXT = "Example text.";
    const FONT = "Bold 14px Courier New";
    const COLOUR_A = "blue";
    const COLOUR_B = "red";


    // System
    // DOM
    let DOMtextCanvas = document.querySelector("#textCanvas");
    
    // Set up context
    textCtx = DOMtextCanvas.getContext("2d");
    
    textCtx.font = FONT;

    var gradient = textCtx.createLinearGradient(10, 0, textCtx.measureText(TEXT).width, 0);
    gradient.addColorStop("0.0", COLOUR_A);
    gradient.addColorStop("1.0", COLOUR_B);

    // Fill with gradient
    textCtx.fillStyle = gradient;
    textCtx.fillText(TEXT, 10, 90);
});