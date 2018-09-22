
$.ajax({
  url: '/api/answers/1',
  method: 'GET'
}).then( 
  function(data, textStatus, jqXHR){
    console.log(data)
    var img = $('<img>')
    img.attr('src', data.data.photo)
    $('body').append( img )
  }, 
  function(jqXHR, textStatus, errorThrown){
    console.log(textStatus)
  },
)

