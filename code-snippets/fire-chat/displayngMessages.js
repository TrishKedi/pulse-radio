firebase.database().ref("messages").on("child_added", function(snapshot) {
    if (snapshot.val().sender == myName) {
        $('<div class="message message-personal">'+
            '<figure class="avatar"><img src="avatar_url_here" /></figure>'+
            '<div id="message-' + snapshot.key + '">' + snapshot.val().message + '</div>'+
            (snapshot.val().time ? '<div class="timestamp">'+ snapshot.val().time +'</div>' : '') +
          '</div>').appendTo($('.mCSB_container')).addClass('new');
    } else {
        $('<div class="message new">'+
            '<figure class="avatar"><img src="avatar_url_here" /></figure>'+
            '<div id="message-' + snapshot.key + '">' + snapshot.val().message + '</div>'+
            (snapshot.val().time ? '<div class="timestamp">'+ snapshot.val().time +'</div>' : '') +
          '</div>').appendTo($('.mCSB_container')).addClass('new');
    }
    updateScrollbar();
});
