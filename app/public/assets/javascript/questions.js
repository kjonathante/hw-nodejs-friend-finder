$('#root').text('Hello')

$.ajax({
  url: '/api/questions',
  method: 'GET'
}).then( 
  function(data, textStatus, jqXHR){
    console.log(data)

    for(let val of data) {
      var p = $('<p>')
      p.text(val.question)
      $('#root').append(p)
    }
  }, 
  function(jqXHR, textStatus, errorThrown){
    console.log(textStatus)
  },
)