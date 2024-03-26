$(document).ready(function() {
    $('#btn-1').click(function() {
        $('.box-1').hide();
    });
});


var mechine_generated_number;
var user_number;

function generateNumber() {
    mechine_generated_number = parseInt(Math.random() * 11);

    document.getElementById('box-4-1').innerHTML = mechine_generated_number;
}

function userNumber() {
    user_number = document.getElementById('input').value;

    document.getElementById('box-5-1').innerHTML = user_number;
}

function checkCondition() {
    if (mechine_generated_number == user_number) {
        document.getElementById('box-6').innerHTML = 'Congratulations!, You win';
        document.getElementById('box-6').style.backgroundColor = '#22bb33';
        document.getElementById('box-4-1').style.backgroundColor = '#22bb33';
        document.getElementById('box-5-1').style.backgroundColor = '#22bb33';
    }
    else
    {
        document.getElementById('box-6').innerHTML = 'Ooops!, Usama win';
        document.getElementById('box-6').style.backgroundColor = '#ff0000';
        document.getElementById('box-4-1').style.backgroundColor = '#5D0E41';
        document.getElementById('box-5-1').style.backgroundColor = '#00224D';

        document.getElementById('btn-3').style.display = 'block';
        document.getElementById('btn-2').style.display = 'none';
        document.getElementById('input').style.display = 'none';
    }
}

function tryAgain() {
    document.getElementById('btn-3').style.display = 'none';
    document.getElementById('btn-2').style.display = 'block';
    document.getElementById('input').style.display = 'block';
}