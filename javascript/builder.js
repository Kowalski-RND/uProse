var compileProse = function () {
    conf[0].title = $('#title').val();
    conf[0].tagline = $('#tagline').val();
    conf[0].copy = $('#copyright').val();
    conf[0].lpid = nlpid;
    var zip = new JSZip();
    zip.file("index.html", genHTML());
    var stor = zip.folder("stor");
    stor.file("entries.json", JSON.stringify(entries));
    stor.file("conf.json", JSON.stringify(conf));
    var css = zip.folder("css");
    css.file("main.css", getCSS());
    var content = zip.generate();
    location.href = "data:application/zip;base64," + content;
};

var genHTML = function() {
    //This is gonna suck to make
    //and the page isn't that complicated.
    var converter = new Markdown.Converter();
    var buf = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><!--if lt IE 9--><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]--><link rel="stylesheet" href="css/main.css"><title>' + conf[0].title + '</title></head><body><div class="wrapper"><header><h1>' + conf[0].title + '</h1><p>' + conf[0].tagline + '</p></header><section>';
    for (var i = entries.length - 1; i >= 0; i--) {
        var entry = entries[i].entry,
            meta  = entries[i].meta;
        buf = buf + '<article><h3>' + entry.title + '</h3>' + converter.makeHtml(entry.body) + '<small>posted on ' + meta.postedOn + '.</small></article><hr>';
    }
    buf = buf + '</section><footer><small>' + conf[0].copy + '</small></footer></div></body></html>';
    return buf;
}

var getCSS = function() {
    return '@import url(https://fonts.googleapis.com/css?family=Lato:300italic,700italic,300,700);body{padding:50px;font:14px/1.5 Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;color:#000;font-weight:300}h1,h2,h3,h4,h5,h6{color:#222;margin:0 0 20px}p,ul,ol,table,pre,dl{margin:0 0 20px}h1,h2,h3{line-height:1.1}h1{font-size:28px}h2{color:#393939}h3,h4,h5,h6{color:#494949}a{color:#39c;font-weight:400;text-decoration:none}a small{font-size:12px;color:#000;margin-top:-0.6em;display:block}.meta{display:inline-block}.tags{display:inline-block;float:right}.wrapper{width:860px;margin:0 auto}blockquote{border-left:1px solid #e5e5e5;margin:0;padding:0 0 0 20px;font-style:italic}code,pre{font-family:Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal;color:#333;font-size:12px}pre{padding:8px 15px;background:#f8f8f8;border-radius:5px;border:1px solid #e5e5e5;overflow-x:auto}table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:5px 10px;border-bottom:1px solid #e5e5e5}dt{color:#444;font-weight:700}th{color:#444}img{max-width:100%}header{width:270px;float:left;position:fixed}header ul{list-style:none;height:40px;padding:0;background:#eee;background:-moz-linear-gradient(top, #f8f8f8 0%, #ddd 100%);background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #f8f8f8), color-stop(100%, #ddd));background:-webkit-linear-gradient(top, #f8f8f8 0%, #ddd 100%);background:-o-linear-gradient(top, #f8f8f8 0%, #ddd 100%);background:-ms-linear-gradient(top, #f8f8f8 0%, #ddd 100%);background:linear-gradient(top, #f8f8f8 0%, #ddd 100%);border-radius:5px;border:1px solid #d2d2d2;box-shadow:inset #fff 0 1px 0,inset rgba(0,0,0,0.03) 0 -1px 0;width:270px}header li{width:89px;float:left;border-right:1px solid #d2d2d2;height:40px}header ul a{line-height:1;font-size:11px;color:#999;display:block;text-align:center;padding-top:6px;height:40px}strong{color:#222;font-weight:700}header ul li+li{width:88px;border-left:1px solid #fff}header ul li+li+li{border-right:none;width:89px}header ul a strong{font-size:14px;display:block;color:#222}section{width:500px;float:right;padding-bottom:50px}small{font-size:12px}hr{border:0;background:#e5e5e5;height:1px;margin:0 0 20px}footer{width:270px;float:left;position:fixed;bottom:50px}@media print, screen and (max-width: 960px){div.wrapper{width:auto;margin:0}header,section,footer{float:none;position:static;width:auto}header{padding-right:320px}section{border-width:1px 0;padding:20px 0;margin:0 0 20px}header a small{display:inline}header ul{position:absolute;right:50px;top:52px}}@media print, screen and (max-width: 720px){body{word-wrap:break-word}header{padding:0}header ul,header p.view{position:static}pre,code{word-wrap:normal}}@media print, screen and (max-width: 480px){body{padding:15px}header ul{display:none}}@media print{body{padding:0.4in;font-size:12pt;color:#444}}';
}

