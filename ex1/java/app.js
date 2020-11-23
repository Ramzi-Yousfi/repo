
$('button').on('click',function(){
    $('textarea').css({border:'solid red 2px'});
    $( "<p>hello</p><p>hello</p>" ).appendTo( "body" ).css({border:'solid red 2px'});
})
// $('button').on('click', function(){
//     $( "textarea" ).css ("border", "2px solid red" )
//     .add( "p" )
//     .css( "border", "2px solid red" );
// });