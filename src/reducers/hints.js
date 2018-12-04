import types from 'constants/ActionTypes';

const _defaultState = { alreadySaw: {}};

export default function (state = _defaultState, action) {
	switch (action.type) {
		case types.RESET_HINTS:
			return { ...state, alreadySaw: {} };
		case types.SET_HINT:
			return { ...state, alreadySaw: {...state.alreadySaw, [action.hintName]: true} };
		default:
			return state;
	}
}