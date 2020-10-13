const normalizedPath = require('path').join(__dirname, '')

const models = {}
require('fs')
	.readdirSync(normalizedPath)
	.forEach(file => {
		if (file.includes('.js')) {
			const fileName = file.split('.')[0]
			models[fileName] = use(`App/Models/${fileName}`)
		}
	})

module.exports = { ...models }