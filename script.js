document.addEventListener("DOMContentLoaded", function(){
document.getElementById('feedback-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "contacts.php", true);
    http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText); 
        window.location.replace("https://www.atomy.ru/ru/Home");
      }
    }
    http.onerror = function() {
      alert('Извините, данные не были переданы');
    }
    http.send(new FormData(f));
  }, false);
  
            var form = document.querySelector('.needs-validation');
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        })
    });