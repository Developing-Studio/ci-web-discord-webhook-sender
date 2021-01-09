$(document).ready(function() {
    $('.textarea').on( 'keyup', 'textarea', function (e){
        $(this).css('height', 'auto' );
        $(this).height( this.scrollHeight );
    });
    $('.textarea').find( 'textarea' ).keyup();
});

function getProfile() {
    let profile = document.getElementById('webhook_profile').value;
    if (profile === '') profile = "https://discord.com/assets/6debd47ed13483642cf09e832ed0bc1b.png";
    document.getElementById('profile').src = profile;
}

function getName() {
    let name = document.getElementById('webhook_name').value;
    if (name === '') name = "Captain Hook";
    document.getElementById('name').innerText = name;
}

function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (String(minutes).length === 1) {
        minutes = '0' + minutes;
    }

    if (String(minutes).length === 0) {
        minutes = '00'
    }

    if (hours > 0 && hours <= 11) {
        document.write('오늘 오전 ' + hours + ':' + minutes);
    }
    else if (hours === 0) {
        document.write('오늘 오전 12:' + minutes);
    }
    else if (hours === 12) {
        document.write('오늘 오후 12:' + minutes);
    }
    else {
        document.write('오늘 오후 ' + (hours - 12) + ':' + minutes);
    }
}

function getText() {
    document.getElementById('text').innerText = document.getElementById('textarea').value;
}

function displayEmbed() {
    const embed = document.getElementById('cbx').checked
    if (embed === true) {
        document.getElementsByClassName('textarea')[0].style.display = 'none';
    }
    else {
        document.getElementsByClassName('textarea')[0].style.display = 'inline';
    }
}

function send() {
    const request = new XMLHttpRequest();
    const url = document.getElementById('webhook_url').value
    const name = document.getElementById('webhook_name').value
    const profile = document.getElementById('webhook_profile').value
    const content = document.getElementById('textarea').value

    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: name,
        avatar_url: profile,
        content: content
    };
    request.send(JSON.stringify(params));
    swal({
        title: '성공!',
        text: '웹후크가 전송되었습니다.',
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#7289DA",
        timer: 1500,
    });
}