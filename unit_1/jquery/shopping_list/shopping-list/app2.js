$(document).ready(function() {

	/*
	to-do:
	- styling
	- fix delete/re-add bug 
	- if ID property is not used to fix bug, remove
	*/

	// STATE //
	var state = { 
		items: [] }

	// MANIPULATE //
	function addItem(state, userInput) {
		state.items.push( { title: userInput })
	}

	function assignId(arrayOfObjects) {
	  arrayOfObjects.map(function (object, index) {
	    object.itemID = (index + 1); 
	  });
	  state.items = arrayOfObjects;
	}

	// RENDER //
	function updateDOM(state, element) {
		$('.shopping-list').children().remove();	

		function findObjectContents(arrayOfObjects) {
			arrayOfObjects.forEach(function (object) {
				var listItem = '<p id="' + object.itemID + '">' + object.title + '</p>',
					checkButton = '<button class="check-button">Check</button>',
					deleteButton = '<button class="delete-button">Delete</button>',
					fullContent = ('<li>' + listItem + checkButton + deleteButton + '</li>');

				$(fullContent).prependTo('.shopping-list');
			});
		}
	assignId(state.items);
	findObjectContents(state.items);
	}

	function checkItem(findListItem) {
		$(findListItem).toggleClass('shopping-item__checked');
	}

	function deleteItem(findListItem) {
		var objID = findListItem.attr('id'),
			aryofObjs = state.items;
			console.log("p ID" + objID);
			$(findListItem).parent('li').remove();
		// // this removes the element temporarily
		// // this removes the element from object array permanently
		// // necessary b/c otherwise element will stay on page until next user action
		for (var i = 0; i < aryofObjs.length; i++) {
			console.log("item ID" + aryofObjs[i].itemID);
			if (aryofObjs[i].itemID == objID) {
				aryofObjs.splice(i, 1);
			}
		}
	}

	// LISTEN //
	$('.shopping-list-add').submit(function(e) {
		e.preventDefault();
		var userInput = $('.shopping-list-add-input').val();
		// pass out commands for next steps
		addItem(state, userInput);
		updateDOM(state, $('.shopping-list'));
		$('.check-button').on('click', handleClick);
		$('.delete-button').on('click', handleDelete);
		$('.shopping-list-add-input').val('');
	});

	function handleClick() {
		var findListItem = $(event.currentTarget).prev();
		checkItem(findListItem);
	}

	function handleDelete() {
		var findListItem = $(event.currentTarget).closest('p');
		deleteItem(findListItem);
	}

});