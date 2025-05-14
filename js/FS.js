function escapeHTML(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const form=document.getElementById("feedbackForm"),nameInput=document.getElementById("name"),emailInput=document.getElementById("email"),messageInput=document.getElementById("message"),nameError=document.getElementById("nameError"),emailError=document.getElementById("emailError"),messageError=document.getElementById("messageError"),formSuccess=document.getElementById("formSuccess"),demoVulnerable=document.getElementById("submissionDemo"),demoSecure=document.getElementById("secureDemo");form.addEventListener("submit",function(e){nameError.textContent="",emailError.textContent="",messageError.textContent="",formSuccess.textContent="",demoVulnerable.innerHTML="",demoSecure.textContent="";let t=!0,r=nameInput.value.trim(),n=emailInput.value.trim(),m=messageInput.value.trim();if(""===r&&(nameError.textContent="Пожалуйста, введите ваше имя.",t=!1),""===n?(emailError.textContent="Пожалуйста, введите email.",t=!1):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(emailError.textContent="Пожалуйста, введите корректный email.",t=!1),""===m?(messageError.textContent="Пожалуйста, введите сообщение.",t=!1):m.length<10&&(messageError.textContent="Сообщение должно содержать как минимум 10 символов.",t=!1),!t){e.preventDefault();return}e.preventDefault(),demoVulnerable.innerHTML="<p>Имя: "+r+"</p><p>Email: "+n+"</p><p>Сообщение: "+m+"</p>",demoSecure.textContent="Имя: "+escapeHTML(r)+"; Email: "+escapeHTML(n)+"; Сообщение: "+escapeHTML(m),formSuccess.textContent="Спасибо! Ваше сообщение отправлено.",form.reset()});



/*
// Функция для защиты от XSS — заменяет опасные символы на HTML-сущности
function escapeHTML(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Получаем элементы формы и элементы для вывода ошибок и результатов
const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const formSuccess = document.getElementById("formSuccess");
const demoVulnerable = document.getElementById("submissionDemo");
const demoSecure = document.getElementById("secureDemo");

// Обработчик события отправки формы
form.addEventListener("submit", function(e) {
  // Сначала очищаем все предыдущие сообщения
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";
  demoVulnerable.innerHTML = "";
  demoSecure.textContent = "";

  // Получаем значения полей формы
  let isValid = true;
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let message = messageInput.value.trim();

  // Валидация: проверяем, что все поля заполнены правильно
  if (name === "") {
    nameError.textContent = "Пожалуйста, введите ваше имя.";
    isValid = false;
  }
  if (email === "") {
    emailError.textContent = "Пожалуйста, введите email.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Пожалуйста, введите корректный email.";
    isValid = false;
  }
  if (message === "") {
    messageError.textContent = "Пожалуйста, введите сообщение.";
    isValid = false;
  } else if (message.length < 10) {
    messageError.textContent = "Сообщение должно содержать как минимум 10 символов.";
    isValid = false;
  }

  // Если есть ошибки — не отправляем форму
  if (!isValid) {
    e.preventDefault();
    return;
  }

  // Предотвращаем стандартную отправку формы (на сервер)
  e.preventDefault();

  // Демонстрация небезопасного вывода (уязвимого к XSS)
  demoVulnerable.innerHTML = 
    "<p>Имя: " + name + "</p>" +
    "<p>Email: " + email + "</p>" +
    "<p>Сообщение: " + message + "</p>";

  // Безопасный вывод с экранированием
  demoSecure.textContent = 
    "Имя: " + escapeHTML(name) + 
    "; Email: " + escapeHTML(email) + 
    "; Сообщение: " + escapeHTML(message);

  // Сообщение об успешной отправке
  formSuccess.textContent = "Спасибо! Ваше сообщение отправлено.";

  // Сброс формы
  form.reset();
});
*/