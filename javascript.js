console.log('hello there');
var thestring = '';

function action(sender) {
    var hey = sender.innerHTML;
    hey = hey.replace('<span>', '');
    hey = hey.replace('</span>', '');

    preceed(hey);

    switch(hey){
        case '1':
            thestring += '1';
            break;
        case '2':
            thestring += '2';
            break;
        case '3':
            thestring += '3';
            break;
        case '4':
            thestring += '4';
            break;
        case '5':
            thestring += '5';
            break;
        case '6':
            thestring += '6';
            break;
        case '7':
            thestring += '7';
            break;
        case '8':
            thestring += '8';
            break;
        case '9':
            thestring += '9';
            break;
        case '+':
            thestring += '+';
            break;
        case '-':
            thestring += '-';
            break;
        case '÷':
            thestring += '÷';
            break;
        case '+/-':
            thestring += '+/-';
            break;
        case '.':
            thestring += '.';
            break;
        case '0':
            thestring += '0';
            break;
        case 'x':
            thestring += 'x';
            break;
        case '=':
            thestring += '=';
            break;
    };

    document.getElementById("thestring").innerHTML = thestring;

};

function preceed(toAdd){
    str = toAdd.slice(-1);
    str2 = toAdd.slice(-1,-3)
    if (str == '1','2','3','4','5','6','7','8','9','0'){
        return true
    } else {
        return false
    };
};
