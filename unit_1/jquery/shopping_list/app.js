	// State -> DOM -> User Action -> State -> DOM ... 

	//STATE MODIFICATION
	/*
	- needs: state, userInput
	- creates new object using user input
	- pushes object to state object array
	*/

	//STATE RENDERING
	/*
	- needs: state, element to update
	- uses jQuery to add html/css to element (iterates over all items)
	- replaces old HTML element with updated HTML element
	*/

	//EVENT LISTENER
	/*
	- needs: user input
	- grabs text from input field when "submit" button is clicked
	- passes info to addItem
	- passes info to updateList
	- >> form resets
	*/


$(document).ready(function(){

	var state = {
		items: []
		//
		// items: [
		//   { title: 'Apples', checked: false, id: '1' }
		//   { title: 'Pears', checked: true, id: '2' }
		//]
	}

	//state modification functions
	var addItem = function (state, userInput) {
		var newObject = {
			title: userInput,
			checked: false, 
			id: (state.items.length + 1)
		}

		state.items.push(newObject);

		console.log("state modification " + newObject);
	}

	// var toggleStatus = function (state, itemId) {
	// 	var item = state.items.findById(itemId)
	// 	item.checked = !item.checked
	// }

	//state rendering functions
	var updateHtml = function (state, element) {
		var checkButton = '<button class="check-button">Check</button>';
		var deleteButton = '<button class="delete-button">Delete</button>';

		var itemsHtml = state.items.map(function(item) {

			var itemID = item.id,
			toDoItem = '<li class="shopping-item">' + item.title + '</li>';

			// item.title;
			
			// $(toDoItem).addClass('shopping-item__checked');
			// '<span>' + $(item.title).addClass('shopping-item') + '</span>',

			// if (itemID === false) {
			// 	var eachItem = '<li>' + toDoItem + '</li>'
			// }

			// ('<li><span class="shopping-item">' + toDoItem + '\
			//  </span><div class="shopping-item-controls">\
			//  ' + checkButton + deleteButton + '\
			//  </div></li>')

			return (toDoItem + checkButton + deleteButton);

			// ('<li>' + toDoItem + '</li>' + checkButton + deleteButton); 
		});
		
		// Replace the entire HTML element
		element.html(itemsHtml);

	};

	//event listeners
	$('.shopping-list-add').submit(function(event){
		event.preventDefault();
		var userInput = $('.shopping-list-add-input').val();

		addItem(state, userInput);
		updateHtml(state, $('.shopping-list'));
	});

	$('.check-button').on('click', function() {
		$(this).parents('li');

	});

});















