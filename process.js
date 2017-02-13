
function checkState(e)
{
     var chkBox = document.getElementById('work');
     if (chkBox.checked)
     {
         chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='red'"});
     }
     else 
     {
     	chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='white'"});
     }


}


document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('input');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', checkState);
  }
});

//   	chrome.tabs.getSelected(null, function(tab) {
// 	    chrome.tabs.sendRequest(tab.id, {method: "getText"}, function(response) {
// 	        if(response.method=="getText"){
// 	            alltext = response.data;
// 	            chrome.tabs.executeScript(null,{code:"alert("+alltext+")"});
// 	        }
// 	    });
// 	});

// 	chrome.tabs.getPageHtml(function(html){
// 		var page = $(html)
// 		var posts = page.find("_4ikz");
// 		for(let i in posts){
// 			let txt = posts[i].text()
// 			$.ajax({
// 				url: "www.aaaaa.com/project/chrome/did.php",
// 				data: {
// 					text: txt,
// 				},
// 				dataType: 'json',
// 				success: function(res){
// 					if(res.hide){
// 						chrome.tabs.executeScript(null,{code:"hide i"});
// 					}
// 				}
// 			});
// 		}
// 	});



//}
  // document.getElementById("work").addEventListener("click", function()
  // {
  	// chrome.storage.sync.get('varMenuSwitch', function (result) {
//     $("#work").change(function() {
//     $('#console-event').html('Toggle: ' + $(this).prop('checked'))
// })
  
// });


// chrome.storage.sync.get('varMenuSwitch', function (result) {
//     $("input:checkbox[name=onoffswitch]").prop('checked', result.varMenuSwitch == '1');
// });

 