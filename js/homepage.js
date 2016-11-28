var tem = 'h';
var prev = 0;
$(document).ready(function() {
    $('#fullpage').fullpage({
        //sectionsColor: ['white', '#cecece', 'white', '#cecece', 'white', '#434343'],
        //anchors:['s1', 's2', 's3', 's4', 's5', 's6'],
        afterLoad: function(anchorLink, index)
        {
            stop(prev);
            play(index);
        },

        onLeave: function(index, nextIndex, direction)
        {
            prev = index;
        }
    });
    $(".dropdown-submenu")
        .mouseenter(function() {
            $(this).parent('li').addClass('active');
        })
        .mouseleave(function() {
        $(this).parent('li').removeClass('active');
    });
});

var imgUrlPrefix = 'img/';
var img = ['', '']
function play(index)
{
    if(index > 2 && index < 6)
    {
        var imgUrl = imgUrlPrefix + (index-1) + (index==3?tem:'') + '.gif';
        $('.s' + (index-1) + '-gif').attr('src', imgUrl);
    }
}

function stop(index)
{
    if(index > 2 && index < 6)
    {
        var imgUrl = imgUrlPrefix + (index-1) + (index==3?tem:'') + '-ini.png';
        $('.s' + (index-1) + '-gif').attr('src', imgUrl);
    }
}

temSwitch($('.s2-switch'));
stop(3);
stop(4);
stop(5);

function temSwitch(obj)
{
    tem = tem == 'c' ? 'h' : 'c';
    $(obj).attr('src', imgUrlPrefix + tem + '.png');
    play(3);
}


var pt = 0;
var cls = ['arrow', 'arrow transparent']
setInterval(function(){$('#arrow').attr('class', cls[pt = (pt+1)%2]);}, 1000);

function arrowClick()
{
    $.fn.fullpage.moveSectionDown();
}

$('nav').css('top', $('#top_menu_14').innerHeight() + 'px');
