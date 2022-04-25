/**
 *
 * @param {*} values email, rememberMe, password
 * @returns
 */
export const login = (values) => {
	return (dispatch) => {
		const { email, rememberMe } = values;
		dispatch({
			type: 'LOGIN_SUCCESS',
			user: {
				email,
				rememberMe,
			},
		});
	};
};
