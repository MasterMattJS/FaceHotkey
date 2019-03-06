//Creates new content simple GUI
var infoFaceBox = document.createElement("div");
infoFaceBox.style.position = "fixed";
infoFaceBox.style.left = "50%";
infoFaceBox.style.transform = "translate(-50%, 0)";
infoFaceBox.style.bottom = "10px";
infoFaceBox.style.zIndex = "999999";
infoFaceBox.style.backgroundColor = "rgba(0,0,0,.2)";
infoFaceBox.style.padding = "0 5px";

infoFaceBox.style.borderRadius = "4px"
document.body.appendChild(infoFaceBox);

var textInfo0 = document.createElement("p");
var textInfo1 = document.createElement("p");
var textInfo2 = document.createElement("p");
infoFaceBox.append(textInfo2);
textInfo2.style.fontSize = "30px";
textInfo2.style.color = "#fff";
textInfo2.style.margin = "0px";
textInfo2.style.textAlign = "center";
textInfo2.style.textShadow = "1px 1px 0 #000";
textInfo2.textContent = "";

infoFaceBox.append(textInfo1);
textInfo1.style.fontSize = "30px";
textInfo1.style.color = "#fff";
textInfo1.style.margin = "0px";
textInfo1.style.textAlign = "center";
textInfo1.style.textShadow = "1px 1px 0 #000";
textInfo1.textContent = "";

infoFaceBox.append(textInfo0);
textInfo0.style.fontSize = "40px";
textInfo0.style.color = "#fff";
textInfo0.style.margin = "0px";
textInfo0.style.textAlign = "center";
textInfo0.style.textShadow = "1px 1px 0 #000";
textInfo0.textContent = "normal";

//Keyboard listener
document.addEventListener('keydown', function (event) { keyPressEvent(event); }, false);

//Default settings
var faceE = 'C';
var faceMode = 0;
var GreenLight = true;
var remberFaceMode = 0;

//What to do when keypress
function keyPressEvent(event) {

    var code = event.code;

    if (faceMode == 0) {
        normalMode(code);
    }
    else if (faceMode == 1) {
        mightyMode(code);
    }
    else if (faceMode == 2) {
        commandMode(code);
    }
    if (code.slice(0, 6) === "Numpad" || event.ctrlKey) {
        event.stopPropagation();
    }
	
    switch (code) {
        case 'F9':
            modeCommand();
            break;
        case 'F8':
            randomFaceGenerator();
            break;
        case 'ControlRight':
            modeSwitch();
            break;
        case 'AltRight':
            faceType();
            break;
        case 'NumpadAdd':
            faceE = 'C';
            if (faceMode == 0) {
                textInfo0.textContent = "*C*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "aCa";
            }
            break;
        case 'NumpadSubtract':
            faceE = '-';
            if (faceMode == 0) {
                textInfo0.textContent = "*-*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "a-a";
            }
            break;
        case 'NumpadMultiply':
            faceE = '.';
            if (faceMode == 0) {
                textInfo0.textContent = "*.*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "a.a";
            }
            break;
        case 'NumpadDivide':
            faceE = '~';
            if (faceMode == 0) {
                textInfo0.textContent = "*~*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "a!a";
            }
            break;
        case 'NumpadDecimal':
            faceE = 'A';
            if (faceMode == 0) {
                textInfo0.textContent = "*A*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "aAa";
            }
            break;
        default:
            break;
    }
}

//input touchs
function inputEvent(element, eventType) {
    var ie = new InputEvent(eventType, { 'bubbles': true, 'cancelable': true, 'data': true, });
    element.dispatchEvent(ie);
}

//send message
function sendMessage(text, ie = false) {

    if (GreenLight == true) {
        if (faceMode != 2) {
            if (ie == false) {
                textInfo0.textContent = text.replace("/e", "");
            }
            else {
                textInfo0.textContent = text;
            }
        }
        document.getElementsByClassName('game-button chat-open-button')[0].click();
        GreenLight = false
        var i = 1;
        var element = document.querySelector('input.chat-input');
        element.value = text;
        inputEvent(element, 'input');
        document.getElementsByClassName('game-button chat-send-button')[0].click();
        setTimeout(function () { makeSureThatMessageIsSend(text, element, i); }, 50);
    }
    if (faceMode == 2) {
        if (remberFaceMode == 0) {
            modeNormal();
        }
        else if (remberFaceMode == 1) {
            modeMighty();
        }
    }
}

//Check if message was send
function makeSureThatMessageIsSend(text, element, i) {

    if (i <= 12) {
        if (element.value == text) {
            document.getElementsByClassName('game-button chat-send-button')[0].click();
            i++;
            setTimeout(function () { makeSureThatMessageIsSend(text, element, i); }, 50);
        }
        else {
            element.value = "";
            GreenLight = true;
        }
    }
    else {
        console.log("Cannot sent Message")
        GreenLight = true;
        element.value = "";
    }
}

//Normal face mode
function normalMode(code) {

    switch (code) {
        case 'Numpad0':
            sendMessage('/e');
            break;
        case 'Numpad1':
            sendMessage('/e ' + fixFace('d' + faceE + 'd'));
            break;
        case 'Numpad2':
            sendMessage('/e ' + fixFace('6' + faceE + '6'));
            break;
        case 'Numpad3':
            sendMessage('/e ' + fixFace('b' + faceE + 'b'));
            break;
        case 'Numpad4':
            sendMessage('/e ' + fixFace('<' + faceE + '<'));
            break;
        case 'Numpad5':
            sendMessage('/e ' + fixFace('o' + faceE + 'o'));
            break;
        case 'Numpad6':
            sendMessage('/e ' + fixFace('>' + faceE + '>'));
            break;
        case 'Numpad7':
            sendMessage('/e ' + fixFace('g' + faceE + 'g'));
            break;
        case 'Numpad8':
            sendMessage('/e ' + fixFace('9' + faceE + '9'));
            break;
        case 'Numpad9':
            sendMessage('/e ' + fixFace('e' + faceE + 'e'));
            break;
        default:
            break;
    }
}

//mightyMode swtich 
function mightyMode(code) {

    switch (code) {
        case 'Numpad0':
            sendMessage('/e');
            break;
        case 'Numpad1':
            sendMessage('/e ' + fixFace('d' + faceE + 'a'));
            break;
        case 'Numpad2':
            sendMessage('/e ' + fixFace('a' + faceE + 'o'));
            break;
        case 'Numpad3':
            sendMessage('/e ' + fixFace('a' + faceE + 'b'));
            break;
        case 'Numpad4':
            sendMessage('/e ' + fixFace('<' + faceE + 'a'));
            break;
        case 'Numpad5':
            sendMessage('/e ' + fixFace('a' + faceE + 'a'));
            break;
        case 'Numpad6':
            sendMessage('/e ' + fixFace('a' + faceE + '>'));
            break;
        case 'Numpad7':
            sendMessage('/e ' + fixFace('g' + faceE + 'a'));
            break;
        case 'Numpad8':
            sendMessage('/e ' + fixFace('o' + faceE + 'a'));
            break;
        case 'Numpad9':
            sendMessage('/e ' + fixFace('a' + faceE + 'e'));
            break;
        default:
            break;
    }
}

//commandMode
function commandMode(code) {

    switch (code) {
        case 'Numpad1':
            sendMessage('/sleep');
            break;
        case 'Numpad2':
            sendMessage('/yawn');
            break;
        case 'Numpad3':
            sendMessage('/blush');
            break;
        case 'Numpad4':
            sendMessage('/gifts');
            break;
        case 'Numpad5':
            sendMessage('/candy');
            break;
        case 'Numpad6':
            sendMessage('/clover');
            break;
        case 'Numpad7':
            sendMessage('^^');
            break;
        case 'Numpad8':
            sendMessage('/e OAO');
            break;
        case 'Numpad9':
            sendMessage('/sneeze');
            break;
        default:
            break;
    }
}

//Mode switcher
function modeSwitch() {

    if (faceMode == 0) {
        modeMighty();
    }
    else {
        modeNormal();

    }
}


function modeNormal() {
    remberFaceMode = 0;
    faceMode = 0;

    textInfo0.style.fontSize = "40px";
    textInfo0.textContent = "Normal";
    textInfo1.textContent = "";
    textInfo2.textContent = "";
}

function modeMighty() {

    remberFaceMode = 1;
    faceMode = 1;

    textInfo0.style.fontSize = "40px";
    textInfo0.textContent = "Mighty";
    textInfo1.textContent = "";
    textInfo2.textContent = "";
}



//comend mode
function modeCommand() {
    faceMode = 2;
    textInfo0.style.fontSize = "30px";


    textInfo2.textContent = "7.^^  8.OAO  9.achoo";
    textInfo1.textContent = "4.gifts 5.candy 6.clover";
    textInfo0.textContent = "1.sleep 2.yawn 3.blush ";

}

//Random face generator
function randomFaceGenerator() {

    var VerticalFace = ranIntAry(5);

    var face = 'invalid command';

    if (VerticalFace == 1 || VerticalFace == 2 || VerticalFace == 3) {

        var command = ['/e ', '/e ', '/cry ', '/e ', '/e ', '/cry ', '/e ', '/e ']

        var blush = ['', '', '//', '', ''];

        var blushC = blush[ranIntAry(blush.length)];

        var mouth = ['w', 'm', '-', '_', 'A', '.', 'p', '~', 'o', 'P'];
        var eyes = ['0', 'e', 'g', 'd', '>', '<', '=', 'u', 'a', 'ó', 'ò', 't', 'ô', 'O', 'Ò', 'Ó', 'Ô', '6'];

        face = command[ranIntAry(command.length)] + fixFace(eyes[ranIntAry(eyes.length)] + blushC + mouth[ranIntAry(mouth.length)] + blushC + eyes[ranIntAry(eyes.length)]);
    }
    else {
        var command = ['/e ', '/e ', '/cry ', '/e ', '/e ', '/blush ', '/e ', '/e '];

        var mouth = [')', '(', 'V', 'i', 'T', 'p', 'D', 's', 'v', 'o', 'u', 'O', '*', 'U', '>>', '<<', 'ii', 'ss', 'Q', 'L', 'DD', 'DDD'];

        var eyeBrowns = ['', '', '>', '', '', '<'];

        var eyeBrownsP = eyeBrowns[ranIntAry(eyeBrowns.length)];

        var eyes = [':', '%', 'B', '8', ';', 'X', '|'];

        var eyesP = eyes[ranIntAry(eyes.length)];

        if (eyesP == 'X' || eyesP == '|') {

            eyeBrownsP = "";

        }
        var commandP = command[ranIntAry(command.length)];

        var tear = ['', '', '', '\'', '', '', ''];

        var tearP = tear[ranIntAry(tear.length)];

        if (commandP == '/cry ') {
            tearP = "";
        }

        face = commandP + fixFace(eyeBrownsP + eyesP + tearP + mouth[ranIntAry(eyes.length)]);


    }

    sendMessage(face, true);

}

//random arry selector
function ranIntAry(max) {
    return Math.floor(Math.random() * max - 0) + 0;
}


//Mode diplay fix
function faceType() {
    switch (faceE) {
		
        case 'p':
            faceE = 'C';
            if (faceMode == 0) {
                textInfo0.textContent = "*C*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "aCa";
            }
            break;
        case 'C':
            faceE = 'm';
            if (faceMode == 0) {
                textInfo0.textContent = "*m*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "ama";
            }
            break;
        case 'm':
            faceE = '-';
            if (faceMode == 0) {
                textInfo0.textContent = "*-*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "a-a";
            }
            break;
        case '-':
            faceE = '_';
            if (faceMode == 0) {
                textInfo0.textContent = "*_*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "a_a";
            }
            break;
        case '_':
            faceE = 'A';
            if (faceMode == 0) {
                textInfo0.textContent = "*A*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "aAa";
            }
            break;
        case 'A':
            faceE = '.';
            if (faceMode == 0) {
                textInfo0.textContent = "*.*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "a.a";
            }
            break;
        case '.':
            faceE = 'P';
            if (faceMode == 0) {
                textInfo0.textContent = "*P*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "aPa";
            }
            break;
        case 'P':
            faceE = '~';
            if (faceMode == 0) {
                textInfo0.textContent = "*~*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "a~a";
            }
            break;
			
        case '~':
            faceE = 'o';
            if (faceMode == 0) {
                textInfo0.textContent = "*o*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "aoa";
            }
            break;
        case 'o':
            faceE = 'p';
            if (faceMode == 0) {
                textInfo0.textContent = "*p*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "apa";
            }
            break;
        default:

			faceE = 'C';
            if (faceMode == 0) {
                textInfo0.textContent = "*C*";
            }
            else if (faceMode == 1) {
                textInfo0.textContent = "aCa";
            }

            break;

    }



}


//fixes face that doesn't exist
function fixFace(face) {
    switch (face) {
        case 'omo':
            return 'ono';
        case 'eme':
            return 'ene';
        case 'amo':
            return 'ano';
        case 'ama':
            return 'ônô';
        case 'apo':
            return 'ôpo';
        case 'ape':
            return 'ôpe';
        default:
            return face;


    }

}
