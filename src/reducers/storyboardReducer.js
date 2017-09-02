export default function storyboardReducer(storyboard = {}, action) {
	switch (action.type) {
		case 'RESIZE_STORYBOARD':
			return {
				...storyboard,
				height: action.payload.height,
				width: action.payload.width
			}
		default:
			return storyboard;
	}
}