$('.message-input').keypress(function(e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
});

function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') return false;
    sendMessage();
}

function sendMessage() {
    var message = $('.message-input').val();
    myName = getCookie("alias-name");
    firebase.database().ref("messages").push().set({
        "message": message,
        "sender": myName ? myName : 'Anonymous',
        "time": showTime(),
        "date": date,
        "timestamp": new Date()
    });
}

function deleteMessage(self) {
    var messageId = self.getAttribute("data-id");
    firebase.database().ref("messages").child(messageId).remove();
}
