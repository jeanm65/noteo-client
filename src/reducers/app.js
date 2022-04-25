const initialState = {
	loading: false,
	error: null,
	message: null,
	variant: null,
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case 'LOADING_START':
			return {
				...state,
				loading: true,
			};
		case 'LOADING_END':
			return {
				...state,
				loading: false,
			};
		case 'ERROR':
			return {
				...state,
				error: action.message,
				variant: 'error',
			};
		case 'CLOSE_ERROR':
			return {
				...state,
				error: null,
			};
		case 'MESSAGE':
			return {
				...state,
				message: action.message,
				variant: action.variant || 'info',
			};
		case 'CLOSE_MESSAGE':
			return {
				...state,
				message: null,
			};
		default:
			return state;
	}
};

export default app;
