let text = '';
let arr = [];
let enter = '</br>';
space = "&nbsp;&nbsp;&nbsp;&nbsp;";

for (let i = 0; i < 5; i++) {
    arr[i] = ['(.)', '(.)', '(.)', '(.)', '(.)'];
}
for (let i = 0; i < 5; i++) {
    text += enter;
    for (let j = 0; j < 5; j++) {
        text += arr[i][j] + space;
    }
}
document.getElementById('text').innerHTML = text;
let luot = 0;
function changeValue() {
    let text = '';
    
    let x = prompt("enter the position of X");
    let y = prompt("enter the position of Y");

    if (luot % 2 == 0) {
        arr[x][y] = 'X';
    } else {
        arr[x][y] = 'O';
    }
    luot++;
    for (let i = 0; i < 5; i++) {
        text += enter;
        for (let j = 0; j < 5; j++) {
            text += arr[i][j] + space;
        }
    }
    document.getElementById('text').innerHTML = '</hr>' + text;
}