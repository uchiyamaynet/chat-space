$(function(){
  function buildHTML(message) {
    // let img = message.image ? `<img src = ${message.image} >` : ” “;
    let img = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`;
    let html =`
                <div class="message" data-message-id="${message.id}">
                    <div class="message__upper__info">
                      <div class="message__upper__info__talker">
                      ${message.user_name}
                      </div>
                      <div class="message__upper__info__date">
                      ${message.date}
                      </div>
                    </div>
                    <div class="message__text">
                      <p class="lower-message__content">
                      ${message.content}
                      </p>
                      ${img}
                    </div>
                  </div> `
    return html;
  }
  
  $("#new_message").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

      $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false     
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
      $('.submit-btn').prop('disabled', false);
    })
  })

    let reloadMessages = function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
        let last_message_id = $('.message:last').data("message-id");

        $.ajax({
          url: "api/messages",
          type: 'GET',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          var insertHTML = '';
          messages.forEach(function (message) {
          insertHTML = buildHTML(message)
          $('.messages').append(insertHTML); 
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHHeight},'fast');
          })
        })
        .fail(function() {
          alert('更新に失敗しました');
        });
      };
    }
  setInterval(reloadMessages, 7000); 
})


