const date = new Date()
num = date.getDate()
const boxes = document.querySelectorAll('.grid-item');



boxes.forEach(box => {
    box.addEventListener('click', function dateClicked() {
        let ennyiNapotVarj = box.innerHTML - num;
        if (box.innerHTML > num) {
            alert('Várj ' + ennyiNapotVarj + ' napot még!')
        }
        else if (box.innerHTML == 1) {
            box.innerHTML = "Kindercsoki"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 2) {
            box.innerHTML = "Cukorka"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 3) {
            box.innerHTML = "Csokitojás"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 4) {
            box.innerHTML = "Karamella"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 5) {
            box.innerHTML = "Csokoládé"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 6) {
            box.innerHTML = "a"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 7) {
            box.innerHTML = "b"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 8) {
            box.innerHTML = "c"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 9) {
            box.innerHTML = "d"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 10) {
            box.innerHTML = "e"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 11) {
            box.innerHTML = "f"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 12) {
            box.innerHTML = "g"

            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 13) {
            box.innerHTML = "h"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 14) {
            box.innerHTML = "i"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 15) {
            box.innerHTML = "j"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 16) {
            box.innerHTML = "k"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 17) {
            box.innerHTML = "l"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 18) {
            box.innerHTML = "m"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 19) {
            box.innerHTML = "n"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 20) {
            box.innerHTML = "o"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 21) {
            box.innerHTML = "p"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 22) {
            box.innerHTML = "q"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 23) {
            box.innerHTML = "r"
            box.setAttribute('style', 'background-color: yellow;');
        }
        else if (box.innerHTML == 24) {
            box.innerHTML = "s"
            box.setAttribute('style', 'background-color: yellow;');
        }






        else if (box.innerHTML == "Kindercsoki") {
            box.innerHTML = "1"
            box.setAttribute('style', 'background-color: green;');

        }
        else if (box.innerHTML == "Cukorka") {
            box.innerHTML = "2"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "Csokitojás") {
            box.innerHTML = "3"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "Karamella") {
            box.innerHTML = "4"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "Csokoládé") {
            box.innerHTML = "5"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "a") {
            box.innerHTML = "6"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "b") {
            box.innerHTML = "7"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "c") {
            box.innerHTML = "8"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "d") {
            box.innerHTML = "9"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "e") {
            box.innerHTML = "10"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "f") {
            box.innerHTML = "11"
            box.setAttribute('style', 'background-color: green;');

        }
        else if (box.innerHTML == "g") {
            box.innerHTML = "12"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "h") {
            box.innerHTML = "13"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "i") {
            box.innerHTML = "14"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "j") {
            box.innerHTML = "15"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "k") {
            box.innerHTML = "16"
            box.setAttribute('style', 'background-color: green;');

        }
        else if (box.innerHTML == "l") {
            box.innerHTML = "17"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "m") {
            box.innerHTML = "18"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "n") {
            box.innerHTML = "19"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "o") {
            box.innerHTML = "20"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "p") {
            box.innerHTML = "21"
            box.setAttribute('style', 'background-color: green;');

        }
        else if (box.innerHTML == "q") {
            box.innerHTML = "22"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "r") {
            box.innerHTML = "23"
            box.setAttribute('style', 'background-color: green;');
        }
        else if (box.innerHTML == "s") {
            box.innerHTML = "24"
            box.setAttribute('style', 'background-color: green;');
        }

    });
});



