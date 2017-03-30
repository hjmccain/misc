$(form).on('submit', function(event) {
  event.preventDefault();
  var form = $(this);
  // .serialize transforms data to HTML notation
  var blockData = form.serialize();

  $.ajax({
    type: 'POST', url: '/blocks', data: blockData
  }).done(function(blockName){
    // put in array so code can be reused w/out alterations
    appendToList([blockName]);
    form.trigger('reset'); // clear form
  });
});

$.get('/blocks', appendToList);

const appendToList = (blocks) => {
  const list = [];
  let content, block;
  for (i in blocks) {
    block = blocks[i];
    content = `<a href="/blocks/${block}">${block}</a>` +
      `<a href="#" data-block="${block}"><img src="delete.jpg"</a>`;
    list.push($('<li>', {text: blocks[i]}));
  }
  $('.block-list').append(list);
}

$('.block-list').on('click', (event) => {
  if (!confirm('Are you sure?')) {
    return false;
  }
  var target = $(event.currentTarget);
  $ajax({
    type: 'DELETE', url: '/blocks' + target.data('block')
  }).done(function() {
    target.parents('li').remove();
  });
}
