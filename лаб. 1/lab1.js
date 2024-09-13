function ValidForm(){
    const lastname = document.getElementById('l_name').value;
    const name = document.getElementById('namee').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const com = document.getElementById('com').value;
    let select = document.getElementById('select');

    let nameRegex = /[a-zA-Zа-яА-Я]{1,20}/;
    let emailRegex =/^\w+([\.\w]+)*\w@\w((\.\w)*\w+)*\.\w{2,3}$/;
    let telRegex = /\(0\d{2}\)\d{3}-\d{2}-\d{2}/;
    let comRegex = /[a-zA-Zа-яА-Я]{1,250}/;
  let secondNameError = document.getElementById("secondNameError");
  let NameError = document.getElementById("NameError");
  let emailError = document.getElementById('emailError');
  let telError = document.getElementById('telError');
  let comError = document.getElementById('comError');
  let selectError = document.getElementById('selectError');


  let errors =0;
  if (!nameRegex.test(lastname)) {
   errors++;
    secondNameError.textContent = 'Поле Фамилия должно содержать только буквы и быть длиной от 1 до 20 символов.';
}
else { secondNameError.textContent = '';}

if(!nameRegex.test(name)){
    errors++;
    NameError.textContent = 'Поле Имя должно содержать только буквы и быть длиной от 1 до 20 символов.';
}
else { NameError.textContent = '';}

if(!emailRegex.test(email)){
    errors++;
    emailError.textContent='Поле E-mail должно быть в формате example@example.com.';
}
else { emailError.textContent = '';}

if(!telRegex.test(tel)){
    errors++;
    telError.textContent='Поле Телефон должно быть в формате(0xx)xxx-xx-xx';
}
else { telError.textContent = '';}

if(!comRegex.test(com)){
    errors++;
    comError.textContent='Поле Расскажи о себе не должно быть пустым и превышать 250 символов';
}
else { comError.textContent = '';}

if(select.value === "Выберите вариант"){
    errors++;
    selectError.textContent='Вы не выбрали город';

}


if(errors>0){
return false;
}

let city = document.getElementById("select").value;
let course3 = document.querySelector('input[name="course"][value="3"]').checked;
let bstu = document.getElementById("bstu").checked;

if (city !== "Минск" || !bstu) {
let confirmMessage = "Вы уверены в своих ответах?\n\nГород: " + city +  "\nУчусь в БГТУ: " + (bstu ? "Да" : "Нет") + "\nКурс: "+(course3 ? "3" : "другой курс") ;
let confirmed = confirm(confirmMessage);

    if (!confirmed) {
        return false;
    }
}

return true;
}