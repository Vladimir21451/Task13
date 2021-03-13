 var ranGen;
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    nameJobJson: `{
        "count": 10,
        "list": {     
            "id_1": "Врач",
            "id_2": "Учитель",
            "id_3": "Продвец",
            "id_4": "Менеджер",
            "id_5": "Парикмахер",
            "id_6": "Администратор",
            "id_7": "Военнослужащий",
            "id_8": "Дворник",
            "id_9": "Педагог",
            "id_10": "Стоматолог"
        }
    }`, 
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марфа",
            "id_3": "Ирина",
            "id_4": "Алена",
            "id_5": "Дарья",
            "id_6": "Нина",
            "id_7": "Мария",
            "id_8": "Майя",
            "id_9": "Елена",
            "id_10": "Авдотья"
        }
    }`,
    lastNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ивановна",
            "id_2": "Спиридоновна",
            "id_3": "Кузьминична",
            "id_4": "Васильевна",
            "id_5": "Петровна",
            "id_6": "Михайловна",
            "id_7": "Фёдоровна",
            "id_8": "Николаевна",
            "id_9": "Павловна",
            "id_10": "Максимовна"
        }
    }`,

    lastNameMaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванович",
            "id_2": "Спиридонович",
            "id_3": "Кузьмич",
            "id_4": "Васильевич",
            "id_5": "Петрович",
            "id_6": "Михайлович",
            "id_7": "Никитович",
            "id_8": "Федорович",
            "id_9": "Константинович",
            "id_10": "Николаевич",
            "id_11": "Семёнович",
            "id_12": "Сергеевич",
            "id_13": "Степанович",
            "id_14": "Павлович",
            "id_15": "Александрович",
            "id_16": "Максимович"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
       if(ranGen == 1){
                return this.randomValue(this.firstNameMaleJson);}
        else if(ranGen == 2){
                return this.randomValue(this.firstNameFemaleJson); }
        else{
                alert("Вы не задали пол");
                return;
        }
    },

    randomLastName: function(){
        if(ranGen == 1){
                return this.randomValue(this.lastNameMaleJson);}
        else if(ranGen == 2){
                return this.randomValue(this.lastNameFemaleJson);}
      // else {
        //        alert("Вы не задали пол");
        //      return;
        //}  
    },


     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomJob: function(){
        return this.randomValue(this.nameJobJson);
    },


    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.lastName = this.randomLastName();
        this.person.secondName =this.randomSurname();
       // alert(this.person.firstName);
        return this.person;
    }
};
let gen = document.getElementById('makeGender').addEventListener('click', function(){
   goGender(); 
})
let birthday = document.getElementById('makeYear').addEventListener('click', () =>{
   goDayMonthYear();
})

let fstName = document.getElementById('makeFirstName').addEventListener('click', () =>{
gofirstlastName();
})

 document.getElementById('makeJob').addEventListener('click', () =>{
     goProfi();
})

document.getElementById('makeAll').addEventListener('click', () =>{
   // alert(ranGen);
    goGender();
    gofirstlastName();
    goDayMonthYear();
    goProfi();
})
 function  goGender(){
    let gender = document.getElementById('genderOutput');
    ranGen = personGenerator.randomIntNumber(2, 1);
    if(ranGen == 1){
         gender.innerHTML =personGenerator.GENDER_MALE;
    }
    else{
         gender.innerHTML = personGenerator.GENDER_FEMALE;
    }  
    gender.style.backgroundColor ='lightyellow';    
 }

 function goDayMonthYear(){
    let bday = document.getElementById('birthYearOutput');
    let god = personGenerator.randomIntNumber(2010,1970)
    bday.innerHTML= god;
   // alert(god);
    let month = personGenerator.randomIntNumber(12,1);
   // alert(month);
    let bdmax = 30;
    let monthtext = '';
    switch(month){
        case 1:
            bdmax = 31;
            monthtext = 'января';
            break;
        case 2:
            if(god % 4 ==0){bdmax =29}else{bdmax = 28}
            monthtext = 'февраля';
            break;
        case 3:
            bdmax = 31;
            monthtext = 'марта';
            break;
        case 4:
            bdmax = 30;
            monthtext ='апреля';
            break;
        case 5:
            bdmax = 31;
            monthtext = 'мая';
            break;
        case 6:
            bdmax = 30;
            monthtext = 'июня';
            break;
        case 7:
            bdmax = 31;
            monthtext = 'июля';
            break;
        case 8:
            bdmax = 31;
            monthtext = 'августа';
            break;
        case 9:
            bdmax = 30;
            monthtext = 'сентября';
            break;
        case 10:
            bdmax = 31;
            monthtext = 'октября';
            break;
        case 11:
            bdmax = 30;
            monthtext = 'ноября';
            break;
        case 12:
            bdmax = 31;
            monthtext = 'декабря';
            break;
    }
    //alert(monthtext);
    let birthd =personGenerator.randomIntNumber(bdmax,1);
    bday.innerHTML= 'Дата рождения:' + '  ' + birthd + ' ' + monthtext + ' ' + god;
    bday.style.backgroundColor = 'lightyellow';  
 }

 function gofirstlastName(){
    let namePerson = personGenerator.getPerson();
    //alert(namePerson.lastName);
    if(ranGen == 2){namePerson.secondName = namePerson.secondName + 'а'}
    let fno = document.getElementById('firstNameOutput'); //innerText =namePerson.secondName + ' ' + namePerson.firstName + ' ' + namePerson.lastName;
     fno.innerText = namePerson.secondName + ' ' + namePerson.firstName + ' ' + namePerson.lastName;
     fno.style.backgroundColor = 'lightyellow';
 }

 function goProfi(){
    if (ranGen != 1 && ranGen != 2){return;}
    let lstName = document.getElementById('nameJob');innerText = 'Профессия:' + '  ' + personGenerator.randomJob();
    lstName.innerText ='Профессия:' + '  ' + personGenerator.randomJob();
    document.getElementById('crdheader').style.background = 'lightsalmon';
   document.body.style.backgroundImage = "url(zastavka.jpg)";
   lstName.style.backgroundColor = 'lightyellow';  
 }

