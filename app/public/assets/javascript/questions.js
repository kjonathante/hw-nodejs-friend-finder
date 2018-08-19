
$.ajax({
  url: '/api/questions',
  method: 'GET'
}).then( 
  function(data, textStatus, jqXHR){
    console.log(data)
  
    let i=1
    for(let val of data) {
      var div$ = $('<div>')
      var p$ = $('<p>')
      p$.text(val.question)
      div$.append(p$, printRadio('ans'+i))
      $('#root').append(div$)
      i++;
    }
    const btn$ = $('<button>')
    btn$.text('Submit')
    $('#root').append(btn$)
  }, 
  function(jqXHR, textStatus, errorThrown){
    console.log(textStatus)
  },
)

function printRadio(id) {
  const div$ = $('<div>')
  for(let i = 1; i<6; i++) {
    const span$ = $('<span>')
    const input$ = $('<input>')
    input$.attr({
      type: 'radio',
      id: i,
      name: id,
      value: i,
    })
    const label$ = $('<label>')
    label$.text(i)
    span$.append(input$,label$)
    div$.append(span$)
  }
  return div$
}

$( "#root" ).submit(function( event ) {
  event.preventDefault();
  console.log( objectifyForm( $(this).serializeArray() ) );
  $.ajax({
    url: '/api/answers',
    method: 'POST',
    data: objectifyForm( $(this).serializeArray() ),
    contentType: 'application/json',
  }).then( 
    function(data, textStatus, jqXHR){
      console.log(data)
    }, 
    function(jqXHR, textStatus, errorThrown){
      console.log(textStatus)
    },
  )
});

// [{name: 'ans1', value: '1'}, {…}]
function objectifyForm(formArray) {//serialize data function

  var obj = {}

  for (let val of formArray) {
    obj[val.name] = val.value
  }

  return JSON.stringify(obj);
}