$('.conLeft li').on('click', function () {
	$(this).addClass('bg').siblings().removeClass('bg');
	var intername = $(this).children('.liRight').children('.intername').text();
	$('.headName').text(intername);
	$('.newsList').html('');
})
$('.sendBtn').on('click', function () {
	var news = $('#dope').val();
	if (news == '') {
		alert('Type something.');
	} else {
		$('#dope').val('');
		var str = '';
		str += '<li>' +
			'<div class="nesHead"><img src="./asset/images/chatRoom/6.jpg"/></div>' +
			'<div class="news">' + news + '</div>' +
			'</li>';
		$('.newsList').append(str);
		setTimeout(answers, 1000);
		$('.conLeft').find('li.bg').children('.liRight').children('.infor').text(news);
		$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight);
	}

})
function answers() {
	var arr = [
		'How are you doing?',
		'Good to see you',
		'Long time no see',
		'How have you been?',
		'You are so cute.',
		'Why don’t we give this a try?',
		'So do I．',
		'Take it easy．',
		'Time is money',
		'You bet!',
		'So far，So good．',
		'Keep in Touch.',
		'It’s a nice day!',
		'It’s a lovely day today.Have you been doing anything outside ? ',
		'I watched the latest episode of “Black Mirror” last night.Did you see it ? ',
		'Did you have a good day at work ? ',
		'It’s been nice talking to you.',
		'Have a safe trip home.I hope to see you again.',
		'Bye for now.See you next time.',
	];
	var aa = Math.floor((Math.random() * arr.length));
	var answer = '';
	answer += '<li>' +
		'<div class="answerHead"><img src="./asset/images/chatRoom/tou.jpg"/></div>' +
		'<div class="answers"><img class="jiao" src="./asset/images/chatRoom/jiao.jpg">' + arr[aa] + '</div>' +
		'</li>';
	$('.newsList').append(answer);
	$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight);
}
$('.ExP').on('mouseenter', function () {
	$('.emjon').show();
})
$('.emjon').on('mouseleave', function () {
	$('.emjon').hide();
})
$('.emjon li').on('click', function () {
	var imgSrc = $(this).children('img').attr('src');
	var str = "";
	str += '<li>' +
		'<div class="nesHead"><img src="./asset/images/chatRoom/6.jpg"/></div>' +
		'<div class="news"><img class="Expr" src="' + imgSrc + '"></div>' +
		'</li>';
	$('.newsList').append(str);
	$('.emjon').hide();
	$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight);
})

$('input').bind('keydown', function (event) {
	if (event.keyCode == "13") {
		var news = $('#dope').val();
		if (news == '') {
			alert('Type something.');
		} else {
			$('#dope').val('');
			var str = '';
			str += '<li>' +
				'<div class="nesHead"><img src="./asset/images/chatRoom/6.jpg"/></div>' +
				'<div class="news">' + news + '</div>' +
				'</li>';
			$('.newsList').append(str);
			setTimeout(answers, 1000);
			$('.conLeft').find('li.bg').children('.liRight').children('.infor').text(news);
			$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight);
		}
	}
});
