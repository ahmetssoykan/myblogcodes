$(document).ready(() => {
    console.log('Hello Browser!!!');
    var url = "http://localhost:3000/getPosts";
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: (data) =>{
           console.log('You received some data.', data);
           $.each(data, function(index, item) {
                $("#mycontents").append("<div class=\"row post-title\">"+ item.post_title + "</div>");
                $("#mycontents").append("<div class=\"row post-date\">"+ item.post_date +"</div>");
                $("#mycontents").append("<div class=\"row post-summary\">"+ item.post_summary +"</div>");
                $("#mycontents").append("<div class=\"row read-more justify-content-end\"><a class=\"nav-link\" href=\"/posts?postname="+ item.post_title + "\">...read more</a></div>");
           });
        }
    });
});