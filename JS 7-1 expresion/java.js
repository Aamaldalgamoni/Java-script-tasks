


document.getElementById('myForm').addEventListener('input', function () {
    const fname = document.getElementById('fname').value;
    const fnameError = document.getElementById('fnameError');
    fnameError.textContent = /^[a-zA-Z]+$/.test(fname) ? '' : 'Numbers are not allowed';

    const lname = document.getElementById('lname').value;
    const lnameError = document.getElementById('lnameError');
    lnameError.textContent = lname.trim() ? '' : 'Last name cannot be empty';

    const bdate = document.getElementById('bdate').value;
    const bdateError = document.getElementById('bdateError');
    bdateError.textContent = /^\d{2}\/\d{2}\/\d{4}$/.test(bdate) ? '' : 'The format should be dd/mm/yyyy';

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    emailError.textContent = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? '' : 'The e-mail is not valid';

    const confirmEmail = document.getElementById('confirmEmail').value;
    const confirmEmailError = document.getElementById('confirmEmailError');
    confirmEmailError.textContent = email === confirmEmail ? '' : 'Emails do not match';

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    passwordError.textContent = password.length >= 6 ? '' : 'Password must be at least 6 characters';

    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.textContent = password === confirmPassword ? '' : 'Passwords do not match';
  });