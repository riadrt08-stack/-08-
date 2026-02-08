// التاريخ والوقت النهائي للعدّاد
const openTime = new Date("2026-02-14 00:00:00").getTime(); // عدل التاريخ والساعة

// دالة تحقق الباسورد
function check(){
  let p = document.getElementById("pass").value;
  if(p != "2025/6/20"){
    alert("الباسورد غلط 🙂");
    return;
  }

  document.getElementById("page1").classList.add("hidden");
  document.getElementById("countdownPage").classList.remove("hidden");

  startCountdown();
  createHearts();
}

// دالة العدّاد
function startCountdown(){
  let x = setInterval(()=>{
    let now = new Date().getTime();
    let diff = openTime - now;

    if(diff <= 0){
      clearInterval(x);
      document.getElementById("countdownPage").classList.add("hidden");
      showPage2(); // صفحة النهائية تظهر مع الانيميشن
      return;
    }

    let d = Math.floor(diff / (1000*60*60*24));
    let h = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
    let m = Math.floor((diff % (1000*60*60))/(1000*60));
    let s = Math.floor((diff % (1000*60))/1000);

    document.getElementById("timer").innerHTML =
      `<span class="time-box">${d}</span> يوم
       <span class="time-box">${h}</span> ساعة
       <span class="time-box">${m}</span> دقيقة
       <span class="time-box">${s}</span> ثانية`;

  }, 1000);
}

// دالة صفحة النهائية مع الانيميشن
function showPage2(){
  const page2 = document.getElementById("page2");
  page2.classList.remove("hidden");

  // تشغيل الأغنية
  const song = document.getElementById("song");
  song.play();

  // العداد بالأيام منذ بداية العلاقة
  const startDate = new Date("2025-06-20"); // عدل التاريخ هنا ليوم بدايتكم
  const today = new Date();
  const dayDiff = Math.floor((today - startDate)/(1000*60*60*24));
  document.getElementById("daysCounter").innerText =
    "عدى علينا " + dayDiff + " يوم سوا ❤️";

  // انيميشن النصوص
  const texts = page2.querySelectorAll("h2, p");
  texts.forEach((el, i)=>{
    el.style.opacity = 0;
    setTimeout(()=>{
      el.style.transition = "opacity 1s";
      el.style.opacity = 1;
    }, i*500); // كل عنصر يظهر بعد 0.5 ثانية من اللي قبله
  });

  // انيميشن الصور
  const images = page2.querySelectorAll("img");
  images.forEach((img, i)=>{
    img.style.opacity = 0;
    setTimeout(()=>{
      img.style.transition = "opacity 1s";
      img.style.opacity = 1;
    }, texts.length*500 + i*500); // الصور تبدأ تظهر بعد النصوص
  });
}

// دالة الرسالة الأخيرة
function showMsg(){
  let popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  setTimeout(()=>{popup.classList.add("hidden");},3000);
}

// تأثير قلوب صغيرة تتحرك في صفحة العدّاد
function createHearts(){
  const heartsDiv = document.getElementById("hearts");
  for(let i=0;i<15;i++){
    let heart=document.createElement('div');
    heart.className='heart';
    heart.style.left=Math.random()*90+'%';
    heart.style.animationDuration=(3+Math.random()*4)+'s';
    heart.style.opacity=Math.random();
    heartsDiv.appendChild(heart);
  }
}