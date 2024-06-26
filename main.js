var body = document.querySelector("body");
function change() {
    const randHex = size => {
        let res = [];
        let hexletter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < size; i++) {
            res.push(hexletter[Math.floor(Math.random() * 16)]);
        }
        return res.join('');
    }
    body.style.background = "#" + randHex(6);
}