const members = {

    ROMA: {
        description:
            "المؤسسة العليا للفوضى، والسلطة التي لا تُراجع قراراتها، وملكة القصيم بالتفويض الشعبي. كلمتها دستور، ووجودها إعلان رسمي عن بدء الفعاليات غير المنطقية."
    },

    JOLE: {
        description:
            "العبقرية الإدارية التي تستطيع تنظيم الفوضى وإعطاء العبث صفة رسمية. إذا ضاع النادي، فهي من تعيد ترتيب أوراقه، وإذا انهار النظام، فهي من تعقد اجتماعًا عاجلًا لمناقشة أسباب الانهيار."
    },

    "شوق": {
        description:
            "المطبّلة الأولى لموسكو، والراعية الرسمية لشؤون الحش والقوسب. تمتلك أرشيفًا من الأخبار والتحليلات التي لم تطلبها اللجنة، لكنها ستسمعها كاملةً سواء رغبت أم لم ترغب."
    },

    SHAHAD: {
        description:
            "العرّابة الرسمية للفكر الذكوري، والليدر المعتمد لنادي المهرجين، والرئيسة التنفيذية لهيئة تعزيز مكانة وسيمنا. تدير القروب بقبضة حديدية، وقد تقفله في أي لحظة دون سابق إنذار، ثم تكتمنا بكل برود وكأنها ما ارتكبت جريمة بحق الإنسانية. قراراتها نافذة، والاعتراض عليها قد يؤدي إلى الإقصاء من القروب بقرار سيادي."
    },

    AWTAR: {
        description:
            "الموهبة الكوميدية التي لا تعترف بقوانين التوقيت أو المنطق. قد تصمت ساعة كاملة، ثم تلقي ذبة واحدة تتسبب في انهيار الاجتماع وإعادة النظر في سلامة عقول الحاضرات."
    },

    RIMO: {
        description:
            "أصغر عضوات النادي سنًّا، وأسرعهن استجابةً لأي ذبة تُلقى في الأجواء. تضحك على الجميع ولا تستثني أحدًا، وتمثل العراق خير تمثيل في مجال الضحك والتعليقات العبثية. وجودها في القروب ضمان رسمي لارتفاع نسبة الضحك وانخفاض مستوى الرزانة."
    },

    TYLU: {
        description:
            "تدير أعمال صليح العاطفية من خلف الكواليس، وتقدم خدمات التطبيل مجانًا وعلى مدار الساعة. جدة في القلب، وصليح في البال، والمنطق قدّم استقالته منذ انضمامها للنادي."
    },

    AMJAAD: {
        description:
            "عضوة تعمل بنظام الدوام المرن؛ تختفي عن الأنظار طوال اليوم، ثم تعود في آخر الليل وكأنها وصلت للتو من مهمة سرية. لا أحد يعرف أين كانت، ولا أحد يجرؤ على السؤال، لكن ظهورها الليلي أصبح من الثوابت الكونية للنادي."
    },

    REEM: {
        description:
            "قليلة الظهور في أروقة القروب، لكن حسابها يتحدث عنها أكثر مما تفعل هي. تظهر بصمت، وتترك خلفها صورًا تجعلنا نتساءل: هل هذه عضوة في نادي المهرجين أم مصوّرة عالمية متخفية بيننا؟ حضورها محدود، لكن إبداعها في التصوير يتكفل بالباقي."
    },

    REE: {
        description:
            "تختفي أسبوعًا، وتعود بذبة، ثم تختفي وكأنها لم تكن. العدو اللدود لذكورية شهد � لوسيمنا، تؤمن بأن المنطق أولًا وآخر كلمة لها، حتى لو اضطرت لفتح جلسة استئناف. حضورها نادر، لكن آثارها النفسية دائمة."
    }

};


const overlay = document.getElementById("profileOverlay");
const profileName = document.getElementById("profileName");
const profileDescription = document.getElementById("profileDescription");
const closeButton = document.getElementById("closeProfile");

let previousButton = null;


// Open the selected member profile

document.querySelectorAll(".member-button").forEach((button) => {

    button.addEventListener("click", () => {

        const name = button.dataset.member;
        const member = members[name];

        if (!member) {
            return;
        }

        previousButton = button;

        profileName.textContent = name;
        profileDescription.textContent = member.description;

        overlay.classList.add("active");

        closeButton.focus();

    });

});


// Close the profile

function closeProfile() {

    overlay.classList.remove("active");

    if (previousButton) {
        previousButton.focus();
    }

}

closeButton.addEventListener("click", closeProfile);


// Close when clicking outside the card

overlay.addEventListener("click", (event) => {

    if (event.target === overlay) {
        closeProfile();
    }

});


// Close with Escape key

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        overlay.classList.contains("active")
    ) {
        closeProfile();
    }

});