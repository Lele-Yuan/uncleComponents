module.exports = {
	"extends": [
		"stylelint-config-standard",
		"stylelint-config-standard-vue"
    ],
	"overrides": [
		{
			files: ['**/*.(html|vue)'],
			customSyntax: 'postcss-html'
		}
	],
	"ignoreFiles": [
		"dist/**",
		"**/lib/*"
	],
	"rules": {
	}
}
