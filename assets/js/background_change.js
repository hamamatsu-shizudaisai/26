$(function () {
    var now_hour = new Date().getHours();
    if (0 <= now_hour && now_hour <= 5) {
        $('header').css('background-image', 'linear-gradient(180deg, #020021,#210a52,#551eac,#917ed0,transparent');
    } else if (6 <= now_hour && now_hour <= 15) {
        $('header').css('background-image', 'linear-gradient(180deg, #1e7cff, #63c1ff,transparent');
    } else if (16 <= now_hour && now_hour <= 18) {
        $('header').css('background-image', 'linear-gradient(180deg, #ff8a8a, #ffc33b,transparent');
    } else if (19 <= now_hour && now_hour <= 23) {
        $('header').css('background-image', 'linear-gradient(180deg, #020021,#210a52,#551eac,#917ed0,transparent');
    }
});