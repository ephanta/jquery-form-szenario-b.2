// $(document).ready(function () {
//   $("#form").submit(function (event) {
//     event.preventDefault();
//     var formData = $(this).serialize();
//     $.ajax({
//         method: 'post',
//         url: '/ajax/ajax.php',
//         data: {
//             ajaxHandler: "save",
//             data: formData,
//         },
//         success: function(data){
//             console.log(data);
//         },
//         error: function(type) {
//             alert("Error");
//         }
//     });
//   });
// });