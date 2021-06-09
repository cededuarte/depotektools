var splitName = document.getElementById("splitName");
splitName.onclick = function() {
  document.getElementById("result").innerHTML = '';
  var value = document.getElementById("fullName").value;
  value.split('\n').forEach(fullname => {
   

    var spaceIndex = fullname.indexOf(" ");
    var firstname;
    var lastname;

    if (spaceIndex == -1) {
      lastname = fullname;
      lastname = "";
    } else {
      firstname = fullname.substring(0, spaceIndex);
      lastname = fullname.substr(spaceIndex + 1);       
    }


		/* For Name swap */
/*   document.getElementById("result").innerHTML += lastname + ", " + firstname+ "<br>";
      console.log(ced); */
var ced = document.getElementById("result").innerHTML += [lastname, firstname].filter(Boolean).join(", ") + " <br> ";
  /*   console.log(ced); */

  		/* For sixshooters */
/* 			document.getElementById("result").innerHTML += "Round # Sixshooter (Tournament Name YYYY):" + lastname + ", " + firstname[0] + " / "; */
   
    
  
  });
};


// var $button = $("button");
// $button.prop("disabled", true);

// $("#fullName").keyup(function(){
//   $button.prop("disabled", (this.value === "")? true : false);
// });
// const card = document.querySelector("#result");
const textarea = document.querySelector("textarea");
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    textarea.value = "";
    textarea.focus();
  });

  function copyToClipboard(id) {
    var from = document.getElementById(id);
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}



