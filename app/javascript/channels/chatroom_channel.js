import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $("#messages-container")[0].innerHTML += data.mod_message;
    // console.log($("#messages-container")[0].append = "hola")
    // $("#messages-container")[0].append = data.mod_message;
  }
});
