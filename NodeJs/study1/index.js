"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile("E:\\studyos\\studyOs\\NodeJs\\study1\\file.txt", "utf8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
