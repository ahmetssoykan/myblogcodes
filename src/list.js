$(document).ready(() => {
    console.log('Hello Browser!!!');
    var url = "http://localhost:3000/getAllPosts/";
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: (data) =>{
           console.log('You received some data.', data);
           $.each(data, function(index, item) {
                $("#mytable").append("<tr><td>"+ "<a class=\"nav-link\" href=\"/posts?postname="+ item.post_title + "\">"+ item.post_title +"</a></td></tr>");
           });
        }
    });
});