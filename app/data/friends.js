// console.log("JS is running");
// console.log($('#email').val());
//
// // Create an object constructor to generate a user with responses
// var friendProfile = function(name, picture, responseObj) {
//   this.name = name;
//   this.picture = picture;
//   this.responseObj = responseObj;
// };
//
// // Create global variables including those to hold responses to questions
// var friendName = "";
// var imageLink = "";
// var q01Answer = 0;
// var q02Answer = 0;
// var q03Answer = 0;
// var q04Answer = 0;
// var q05Answer = 0;
// var q06Answer = 0;
// var q07Answer = 0;
// var q08Answer = 0;
// var q09Answer = 0;
// var q10Answer = 0;
// var responses = [];
//
// // Capture submit and store integers for each response
// $("#submitButton").on("click", function() {
//         event.preventDefault();
//         friendName = $("#friendName").val().trim();
//         imageLink =  $("#imageLink").val().trim();
//         q01Answer = parseInt($("#q01").val().trim());
//         q02Answer = parseInt($("#q02").val().trim());
//         q03Answer = parseInt($("#q03").val().trim());
//         q04Answer = parseInt($("#q04").val().trim());
//         q05Answer = parseInt($("#q05").val().trim());
//         q06Answer = parseInt($("#q06").val().trim());
//         q07Answer = parseInt($("#q07").val().trim());
//         q08Answer = parseInt($("#q08").val().trim());
//         q09Answer = parseInt($("#q09").val().trim());
//         q10Answer = parseInt($("#q10").val().trim());
//
//         // Add responses to the Responses array
//         responses.push(q01Answer,q02Answer,q03Answer,q04Answer,q05Answer,
//         q06Answer,q07Answer,q08Answer,q09Answer,q10Answer);
//
//         // Create a object for the friend using the constructor created above
//         var newFriend = new friendProfile(friendName, imageLink, responses);
//         console.log(newFriend);
//         console.log(newFriend.responseObj);
//
//         // Reset the friend finder form
//         $("#friendForm")[0].reset();
//     });
