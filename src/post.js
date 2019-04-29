$(document).ready(() => {
    console.log('Hello Browser!!!');
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('postname');
    var url = "http://localhost:3000/getPosts/" + myParam;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: (data) =>{
           console.log('You received some data.', data);
           $.each(data, function(index, item) {
                $("#mycontents").append("<div class=\"row post-title\">"+ item.post_title + "</div>");
                $("#mycontents").append("<div class=\"row post-date\">"+ item.post_date +"</div>");
                $("#mycontents").append("<div class=\"row post-summary\">"+ item.post_full +"</div>");
           });
        }
    });
});