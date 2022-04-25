const CONNECTION_FAILED = 'Votre connexion semble dégradée, vérifiez-là puis actualisez la page.';
/**
 *
 * @param {object} error
 */
function handleErrorMessage(error) {
	switch (error.code) {
		case 100:
			return CONNECTION_FAILED;
		default:
			return error.message;
	}
}

export const showError = (errorOrMessage) => (dispatch) => {
		console.error(errorOrMessage);
		dispatch({
			type: 'ERROR',
			message: typeof errorOrMessage === 'string' ? errorOrMessage : handleErrorMessage(errorOrMessage),
		});
	};
export const closeError = () => ({ type: 'CLOSE_ERROR' });

/**
 * load coupon feedback
 * @param {string} message
 * @param {string} [variant]
 */
export const showMessage = (message, variant = 'info') => (dispatch) => {
		dispatch({
			type: 'MESSAGE',
			message,
			variant,
		});
	};

export const closeMessage = () => ({ type: 'CLOSE_MESSAGE' });

/**
 * clear user into localStorage
 */
export function clearUserIntoLocalStorage() {
	localStorage.removeItem(currentUserPath);
}

/**
 * update currentUser into localStorage
 * @param user
 */
export function updateUserIntoLocalStorage(user) {
	if (!user) return null;

	// see updateUserOnDisk(user) .../node_modules/parse/lib/node/ParseUser.js
	const json = user.toJSON();
	delete json.password;
	json.className = '_User';
	const userData = JSON.stringify(json);
	localStorage.setItem(currentUserPath, userData);
}
