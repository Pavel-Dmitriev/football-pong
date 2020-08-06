/*Нужно написать с использованием jQuery код следующей функциональности: при клике на мяч, он должен перелетать (с анимацией) в противоположную сторону поля.
При этом по оси X (горизонталь) мяч всегда должен находиться либо в левой крайней, либо в правой крайней части поля,
а по оси Y (вертикаль) его положение должно меняться при каждом “ударе” (но при этом за границы поля он вылетать не должен).
При попадании мяча в зону ворот выводить на экран сообщение “Гол!”. Текущий счет игры отобразить в режиме онлайн на самой странице.*/

$('.ball').on('click', function (e) {
    e.preventDefault();
    //Определение высоты и широты элементов на странице
    let heightNoBall = $('.field').height() - $('.ball').height(),
        widthNoBall = $('.field').width() - $('.ball').width(),
        ball = $('.ball');

    //Генерация рандомного числа по высоте
    let randomTopPosition = Math.floor(Math.random() * Math.floor(heightNoBall));

    //Счетчик голов
    let teamLeft = $('.team-left');
    let teamRight = $('.team-right');

    function goalCounter(team) {
        let teamParse = parseFloat(team.text());
        team.text(teamParse += 1);
    }

    //Функция определения попадания мяча в любые из ворот
    function goal() {
        if (ball.offset().top > (heightNoBall / 2) - 80 && ball.offset().top < (heightNoBall / 2) + 80) {
            alert('Гооол!!!');

            if (ball.offset().left === 1795) {
                console.log('Команда team-left забила гол!!!');
                goalCounter(teamLeft);
            } else if (ball.offset().left === 8) {
                console.log('Команда team-right забила гол!!!');
                goalCounter(teamRight);
            }
        }
    }

    //Условие нахождения мяча
    if (ball.offset().left === 8) {
        $('.ball').animate({
            'top': randomTopPosition,
            'left': widthNoBall
        }, 300, function () {
            console.log('Клик по мячу слева: ' + ball.offset().left + ' по Х, ' + randomTopPosition + ' по Y');
            goal(randomTopPosition);
        });
    } else {
        $('.ball').animate({
            'top': randomTopPosition,
            'left': 0
        }, 300, function () {
            console.log('Клик по мячу справа: ' + ball.offset().left + ' по Х, ' + randomTopPosition + ' по Y');
            goal(randomTopPosition);
        });
    }
});

