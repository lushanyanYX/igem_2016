function showInfo(event)
{
    $(event.target).removeAttr('class');
}

function hideInfo(event)
{
    $(event.target).attr('class', 'transparent');
}
$('.portrait').mouseover(showInfo);
$('.portrait').mouseleave(hideInfo);
