let text = window.prompt();

console.log(isEqual(text));



function isEqual(text) {
    let reverse = "";
    for (let index = text.length - 1; index >= 0; index--) {
        reverse += text[index];
    }
    if (reverse===text) {
        return true;
    }
    return false;
}



