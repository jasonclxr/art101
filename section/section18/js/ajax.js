function getAjax(){
  $.ajax({
    url:"https://en.wikipedia.org/api/rest_v1/page/summary/Main_Page?redirect=true",
    type: "GET",
    DataType:"text",
    success:success,
    error:error,
    complete: function (xhr, status){
      console.log ("COMPLETE");
    }
  });
}

function success(result){
  console.log("SUCCESS");

  console.log(result)

  $("#ajax_text").html( result.toString() );
}
function error(xhr,status,strErr){
  console.log("ERROR");
}
$("#click_ajax").click(getAjax);
