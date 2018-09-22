
//start here
var welcomeBtn = $('<button>').text('Welcome to Friend Finder')
welcomeBtn.attr({id: 'welcomeBtn'})
$('#root').append( welcomeBtn )


$(document).on('click', '#welcomeBtn', function(){
  $('#root').children().remove()

  const form = $('<form>')
  form.attr({id: 'questionsFrm'})

  const div = $('<div>')
  const label = $('<label>')
  label.attr({for: 'username'})
  label.text('Username')
  const input = $('<input>')
  input.attr({ type: 'text', name: 'username', id: 'username'})
  div.append(label, input)

  const div1 = $('<div>')
  const label1 = $('<label>')
  label1.attr({for: 'photo_url'})
  label1.text('Photo URL')
  const input1 = $('<input>')
  input1.attr({ type: 'url', name: 'photo_url', id: 'photo_url'})
  div1.append(label1, input1)

  const div2 = $('<div>')
  const label2 = $('<label>')
  label2.attr({for: 'file-select'})
  label2.text('Upload Photo')
  const input2 = $('<input>')
  input2.attr({ type: 'file', name: 'photos[]', id: 'file-select'})
  div2.append(label2, input2)

  const btn = $('<button>')
  btn.text('Submit')
  btn.attr({id: 'submitAnswerBtn'})

  form.append(div, div1, div2, showQuestions(), btn)
  $('#root').append(form)

})

function showQuestions() {
  let result = $('<div>')
  $.ajax({
    url: '/api/questions',
    method: 'GET'
  }).then( 
    function(data, textStatus, jqXHR){
      console.log(data)
    
      let i=1
      for(let val of data) {
        const div$ = $('<div>')
        const p$ = $('<p>')
        p$.text(val.question)
        div$.append(p$, printRadio('ans'+i))
        //$('#root').append(div$)
        result.append( div$ )
        i++;
      }
    }, 
    function(jqXHR, textStatus, errorThrown){
      console.log(textStatus)
    },
  )
  return result
}

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

$( document ).on( 'submit', '#questionsFrm', function( event ) {
  event.preventDefault();

  var obj = objectifyForm( $(this).serializeArray() )
  console.log( 'Inside submit --> obj: ', JSON.stringify(obj))

  var fileSelect = document.getElementById('file-select')

  if (fileSelect.files[0]) {
    var fileReader = new FileReader()
    fileReader.onloadend = function() {
      obj.photo = fileReader.result
      send()
    }
    fileReader.readAsDataURL( fileSelect.files[0] )  
  } else {
    send()
  }

  function send() {
    $.ajax({
      url: '/api/answers',
      method: 'POST',
      data: JSON.stringify(obj),
      contentType: 'application/json',
    }).then( 
      function(data, textStatus, jqXHR){
        console.log(data)
        //showMatch( data.insertId )
      }, 
      function(jqXHR, textStatus, errorThrown){
        console.log(textStatus)
      },
    )
  }
});

// [{name: 'ans1', value: '1'}, {…}]
function objectifyForm(formArray) {//serialize data function

  var obj = {}

  for (let val of formArray) {
    obj[val.name] = val.value
  }

  return obj;
}

function showMatch( user ) {
  $('#root').children().remove()

  $.ajax({
    url: '/api/answers/' + user,
    method: 'GET'
  }).then( 
    function(data, textStatus, jqXHR){
      console.log(data)
      var img = $('<img>')
      img.attr('src', data.data.photo)
      $('#root').append( img )
    }, 
    function(jqXHR, textStatus, errorThrown){
      console.log(textStatus)
    },
  )
  
}