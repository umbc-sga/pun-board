// when the download button is clicked
document.getElementById("download").onclick = () => {
    // de-focus from all inputs because we don't want the cursor in the picture
    document.querySelectorAll("input").forEach(x => x.blur());

    // create png image from the #container DOM
    domtoimage.toPng(document.getElementById("container"))
        .then(dataUrl => {
            const a = document.createElement("a");
            a.href = dataUrl;
            a.download = "pun.png";
            a.click();
        })
        .catch(error => {
            console.error('oops, something went wrong!', error);
        });
}