function validateForm(){
	var x=document.forms["myForm"];
	const regex= /(?=.*[a-z])(?=.*[A-Z])(?=.*[!?])[a-zA-Z0-9!?]{8,}/
	if(regex.test(x.password.value)==false){
		Swal.fire({
  title: 'Error, the password must be minimum 8 characters long,contain 1 small letter, 1 capital letter, either"!" or "?" and minimum one digit!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
		return false;
	}
}