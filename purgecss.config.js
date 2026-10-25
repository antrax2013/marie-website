module.exports = {
	content: ['build/assets/*.js'],
	css: ['build/assets/*.css'],
	output: 'build/assets/',
	safelist: [/^p-toast/, 'p-ripple-disabled'],
};

// "postbuild": "react-spa-prerender && purgecss -v --css build/assets/_.css --content build/_.html build/assets/\*.js --output . --safelist p-toast p-toast-top-right p-ripple-disabled p-toast-message p-toast-message-content p-toast-message-success p-toast-message-enter-done p-icon p-toast-message-icon p-toast-message-text p-toast-summary p-toast-detail p-toast-icon-close p-link"
