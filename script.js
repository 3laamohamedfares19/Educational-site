//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;

var HTMLquestions = [

    {
        
        question: " تتكون الوسائط المتعددة من مقطعين احدهما ....",
        choices: ["output ", "media ", "cdrom ", "codeing "],
        answer: 2

    },

    {
        question: "كلمة تعني التعددية....",
        choices: ["multi  ", "mgia", "media", "mata"],
        answer: 3

    },
    {
        question: "من مميزات الوسائط المتعددة.....",
        choices: ["توفير الوقت والجهد للمتعلم والمعلم", "عدم جذب انتباه المتعلم", "تجعل العملية التعليمية صعبة", "لاتوفر مرونة "],
        answer: 1

    },
    {
        question: "من مراحل حل المشكلات.....",
        choices: ["نصوص", "تحديد المشكلة", "فيديو", "صوت"],
        answer: 2

    },
    {/*5*/
        question: "جذب الانمتباه وسرعة الفهم من ....الوسائط المتعددة في التعليم ",
        choices: ["عيوب", "مميزات", "سلبيات", "ايجابيات"],
        answer: 2

    },
    {
        question: "تحديد ....من مراحل حل المشكلات",
        choices: ["الوقت", "الجهد", "العملية التعليمية", "المخرجات"],
        answer: 4

    },
    {
        question: "تعتبر ....من عناصر الوسائط المتعددة",
        choices: ["الصوت فقط", "الصورة فقط", "الصورة و الصوت ", "لاتوجد اجابة صحيحة"],
        answer: 3

    },
    {
        question: "تعتبر تحديد المشكلة ...مراحل حل المشكلة",
        choices: [" المرحلة الاولى", " المرحلة الثالثة", "المرحلة الثانية", "المرحلة الرابعة"],
        answer: 1

    },
    {
        question: "الوسائط المتعددة تهدف الي تحقيق....",
        choices: ["المتنوعة", "التقاطعية", "التعددية", "التفاعلية"],
        answer: 4

    },
    {/*10*/
        question: "تحديد  المشكلة والمتطلبات الخاصة بالمشروع من تحليل واجهة .....",
        choices: ["البرمجية", "العنوان", "الموقع", "اللغة"],
        answer: 1

    }

];

var CSSquestions = [

    {
        question: "لانشاء مجلد من قائمة....",
        choices: ["file", "edit", "class", "name"],
        answer: 1

    },
    {
        question: "لحذف مجلد اختر الامر...",
        choices: ["margin", "delet", "float", "padding"],
        answer: 2

    },
    {
        question: "للبحث من خلال الانترنت....",
        choices: ["d-inex", "s-index", "x-index", "search"],
        answer: 4

    },
    {/*4*/
        question: "محركات البحث هي ....",
        choices: ["Yes, we can", "search engines", "Depends on browser", "Depends upon operating System"],
        answer: 2

    },
    {
        question: "نظام التشغيل يقوم بادراة...?",
        choices: ["wrap", "push", "files", "align"],
        answer: 3

    },
    {/*6*/
        question: "يتم البحث عن المعلومات باستخدام كلمات مفتاحية....",
        choices: ["pointer", "keyword", "arrow", "arr"],
        answer: 2

    },
    {
        question: "يمكننا انزال ملفات مثل ....",
        choices: ["صوت فقط", "صور فقط", "صوت وصور", "لاتوجد اجابة"],
        answer: 3

    },
    {/*8*/
        question: "لاعادة تسمية مجلد....",
        choices: ["ranem", "blank-cell", "noncontent-cell", "void-cell"],
        answer: 1

    },
    {
        question: "حذف مجلد نحتار....",
        choices: ["640 pixels", "delet", "full-screen", "1024px"],
        answer: 2

    },
    {
        question: "تقدم شبكة الانترنت العديد من خدمات منها خدمة",
        choices: ["الانترنت نت", "الاتصال", "التعليق", "جميع ماسبق"],
        answer: 1

    }

];
var JSquestions = [

    {
        question: "نوع متميز من المراجع....?",
        choices: ["تجميع بيانات المشروع.", "الموضوعات المقالية.", "الموسوعات الالكترونية", " غير ذالك"],
        answer: 3

    },
    {/*wscubetech*/
        question: "اهم الموسوعات....",
        choices: ["Function", "wikipedia", "FilleUpload", "Data"],
        answer: 2

    },
    {
        question: "توجد طريقيتن لتنظيم وترتيب المعلومات",
        choices: ["خطا", "صح"],
        answer: 2

    },
    {
        question: "التريتيب يتم حسب التصنيف العلمي",
        choices: ["صح", "خطا"],
        answer: 1

    },
    {
        question: "الترتيب حسب الاحرف الهجائية",
        choices: ["خطا", "صح"],
        answer: 2

    },
    {
        question: "الترتيب حسب الموضوعات؟",
        choices: ["خطا", "صح"],
        answer: 2

    },
    {
        question: "اهمية الموسوعات....",
        choices: ["المسارات", "الترتيب العشوائي", "تعرض تلخيص منظم للمعرفة", "الجدوال الالكترونية"],
        answer: 3

    },
    {
        question: "البحص داخل الموسوعات الالكترونية يتم بطريقة....",
        choices: ["منظمة", "مخفية", "سلسلة", "عشوائية"],
        answer: 1

    },
    {
        question: " من اهم الموسووعات ويكبيديا؟",
        choices: ["خطا", "صح"],
        answer: 2

    },
    {
        question: "هناك ثلاثة طرق لعرض الموسوعات الالكترونية؟",
        choices: ["خطا", "صح"],
        answer: 1

    }

];
var PYquestions = [

    {
        question: "برامج تساعد على تجميع البيانات بصورة منظمة ومرتبة",
        choices: ["الجدوال الالكترونية", "المصفوفات", "الاستعلامات", "المحفوظات"],
        answer: 1

    },
    {
        question: "من انواع البيانات..0..",
        choices: ["تجاريية", "تصويت", "رقمية", "نصية"],
        answer: 4

    },
    {
        question: "انشاء جدول بيانات عن طريق بررنامج...",
        choices: ["اكسل", "ورد", "باوربينت", "كانفا"],
        answer: 1

    },
    {
        question: "البيان العددي هو عبارة عن.... ",
        choices: ["نص", " رقم", "صوررة", "صوت"],
        answer: 2

    },
    {
        question: "الصيغ هي المعادلة الرياضية المستخدمة؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "تستطييع باقل مجهود ان تدخل مجموعة من البيانات",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "البيان نصي عبارة عن رمز وحرف؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "البيان العددة عبارة عن نص؟",
        choices: ["صح","خطا"],
        answer: 2

    },
    {
        question: "يمكن انشاء قاعدة بيانات باستخدام الجدوال الالكترونية؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "يمكننا انشاء مصنف جديد؟",
        choices: ["صح","خطا"],
        answer: 1

    }

];
var Cquestions = [

    {
        question: "...هي برامج تمكن من انشاء ومعالجة الصور",
        choices: ["برامج تحرير ومعالجة الصور", "الملفات", "الفيديو", "الصوت"],
        answer: 1

    },
    {
        question: "يوجد انواع عديدة من انواع ملفات الصور؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "jpj من انواع امتدادت ملفات الصور؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "يمكننا ضبط حجم الصورة؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "لا نستطيع اضافة تاثيرات على الصور؟",
        choices: ["صح","خطا"],
        answer: 2

    },
    {
        question: "نستطيع حفظ الصورة بالامتداد الذي نريده؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "يمكنك التعامل مع 15 مليون لونا؟",
        choices: ["صح","خطا"],
        answer: 2

    },
    {
        question: "يمكنك التعامل مع 16 مليون لونا؟",
        choices: ["صح","خطا"],
        answer: 1

    },
    {
        question: "Gif ياخذ مساحة كبيرة؟",
        choices: ["صح","خطا"],
        answer: 2

    },
    {
        question: "psd من انواع امتدادت الصور",
        choices: ["صح","خطا"],
        answer: 1

    }

];





//alert(questions.length);
document.getElementById("score").textContent = "Score : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";








document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

    //    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

    //    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click", function () {
    //     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
    //     alert(document.querySelector('input[name="options"]:checked').value);

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    };

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "You Solved " + (countQues + 1) + " questions of " + document.getElementById("language").value;

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " were Right and " + ((countQues + 1) - correct) + " were Wrong";

    document.getElementById("display-final-score").innerHTML = "Your Final Score is: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = "Remark: OutStanding ! :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Remark: Good, Keep Improving.";

    } else if (correct / (countQues + 1)) {
        document.querySelector(".remark").innerHTML = "Remark: Satisfactory, Learn More.";
    } else {
        document.querySelector(".remark").innerHTML = "Remark: Unsatisfactory, Try Again.";
    }

    //    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
