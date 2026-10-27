// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false


// function bolinsin(x, y) {
//     if(x>=y){
//     if(x%y == 0){
//         return true
//     }
//     else   {
//         return false
//     }}
//     else{
//         return "bIRINCHI SON KATTA BOLSIN "
//     }
// }

// console.log(bolinsin(3,4));
// console.log(bolinsin(44,6));





// ===================================================================================

// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.


// function raqam(str) {
//  return  Number(str)
// }
// console.log(raqam("4"));
// console.log(raqam("d"));


// ===================================================================================

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.


// function tortYuzi(a, b) {
//     if(a>0 && b>0 ){
//         return a*b
//     } else return "-1"
// }
// console.log(tortYuzi(3,4));
// console.log(tortYuzi(-3,4));






// ===================================================================================

// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin.


// function ismFam(ism, familiya) {
//     if (typeof ism === "string" && typeof familiya === "string") {
//         return `${ism}, ${familiya}`;
//     }
//     return "Ism va familiya string bo‘lishi kerak";
// }

// console.log(ismFam("Nodirjon", "Mahammadov"));
// console.log(ismFam("Nodirjon", 4));

// ===================================================================================
// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true) ᔍ "sad days"
// bug(false) ᔍ "it's a good day"



// function bug(bool) {
//     if (bool === true) {
//         return "sad days";
//     } else {
//         return "it's a good day";
//     }
// }

// console.log(bug(true));
// console.log(bug(false));





// ===================================================================================


// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.

// function tushirMassiv(arr, tushirishSoni) {
//     return arr.slice(tushirishSoni);
// }

// console.log(tushirMassiv([1, 2, 3, 4, 5], 2));



// ===================================================================================

// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.

// function ovozlar(ovozObj) {
//     return ovozObj.upvotes - ovozObj.downvotes;
// }

// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));
// console.log(ovozlar({ upvotes: 132, downvotes: 10 }));

// ===================================================================================



// ===================================================================================





// ===================================================================================





// ===================================================================================






// ===================================================================================






// ===================================================================================








// ===================================================================================





// ===================================================================================







// ===================================================================================







// ===================================================================================








// ===================================================================================









// ===================================================================================

