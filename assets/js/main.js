// CURRENT YEAR
$('.current-year').html(new Date().getFullYear());

// CURRENT LOCATION
$('.current-location').html(window.location.host);

// SCROLL TO
const scrollToTop = () => {
    document.querySelector('.header').scrollIntoView({behavior:"smooth"})
}
const scrollToAbout = () => {
    document.querySelector('.section-about').scrollIntoView({behavior:"smooth"})
}
const scrollToStories = () => {
    document.querySelector('.section-stories').scrollIntoView({behavior:"smooth"})
}
const scrollToResults = () => {
    document.querySelector('.section-results').scrollIntoView({behavior:"smooth"})
}
const scrollToFAQ = () => {
    document.querySelector('.section-faq').scrollIntoView({behavior:"smooth"})
}

// FORM SUBMISSION
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelector('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.classList.add('visible');
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        if (requiredFields.classList.contains('visible')) {
            requiredFields.classList.remove('visible');
        }
    });
}

// USERS TABLE
$(document).ready(function () {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function getRandomArrayElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
  
    today = dd + "/" + mm + "/" + yyyy;
    $(".today").html(today);
  
    const itemsCity = [
      "(Roma)",
      "(Milano)",
      "(Napoli)",
      "(Torino)",
      "(Genova)",
      "(Verona)",
      "(Fiumicino)",
      "(Sora)",
      "(Avellino)",
      "(Roccaraso)",
      "(Chieti)",
      "(Todi)",
      "(Orvieto)",
      "(Roma)",
      "(Arezzo)",
      "(Perugia)",
      "(Grosseto)",
      "(Foggia)",
      "(Taranto)",
      "(Cozenca)",
      "(Roma)",
      "(Napoli)",
    ];
  
    let parsedData = [
      {
        name: "Alvisio",
        photo: "assets/img/users/1.jpg",
        id: 1,
      },
      {
        name: "Giuditta",
        photo: "assets/img/users/2.jpg",
        id: 2,
      },
      {
        name: "Maria",
        photo: "assets/img/users/3.jpg",
        id: 3,
      },
      {
        name: "Sofia",
        photo: "assets/img/users/4.jpg",
        id: 4,
      },
      {
        name: "Livia",
        photo: "assets/img/users/5.jpg",
        id: 5,
      },
      {
        name: "Giovanna",
        photo: "assets/img/users/6.jpg",
        id: 6,
      },
      {
        name: "Laura",
        photo: "assets/img/users/7.jpg",
        id: 7,
      },
      {
        name: "Norberto",
        photo: "assets/img/users/8.jpg",
        id: 8,
      },
      {
        name: "Anna",
        photo: "assets/img/users/9.jpg",
        id: 9,
      },
      {
        name: "Maria",
        photo: "assets/img/users/10.jpg",
        id: 10,
      },
      {
        name: "Gianna",
        photo: "assets/img/users/11.jpg",
        id: 11,
      },
      {
        name: "Giuseppina",
        photo: "assets/img/users/12.jpg",
        id: 12,
      },
      {
        name: "Dolores",
        photo: "assets/img/users/13.jpg",
        id: 13,
      },
      {
        name: "Paula",
        photo: "assets/img/users/14.jpg",
        id: 14,
      },
      {
        name: "Rosa",
        photo: "assets/img/users/15.jpg",
        id: 15,
      },
      {
        name: "Marco",
        photo: "assets/img/users/16.jpg",
        id: 16,
      },
      {
        name: "Alessandro",
        photo: "assets/img/users/17.jpg",
        id: 17,
      },
      {
        name: "Marta",
        photo: "assets/img/users/18.jpg",
        id: 18,
      },
      {
        name: "Luigi",
        photo: "assets/img/users/19.jpg",
        id: 19,
      },
      {
        name: "Mario",
        photo: "assets/img/users/20.jpg",
        id: 20,
      },
      {
        name: "Amparo",
        photo: "assets/img/users/21.jpg",
        id: 21,
      },
      {
        name: "Giulia",
        photo: "assets/img/users/22.jpg",
        id: 22,
      },
      {
        name: "Francesco",
        photo: "assets/img/users/23.jpg",
        id: 23,
      },
      {
        name: "Teresa",
        photo: "assets/img/users/24.jpg",
        id: 24,
      },
      {
        name: "Stefano",
        photo: "assets/img/users/25.jpg",
        id: 25,
      },
      {
        name: "Isabella",
        surname: "Escobar",
        photo: "assets/img/users/26.jpg",
        id: 26,
      },
      {
        name: "Andrea",
        surname: "Maldonado",
        photo: "assets/img/users/27.jpg",
        id: 27,
      },
      {
        name: "Valentina",
        surname: "Vera",
        photo: "assets/img/users/28.jpg",
        id: 28,
      },
      {
        name: "Claudia",
        surname: "Camacho",
        photo: "assets/img/users/29.jpg",
        id: 29,
      },
      {
        name: "Aurora",
        surname: "Sosa",
        photo: "assets/img/users/30.jpg",
        id: 30,
      },
      {
        name: "Adriano",
        surname: "Soto",
        photo: "assets/img/users/31.jpg",
        id: 31,
      },
      {
        name: "Laura",
        surname: "Ponce",
        photo: "assets/img/users/32.jpg",
        id: 32,
      },
      {
        name: "Sara",
        surname: "Paz ",
        photo: "assets/img/users/33.jpg",
        id: 33,
      },
      {
        name: "Anna",
        surname: "Rojo",
        photo: "assets/img/users/34.jpg",
        id: 34,
      },
      {
        name: "Amparo",
        surname: "Juárez",
        photo: "assets/img/users/35.jpg",
        id: 35,
      },
      {
        name: "Silvio",
        surname: "Maidana ",
        photo: "assets/img/users/36.jpg",
        id: 36,
      },
      {
        name: "Elvira",
        surname: "Méndez",
        photo: "assets/img/users/37.jpg",
        id: 37,
      },
      {
        name: "Angelo",
        surname: "Coronel ",
        photo: "assets/img/users/38.jpg",
        id: 38,
      },
      {
        name: "Giuseppe",
        surname: "Montes",
        photo: "assets/img/users/39.jpg",
        id: 39,
      },
      {
        name: "Vittorio",
        surname: "Martínez",
        photo: "assets/img/users/40.jpg",
        id: 40,
      },
      {
        name: "Antonio",
        surname: "Luna",
        photo: "assets/img/users/41.jpg",
        id: 41,
      },
      {
        name: "Flavio",
        surname: "Giménez ",
        photo: "assets/img/users/42.jpg",
        id: 42,
      },
      {
        name: "Giovanni",
        surname: "Alarcón",
        photo: "assets/img/users/43.jpg",
        id: 43,
      },
    ];
  
    function getUniqusers() {
      var rundomnumber = getRandomArrayElement(parsedData);
  
      const curId = rundomnumber.id;
      const elem = document.getElementById(curId);
  
      if (elem) {
        return getUniqusers();
      } else {
        return rundomnumber;
      }
    }
  
    function getUser1() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
  
      $(".pimg1").attr("src", curUser.photo).trigger("contentchange");
  
      $(".username1").html(curUser.name);
      $(".username1").attr("id", curUser.id);
  
      $(".city1").html(item);
  
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt1")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent1")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt1")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent1")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
  
    function getUser2() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
  
      $(".pimg2").attr("src", curUser.photo).trigger("contentchange");
      $(".username2").html(curUser.name);
      $(".username2").attr("id", curUser.id);
      $(".city2").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt2")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent2")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt2")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent2")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
    function getUser3() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
  
      $(".pimg3").attr("src", curUser.photo).trigger("contentchange");
      $(".username3").html(curUser.name);
      $(".username3").attr("id", curUser.id);
      $(".city3").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt3")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent3")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt3")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent3")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
    function getUser4() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
      $(".pimg4").attr("src", curUser.photo).trigger("contentchange");
      $(".username4").html(curUser.name);
      $(".username4").attr("id", curUser.id);
      $(".city4").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt4")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent4")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt4")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent4")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
    function getUser5() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
      $(".pimg5").attr("src", curUser.photo).trigger("contentchange");
      $(".username5").html(curUser.name);
      $(".username5").attr("id", curUser.id);
      $(".city5").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt5")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent5")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt5")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent5")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
    function getUser6() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
      $(".pimg6").attr("src", curUser.photo).trigger("contentchange");
      $(".username6").html(curUser.name);
      $(".username6").attr("id", curUser.id);
      $(".city6").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt6")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent6")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt6")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent6")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
    function getUser7() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
      $(".pimg7").attr("src", curUser.photo).trigger("contentchange");
      $(".username7").html(curUser.name);
      $(".username7").attr("id", curUser.id);
      $(".city7").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt7")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent7")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt7")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent7")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
    function getUser8() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
      $(".pimg8").attr("src", curUser.photo).trigger("contentchange");
      $(".username8").html(curUser.name);
      $(".username8").attr("id", curUser.id);
      $(".city8").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt8")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent8")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt8")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent8")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
    function getUser9() {
      let item = itemsCity[Math.floor(Math.random() * itemsCity.length)];
      let curUser = getUniqusers();
      $(".pimg9").attr("src", curUser.photo).trigger("contentchange");
      $(".username9").html(curUser.name);
      $(".username9").attr("id", curUser.id);
      $(".city9").html(item);
      let randomNumber = getRandomInt(1, 10);
  
      if (randomNumber <= 2) {
        $(".amt9")
          .addClass("danger")
          .html(+getRandomInt(-40, -1));
        $(".percent9")
          .addClass("danger")
          .html(+getRandomInt(-10, -1) + "%");
      } else {
        $(".amt9")
          .removeClass("danger")
          .html("+" + getRandomInt(50, 500));
        $(".percent9")
          .removeClass("danger")
          .html("+" + getRandomInt(15, 65) + "%");
      }
    }
  
    getUser1();
  
    getUser2();
  
    getUser3();
  
    getUser4();
  
    getUser5();
  
    getUser6();
  
    getUser7();
  
    getUser8();
  
    getUser9();
  
    setInterval(function () {
      getUser1();
    }, getRandomInt(4000, 20000));
    setInterval(function () {
      getUser2();
    }, getRandomInt(7000, 15000));
    setInterval(function () {
      getUser3();
    }, getRandomInt(7000, 15000));
    setInterval(function () {
      getUser4();
    }, getRandomInt(2000, 18000));
    setInterval(function () {
      getUser5();
    }, getRandomInt(7000, 15000));
    setInterval(function () {
      getUser6();
    }, getRandomInt(7000, 15000));
    setInterval(function () {
      getUser7();
    }, getRandomInt(4000, 12000));
    setInterval(function () {
      getUser8();
    }, getRandomInt(7000, 15000));
    setInterval(function () {
      getUser9();
    }, getRandomInt(2000, 15000));
  
    $(".result-line").bind("contentchange", function () {
      $(this).find(".anim").removeClass("fadeInDown");
      setTimeout(() => {
        $(this).find(".anim").addClass("fadeInDown");
      }, 50);
    });
  });

// FAQ ACCORDION
var acc = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}