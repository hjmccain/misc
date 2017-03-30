import * as actions from '../actions/index';
const initial = {
  secretNumber: 0,
  guess: [],
  message: '',
	bestScore: Infinity
};

export const gameReducer = function(state = initial, action) {

  switch (action.type) {
		case actions.NUMBER_GEN:
    return {...state,
      secretNumber: action.number
    };

		case actions.FETCH_SUCCESS:
			return {
				...state,
				bestScore: action.num
			};

			case actions.SAVE_SUCCESS:
				console.log('save success');

  	case actions.SUBMIT_GUESS:
			let newMessage = '';
			let userGuess = +action.guess;
      let difference = Math.abs(userGuess - state.secretNumber);

			if (userGuess.toString() === NaN.toString()) {
				return {...state,
		      guess: [...state.guess],
		      message: "Please enter a number!"
		    };
			}
      if (userGuess === state.secretNumber) {
        newMessage = "Correct!"
      }
      if ((difference > 0) && (difference <= 5)) {
        newMessage = "Getting hot!"
      }
      if ((difference > 5) && (difference <= 10)) {
        newMessage = "Getting warmer!"
      }
      if ((difference > 10) && (difference <= 15)) {
        newMessage = "Cooling off..."
      }
      if (difference > 15) {
        newMessage = "Ice cold!"
      }

			return {...state,
	      guess: [...state.guess, action.guess],
	      message: newMessage
	    };

  	case actions.NEW_GAME:
			console.log('Time for a new game')
			return Object.assign({}, initial);
  default:
		return state;
	}
}
