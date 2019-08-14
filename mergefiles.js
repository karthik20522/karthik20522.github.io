var glob = require("glob");
var concat = require('concat-files');

var getDirectories = function (src, callback) {
    glob(src + '/**/*.html', callback);
};

getDirectories('page_source', function (err, res) {
    if (err) {
        console.log('Error', err);
    } else {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i]);
            var fileName = res[i].split("/").pop();
            var year = res[i].split("/").reverse()[1];

            concat([
                'page_source/header/header.html',
                res[i],
                'page_source/footer/footer.html'
            ], '/work/karthik20522.github.io/pages/' + year + '/' + fileName, function (err) {
                if (err) throw err
                console.log('done');
            });
        }
    }
});