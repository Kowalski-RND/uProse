console.log('powered by μProse');

var loadConf = function() {
    $.getJSON('stor/conf.json', function(data) {
        renderConf(data.ubang);
    });
}

var loadEntries = function() {
     $.getJSON('stor/entries.json', function(data) {
        return data;
    });
}

var renderConf = function(conf) {
    $('#upr-headline').html(Mustache.render('{{headline}}', conf));
    $('#upr-tagline').html(Mustache.render('{{tagline}}', conf));
    $('#upr-social').html(Mustache.render('{{{social}}}', conf));
    $('#upr-intro').html(Mustache.render('{{intro}}', conf));
    $('#upr-bio').html(Mustache.render('{{{bio}}}', conf));
    $('#upr-copyright').html(Mustache.render('{{{copy}}}', conf));
}

var startU = function() {
    loadConf();
    loadEntries();
}

$(document).ready(function() {
    startU();
});
