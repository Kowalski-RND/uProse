console.log('powered by μProse.\nhttps://github.com/BrandonKowalski/uProse');

var loadConf = function() {
    $.getJSON('stor/conf.json', function(data) {
        renderConf(data.ubang);
    });
}

var loadEntries = function() {
     $.getJSON('stor/entries.json', function(data) {
         renderEntries(data.entries);
    });
}

var renderConf = function(conf) {
    $('#upr-headline').html(Mustache.render('{{{headline}}}', conf));
    $('#upr-tagline').html(Mustache.render('{{{tagline}}}', conf));
    $('#upr-social').html(Mustache.render('{{{social}}}', conf));
    $('#upr-intro').html(Mustache.render('{{{intro}}}', conf));
    $('#upr-bio').html(Mustache.render('{{{bio}}}', conf));
    $('#upr-copyright').html(Mustache.render('{{{copy}}}', conf));
}

var renderEntries = function(entries) {
    var buf = '';
    for (var i = 0; i < entries.length; i++) {
        buf = buf + buildEntry(entries[i].meta, entries[i].entry);
    }
    $('#uprose').append(buf);
}

var buildEntry = function(meta, entry) {
    return '<article><h3>' + entry.title + '</h3><p>' + entry.body + '</p></article><hr>';
}

var startU = function() {
    loadConf();
    loadEntries();
}

$(document).ready(function() {
    startU();
});
