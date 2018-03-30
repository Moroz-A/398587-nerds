var modalForm = document.querySelector('form.feedback');
var btnShowForm = document.querySelector('.map-block .map-btn');
var btnCloseForm = document.querySelector('form .feedback-close-btn');
btnShowForm.addEventListener('click', function(event){
  event.preventDefault();
  modalForm.classList.add('modal-visible');
});
btnCloseForm.addEventListener('click', function(event){
  event.preventDefault();
  modalForm.classList.remove('modal-visible');
});
  
