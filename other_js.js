var text_into = [
    "<p>Да, я писала, пишу и буду писать фанфики.<br><br><a href='https://ficbook.net/authors/2595877'>Мой аккаунт на фикбуке</a></p>",
    "<p>Рисую я довольно нечасто, но зато с душой.</p>",
    "<p>Ну, тут сразу несколько ролей активно практикую:</p>\
    <ul><li>Копирайтер</li>\
    <li>Дизайнер</li>\
    <li>Видеомонтажер</li>\
    </ul>\
    <p><br><br>Являюсь главой СММ-команды Театральной Студии ГУАП с осени 2023 года. Как обстоят дела, можете посмотреть <a href='https://vk.com/guap_teatr'>тут</a>:</p>",
    "<p>В музыкальном мире я дружу только с укулеле. Написала 1,5 песни. Просто люблю играть и петь, особыми навыками даже близко не обладаю.</p>"
]
var text_about = document.getElementById("text_hobby");

text_about.innerHTML = "<p>Тыкни на одно из моих хобби и я про него расскажу.</p>";

var hobbys = document.getElementsByClassName("the_hobby");

for(let i = 0; i<4; i++){
    hobbys[i].onclick = function (){
        text_about.innerHTML = text_into[i];
    };
}