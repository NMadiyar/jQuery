/*
При использовании jQuery ставится знак доллара, затем в скобках выбирается ДОМ элемент, после через точку
обращаемся к методам доступным элементу
 */
//Можно обратиться ко всему дом элементу, либо к определенному айди или классу
// $("h1#heading1").hide();
// $(".heading2").hide();
//В jQuery так же можно добавлять стили для элементов, для этого необходимо выбрать ДОМ объект, затем в методе
//обратиться к .сss("название css параметра", "его значение")
// $("p span").css("color", "red"); Здесь добавлены css стили для элементов
// $("h1").css("background-color", "red");
// $("h1").css("border", "2px solid black" );

/*
Так же можно делать новые фичи в CSS3, с лист ордером, к примеру указать child first, last, even (четный)
 odd (нечетный) и тд
 */
$("#list li:first").css("color", "red");
$("#list li:last").css("color", "#a3a3a3");
$("#list li:even").css("background-color", "yellow");
$("#list li:odd").css("background-color", "#ccc");
$("#list li:nth-child(3n)").css("list-style", "none"); //каждый третий элемент будет без стиля :nth-child(указываете
//номер, который определяет какой каждый элемент будет затронут(т.е тут каждый 3 элемент будет изменен

/*
Здесь input, есть разные типы инпутов чтобы выбрать определенный тип необходимо прописать :button (название типа)
 */
$(":button:first").css("color", "green"); //здесь я тестил, какой можно выбрать из баттонов если их много
$(":text").hide();

/*
Так можно выбрать тег <a href></a>, тег с ссылкой, чтобы ее взять нужно прописать $("[href]").
 */
$("[href]").css("font-size", "30px");
//Так же можно обратиться к значению аттрибута
$("a[href='http://yahoo.com']").css("color", "green");

// $("*").hide(); через звездочку можно обратиться ко всем объектам


//Jquery Crash Course Events
//Данная функция сработает при нажатии на элемент
// $("#btn1").click(function(){
//    alert("Button clicked!");
// });
//Если поставить данную функцию наверху хтмла, то он не будет работать. Потому что изначально загрузится скрипт,
//а потом уже прогрузятся кнопки, чтобы избежать этого необходимо прописать $(document).ready(внутри функция)
// $(document).ready(function (){
//     $("#btn1").click(function (){
//         alert("Button is clicked");
//     });
// });
//Есть другой способ указать ивент при нажатии, прописывается .on("здесь указывается действие", функция())
// $(document).ready(function (){
//     $("#btn1").on("click", function (){
//         // $(".para1").hide();
//         $(".para1").toggle(); //.toggle() делает так, что при нажатии он сворачивает и разворачивает
//     });
//
//     $("#btn2").click(function (){
//         $(".para1").show();
//     });
// });

//dblclick ивент происходит при двойном щелчке
//hover работает при наведении, но hover это не ивент, а сокращение 2х ивентов .on("mouseenter") ("mouseleave")
//mousemove работает при каждом движении курсора на элементе
//mousedown при зажатом клике мыши на элементе
//mouseup при отпускании клика мыши на элементе
$(document).ready(function (){
    // $("#btn1").dblclick(function (){
    //     $(".para1").toggle();
    // });
    // $("#btn1").hover(function (){
    //     $(".para1").toggle();
    // });
    // $("#btn1").on("mouseenter", function (){
    //     $(".para1").toggle();
    // });
    // $("#btn1").on("mouseleave", function (){
    //     $(".para1").toggle();
    // });
    // $("#btn1").on("mousemove", function (){
    //     $(".para1").toggle();
    // });
    // $("#btn1").on("mousedown", function (){
    //     $(".para1").toggle();
    // });
    // $("#btn1").on("mouseup", function (){
    //     $(".para1").toggle();
    // });
    // $("#btn1").click(function (e){
    //     //alert(e.currentTarget.id);
    //     //alert(e.currentTarget.outerHTML); //показывает всю инфу элемента
    //     //alert(e.currentTarget.innerHTML); //показывает что написано между тегом
    //     alert(e.currentTarget.className); //показывает класс элемента
    // });
    // $(document).on("mousemove", function(e){
    //     $("#coords").html(" Coords y: " + e.clientX + " : X " + e.clientY);
    // });

//Focus event, он работает когда вы кликаете на input поле
    $("input").focus(function (){
        // alert("focus");
        $(this).css("background", "pink"); //this означает что в выбранном элементе будет проводиться действие
    });

    $("input").blur(function (){  //blur отвечает за клик вне формы
        $(this).css("background", "white");
    });

    $("input").keyup(function (e){ //показывает сколько раз было нажато кнопок в форме
        console.log(e.target.value);
    });

    $("#gender").change(function (e){  //при изменении select  происходит действие
       alert(e.target.value);
    });

    $("#form").submit(function (e){
        e.preventDefault();
        let name = $("#name").val();
        console.log(name);
    });

//    DOM MANIPULATION
    $("p.pr1").css({color: "red", backgroundColor: "#ccc"});  //для того, чтобы добавить несколько видов
    //стилей, нужно прописать фигурные скобки {что: "значение", что:"значение"}, создаем тип объект
    //$("p.pr2").addClass("myClass");      //.addClass("название класса из ксс") применяет стиль к выбранному
    // дом объекту
   // $("p.pr2").removeClass("myClass");   //данное действие удаляет класс из дом объекта
    $("knp1").click(function(){
        $("p.pr2").toggleClass("myClass");
    });
/*
   // $("#myDiv").text("Hello World");   //добавляет текст к тегу
    $("#myDiv").html("<h3>Hello World</h3>");   //добавляет текст к тегу, так же можно применять теги
   // alert($("#myDiv").text());  //можно применять значения из дом объекта в разных действиях
    $("#listok").append("<li> Append list item</li>");  //добавляет значение к списку в конец
    $("#listok").prepend("<li> Prepend list item</li>");  //добавляет значение к списку в начало
    $(".pr1").appendTo(".pr2");  //cтавит в конец к значению которое указано в appendTo(значение)
    $(".pr1").prependTo(".pr2");  //cтавит в начало к значению которое указано в appendTo(значение)
    $("#listok").before("<h4>Hello</h4>");  //добавляет значение перед дом объектом, не входя в него
    $("#listok").after("<h4>World</h4>");  //добавляет значение после дом объекта, не входя в него
    $("#listok").empty();  //убирает все внутренние значения из выбранного ДОМа, кроме самого элемента
    $("#listok").detach();  //убирает весь ДОМ элемент
    $("#ssilka").attr("target", "_blank"); //добавляет аттрибут к ДОМ элементу
   // alert($("#ssilka").attr("href")); //так же можно получить значения из .attr()
    $("#ssilka").removeAttr("target"); //удаляет аттрибут из ДОМ элемента
    */

    $(".pr1").wrap("<h1>"); //оборачивает значение в определенный тег, автоматом ставит закр. тег
   //$(".pr1").wrapAll("<h1>");

    //в этом коде мы на кнопку enter добавляем значения в #listok
    $("#newItem").keyup(function (e){
        let code = e.which;
        if(code ==13){
            e.preventDefault();
            $("#listok").append("<li>"+e.target.value + "</li>");
        }
    });
   //в этом коде, мы проходимся ко каждому значению массива и добавляем его в li
    const myMass = ["Brad", "Kelley", "Nate", "Jose"];
    $.each(myMass, function (i, val){
        $("#users").append("<li>" + val + "</li>");
    });

    const newMass = $("#listok li").toArray();
    console.log(newMass);
    $.each(newMass, function (i, val){
        console.log(val.innerHTML);
    });
    //4.Effects and animation
    //.fadeOut(параметр отвечает за анимацию ("fast", "slow", 3000, указывается в мс), второй параметр
    //дополнительное действие что будет после того, как анимация закончится
    $("#btnFadeOut").click(function (){
        $("#box").fadeOut(3000, function (){
            $("#btnFadeOut").text("Its gone");
        });
    });
    //.fadeIn() работает так же как и fadeOut, только здесь он появляется, а в fadeOut исчезает
    $("#btnFadeIn").click(function (){
        $("#box").fadeIn(3000);
    });
    //.fadeToggle() содержит в себе две предыдущие функции, при одном нажатии он исчезает, при втором нажатии
    //появляется
    $("#btnFadeTog").click(function (){
        $("#box").fadeToggle(1000);
    });
    //.slideDown() анимация скатывания вниз
    //.slideUp()анимация скатывания вверх
    //.slideToggle() содержит 2 вышестоящие анимации
    //.stop() останавливает анимацию
    $("#btnSlideDown").click(function (){
        $("#box").slideDown(3000);
    });
    $("#btnSlideUp").click(function (){
        $("#box").slideUp(3000);
    });
    $("#btnSlideTog").click(function (){
        $("#box").slideToggle(3000);
    });
    $("#btnStop").click(function (){
        $("#box").stop();
    });

    //Move
    //.animate(в скобках здесь передали объект со значением { left:500 }) т.е означает что объект от лева
    // будет отталкиваться и двинется вправо, работает только если в стиле имеется position:relative;
    //Можно анимировать все, что имеет размер т.е у него идут цифры
    $("#moveRight").click(function (){
        $("#box2").animate({
            left: 500,
            height: "300px",
            width: "300px",
            opacity: "0.5"

        });
    })

    $("#moveLeft").click(function (){
        $("#box2").animate({
            left: 0,
            height: "100px",
            width: "100px",
            opacity: "1"
        });
    });

    $("#moveAround").click(function (){
       let box = $("#box2");
       box.animate({
           left: 300
       });
        box.animate({
            top: 300
        });
        box.animate({
            left: 0,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    });
});


