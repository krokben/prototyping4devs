const storyboardActions = {
	resizeStoryboard(payload) {
		return {
			type: 'RESIZE_STORYBOARD',
			payload
		}
	}
}

export default storyboardActions;