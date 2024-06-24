function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  document.getElementById('generatePasswordBtn').addEventListener('click', function() {
    var passwordLength = 12; // Comprimento da senha (pode ser ajustado conforme necessário)
    var password = generatePassword(passwordLength);
  
    // Exibindo a senha gerada no campo de texto
    document.getElementById('passwordDisplay').value = password;
  });