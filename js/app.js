function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
function toggleBlock(flagClass, buttonSelector) {
    var actionButtons = document.querySelectorAll(buttonSelector);
    
    if(!actionButtons) {
      return;
    }
    
    function onToggleMenu(e) {
      e.stopPropagation();
      e.preventDefault();
      document.body.classList.toggle(flagClass);
    }
    
    actionButtons.forEach(function(btn) {
      btn.addEventListener('click', onToggleMenu);
    });
    
  }
  
  window.onload = function() {
    // Это для открытия/скрытия меню
    toggleBlock('menu-is-open', '.js-toggle-menu');
    
    // Это для открытия/скрытия формы
    toggleBlock('callback-success', '.js-toggle-callback');
  }



  // ===============================================================================

  var acc = document.getElementsByClassName("questions__accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// var acc = document.getElementsByClassName("questions__accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var acc = document.getElementsByClassName("questions__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var questions__panel = this.nextElementSibling;
    if (questions__panel.style.maxHeight){
      questions__panel.style.maxHeight = null;
    } else {
      questions__panel.style.maxHeight = questions__panel.scrollHeight + "px";
    } 
  });
}
