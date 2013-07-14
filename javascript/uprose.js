//@codekit-prepend "application.js", builder.js";
console.log('powered by &mu;Prose.\nhttps://github.com/BrandonKowalski/uProse');

var conf, entries, currentPost, newPostFlag, dirtyBit, nlpid;

function loadBody(entry) {
   editor.setValue(entry.body);
}
function loadProse() {
    confLoad();
    entriesLoad();
    $('#startScreen').hide();
    $('#builder').show();
}

function confLoad(result) {
     $.getJSON('../stor/conf.json', function(result) {
        conf = result;
        nlpid = conf[0].lpid;
        printConf(result[0]);
    });
}

function entriesLoad(result) {
    $.getJSON('../stor/entries.json', function(result) {
        entries = result;
        printEntries(result);
    });
}

function printConf(conf) {
    $('#title').val(conf.title);
    $('#tagline').val(conf.tagline);
    $('#copyright').val(conf.copy);
}

function printEntries(entries) {
    var buf = '';
    for (var i = entries.length - 1; i >= 0; i--) {
        buf = buf + '<h4>' + entries[i].entry.title + ' <button onclick="loadPost(' + i + ')"">Load</button></h4>';
    }
    $('#entries').html(buf);
}

function loadPost(id) {
    currentPost = id;
    newPostFlag = false;
    var entry = entries[id].entry;
    $('#editPane').show();
    $('#postTitle').val(entry.title);
    editor.setValue(entry.body);
}

function newPost() {
    newPostFlag = true;
    $('#editPane').show();
    $('#postTitle').val('');
    editor.setValue('');
}

function savePost() {
    if (newPostFlag) {
        var d = new Date();
        var date = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
        var build = {
                "meta": {
                    "postedOn": date,
                    "id": nlpid++
                },
                "entry": {
                    "title": $('#postTitle').val(),
                    "body": editor.getValue()
                }
            };
        entries.push(build);
        newPostFlag = false;
        currentPost = entries.length - 1;
        printEntries(entries);
    }
    else {
        var id = currentPost;
        entries[id].entry.title =  $('#postTitle').val();
        entries[id].entry.body  =  editor.getValue();
        printEntries(entries);
    }
}
