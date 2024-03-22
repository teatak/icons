const path = require('path')

function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map(({ path: filePath, originalPath }) => {
        const basename = path.basename(filePath, path.extname(filePath))
        let exportName = /^\d/.test(basename) ? `_${basename}` : basename
        if (exportName.slice(-4) === "24Px") {
            exportName = exportName.slice(0, -4)
        }
        return `export { default as ${exportName} } from './${basename}'`
    })
    return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate