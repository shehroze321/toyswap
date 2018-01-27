//This file is for the single products page only.

$(document).ready(function () {
  let toggleChat = false;
  let socket;
  let otherUserName;
  let currentUser;
  let userId;
  let productId;
  let users = [];

  $('#msgDiv').html('<small><i>Chat area...</i></small>');
  $('#topDiv').append('<div id="chatBox" class=""></div>');
  $('#bottDiv').append('<input type="text" class="" id="txtBox" style="background-color:white; margin-top: 10px;">');
  $('#bottDiv').append('<button id="submitBtn" class="btn waves-effect waves col s12 grey darken-1">Submit</button>');

  let modalMsg = function (msg) {
    $('#myModal').css('display', 'block');
    $('#modalPMsg').html('<p>' + msg + '</p>');
    $('#modalOfferBtn').css('visibility', 'hidden');
    $('#modalCancelBtn').css('visibility', 'hidden');
  };

  $.ajax("/products/getUname", {
    type: "GET"
  }).then(function (user) {
    if (!socket) {
      currentUser = user;
      socket = io.connect();
      startUserConnection(user);
    }
  });

  //chatSet();


  let startUserConnection = function (personalUserName) {

    $.ajax("/chat/" + personalUserName, function () {
      socket.on(personalUserName, function (data) {
        $("#chatBox").append("<strong>" + data.user + ": </strong><i>" + data.message + " </i><br>");
        if (users.indexOf(data.user) === -1)
          users.push(data.user);
        
        $('#chatBox').animate({
          scrollTop: $('#chatBox').get(0).scrollHeight
        }, 2000);
      });
    });



  };

  $("#chatBtn").on("click", function () {
    chatSet();
  });

  function chatSet() {

    productId = $('#itemsInfo').attr('attrId');
    userId = $('#itemsInfo').attr('attrUser');

    $.get("/user/ownerGetUserName/" + userId, function (data) {
      otherUserName = data.username;
    }).then(function () {
      console.log('other user name ' + otherUserName);
     // if (otherUserName && (otherUserName !== currentUser))
        $.ajax("/chat/srch/" + otherUserName, {
          type: "GET"
        }).then(function (avail) {
          if (avail === 'false')
            modalMsg('User is currently not available.');
          if (avail === 'true') {
            if (users.indexOf(otherUserName) === -1)
              users.push(otherUserName);
            $('#msgDiv').html('<small><i>' + otherUserName + ' connected...</i></small>');
            for (let i = 0; i < users.length; i++)
              socket.on(users[i], function (data) {
                $("#chatBox").append("<strong>" + data.user + ": </strong><i>" + data.message + " </i><br>");
                $('#chatBox').animate({
                  scrollTop: $('#chatBox').get(0).scrollHeight
                }, 2000);
              });


          }
        });
    });
  }



  $("#bottDiv").on("click", "#submitBtn", function () {
    submitBtn();
  });

  $(this).keypress(function (event) {
    let chatTxtIsFoc = $("#txtBox").is(":focus");

    if (chatTxtIsFoc && event.keyCode == 13) {
      submitBtn();
    }
  });

  function submitBtn() {
    let inputText = $("#txtBox").val().trim();

    if (socket && inputText && otherUserName){
      socket.emit(otherUserName, {
        user: currentUser,
        message: inputText
      });
      $("#txtBox").val() = '';
    }

  } //ends submitBtn()

  $('#tradeBtn').on('click', function () {
    $('#myModal').css('display', 'block');
  });

  $('.close').on('click', function () {
    $('#myModal').css('display', 'none');
  });


  $("#starIcon").on("click", function () {
    let source = $(this).attr("src");
    if (source === "assets/img/starOff.png") {
      $(this).attr("src", "assets/img/starOn.png");
      $("#wList").text("You are watching this item.");
    } else {
      $(this).attr("src", "assets/img/starOff.png");
      $("#wList").text("Add to watchlist.");
    }
  });



  $(this).unload(function () {
    $.get("/chat/del/" + currentUser);
  });

}); //ends read