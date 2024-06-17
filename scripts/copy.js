const fs = require('fs');
const path = require('path');

// Specify the directory you want to traverse
const dirPath = '../material-design-icons/src'

function walk(dir, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            var filepath = path.join(dir, file);
            fs.stat(filepath, function (err, stats) {
                if (stats.isDirectory()) {
                    walk(filepath, callback);
                } else if (stats.isFile()) {
                    callback(filepath, stats);
                }
            });
        });
    });
}

walk(dirPath, (p, stats) => {
    const arr = p.split("/")
    if (arr[6] == "24px.svg") {
        let name = ""
        if (arr[5].replace("materialicons", "") == "") {
            name = arr[4] + "_" + arr[6]
        } else {
            name = arr[4] + "_" + arr[5].replace("materialicons", "") + "_" + arr[6]
        }
        console.log(p, name)
        fs.copyFile(p, './src/files/' + name, (err) => {
            if (err) throw err;
        });
    }
});
