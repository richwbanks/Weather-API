//Miami
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_MI = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_MI = Math.floor(data.main.temp);

var weather_MI = data.weather[0].main;


$('.icon_MI').attr('src', icon_MI);
$(".temp_MI").append(temp_MI  + ' &#8457;');

$(".weather_MI").append(weather_MI );
});

//Detroit
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Detroit&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_DE = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_DE = Math.floor(data.main.temp);

var weather_DE = data.weather[0].main;


$('.icon_DE').attr('src', icon_DE);
$(".temp_DE").append(temp_DE  + ' &#8457;');

$(".weather_DE").append(weather_DE );
});

//Botson
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_BO = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_BO = Math.floor(data.main.temp);

var weather_BO = data.weather[0].main;


$('.icon_BO').attr('src', icon_BO);
$(".temp_BO").append(temp_BO  + ' &#8457;');

$(".weather_BO").append(weather_BO );
});

//Atlanta
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_ATL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_ATL = Math.floor(data.main.temp);

var weather_ATL = data.weather[0].main;


$('.icon_ATL').attr('src', icon_ATL);
$(".temp_ATL").append(temp_ATL  + ' &#8457;');

$(".weather_ATL").append(weather_ATL );
});

//New York
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_NY = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_NY = Math.floor(data.main.temp);

var weather_NY = data.weather[0].main;


$('.icon_NY').attr('src', icon_NY);
$(".temp_NY").append(temp_NY  + ' &#8457;');

$(".weather_NY").append(weather_NY );
});

//Los Angeles
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_LA = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_LA = Math.floor(data.main.temp);

var weather_LA = data.weather[0].main;


$('.icon_LA').attr('src', icon_LA);
$(".temp_LA").append(temp_LA  + ' &#8457;');

$(".weather_LA").append(weather_LA );
});

//Chicago
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_CHI = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_CHI = Math.floor(data.main.temp);

var weather_CHI = data.weather[0].main;


$('.icon_CHI').attr('src', icon_CHI);
$(".temp_CHI").append(temp_CHI  + ' &#8457;');

$(".weather_CHI").append(weather_CHI );
});

//Houston
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_HOU = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_HOU = Math.floor(data.main.temp);

var weather_HOU = data.weather[0].main;


$('.icon_HOU').attr('src', icon_HOU);
$(".temp_HOU").append(temp_HOU  + ' &#8457;');

$(".weather_HOU").append(weather_HOU );
});

//Phoenix
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_PHX = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_PHX = Math.floor(data.main.temp);

var weather_PHX = data.weather[0].main;


$('.icon_PHX').attr('src', icon_PHX);
$(".temp_PHX").append(temp_PHX  + ' &#8457;');

$(".weather_PHX").append(weather_PHX );
});

//Philadelphia
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_PHA = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_PHA = Math.floor(data.main.temp);

var weather_PHA = data.weather[0].main;


$('.icon_PHA').attr('src', icon_PHA);
$(".temp_PHA").append(temp_PHA  + ' &#8457;');

$(".weather_PHA").append(weather_PHA );
});

//San Antonio
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Alamo Heights&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_SA = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_SA = Math.floor(data.main.temp);

var weather_SA = data.weather[0].main;


$('.icon_SA').attr('src', icon_SA);
$(".temp_SA").append(temp_SA  + ' &#8457;');

$(".weather_SA").append(weather_SA );
});

//San Diego
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San Diego&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_SD = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_SD = Math.floor(data.main.temp);

var weather_SD = data.weather[0].main;


$('.icon_SD').attr('src', icon_SD);
$(".temp_SD").append(temp_SD  + ' &#8457;');

$(".weather_SD").append(weather_SD );
});

//Dallas
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_DL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_DL = Math.floor(data.main.temp);

var weather_DL = data.weather[0].main;


$('.icon_DL').attr('src', icon_DL);
$(".temp_DL").append(temp_DL  + ' &#8457;');

$(".weather_DL").append(weather_DL );
});

//San Jose
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Mountain View&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_SJ = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_SJ = Math.floor(data.main.temp);

var weather_SJ = data.weather[0].main;


$('.icon_SJ').attr('src', icon_SJ);
$(".temp_SJ").append(temp_SJ  + ' &#8457;');

$(".weather_SJ").append(weather_SJ );
});

//Austin
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_AU = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_AU = Math.floor(data.main.temp);

var weather_AU = data.weather[0].main;


$('.icon_AU').attr('src', icon_AU);
$(".temp_AU").append(temp_AU  + ' &#8457;');

$(".weather_AU").append(weather_AU );
});

//Jacksonville
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Jacksonville&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_JK = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_JK = Math.floor(data.main.temp);

var weather_JK = data.weather[0].main;


$('.icon_JK').attr('src', icon_JK);
$(".temp_JK").append(temp_JK  + ' &#8457;');

$(".weather_JK").append(weather_JK );
});

//Fort Worth
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Fort Worth&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_FW = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_FW = Math.floor(data.main.temp);

var weather_FW = data.weather[0].main;


$('.icon_FW').attr('src', icon_FW);
$(".temp_FW").append(temp_FW  + ' &#8457;');

$(".weather_FW").append(weather_FW );
});

//Columbus
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Columbus&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_CO = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_CO = Math.floor(data.main.temp);

var weather_CO = data.weather[0].main;


$('.icon_CO').attr('src', icon_CO);
$(".temp_CO").append(temp_CO  + ' &#8457;');

$(".weather_CO").append(weather_CO );
});

//San Francisco
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San Francisco&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_SF = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_SF = Math.floor(data.main.temp);

var weather_SF = data.weather[0].main;


$('.icon_SF').attr('src', icon_SF);
$(".temp_SF").append(temp_SF  + ' &#8457;');

$(".weather_SF").append(weather_SF );
});

//Charlotte
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_CHA = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_CHA = Math.floor(data.main.temp);

var weather_CHA = data.weather[0].main;


$('.icon_CHA').attr('src', icon_CHA);
$(".temp_CHA").append(temp_CHA  + ' &#8457;');

$(".weather_CHA").append(weather_CHA );
});

//Indianpolis
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Indianapolis&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_ID = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_ID = Math.floor(data.main.temp);

var weather_ID = data.weather[0].main;


$('.icon_ID').attr('src', icon_ID);
$(".temp_ID").append(temp_ID  + ' &#8457;');

$(".weather_ID").append(weather_ID );
});

//Seattle
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_SE = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_SE = Math.floor(data.main.temp);

var weather_SE = data.weather[0].main;


$('.icon_SE').attr('src', icon_SE);
$(".temp_SE").append(temp_SE  + ' &#8457;');

$(".weather_SE").append(weather_SE );
});

//Denver
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_DV = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_DV = Math.floor(data.main.temp);

var weather_DV = data.weather[0].main;


$('.icon_DV').attr('src', icon_DV);
$(".temp_DV").append(temp_DV  + ' &#8457;');

$(".weather_DV").append(weather_DV );
});

//Washington D.C.
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Washington DC.&units=imperial&appid=eac9ea6079578a93ed7d1b5fc9ce3c3c", function(data) {

console.log(data);

var icon_DC = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp_DC = Math.floor(data.main.temp);

var weather_DC = data.weather[0].main;


$('.icon_DC').attr('src', icon_DC);
$(".temp_DC").append(temp_DC  + ' &#8457;');

$(".weather_DC").append(weather_DC );
});
