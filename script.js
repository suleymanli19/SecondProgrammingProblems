//1. verilmiw ededin sade eded oldugunu arawdirin
// let a = 31;
// let f = 0; //bolenlerin sayini ifade edir
// for (let i = 2; i <= a / 2; i++) {
//     if (a % i === 0) {
//         f++;
//     }
    
// }
// console.log(f)

// if (f === 0) {
//     console.log("Prime")
// } else console.log("Not Prime");

//------------------------------------------------------------------------------------//

//2.verilmiw ededin sade guzgu oldugunu arawdirin

//---------------------------------------------------------------------------------//

//3. 1 ve n araligindaki sade ededleri ekrana cixardin.............................
// const n = parseInt(prompt('n ededini daxil et: '));

// console.log(`Sade ededler 1 ve ${n} arasindadir:`);

// for (let i = 1; i <= n; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

//---------------------------------------------------------------------------------//

//4. 1 ve n araligindaki polindrome ededleri ekrana cixardin

//---------------------------------------------------------------------------------//

// 5. n ve m araligindaki sade ededleri yazin
// const kicikeded = parseInt(prompt('Kicik ededi daxil et: '));
// const boyukeded = parseInt(prompt('Boyuk ededi daxil et: '));

// console.log(`Sade ededler ${kicikeded} ve ${boyukeded} arasindadir:`);

// for (let i = kicikeded; i <= boyukeded; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

//-------------------------------------------------------------------------------------//

//6. n ve m araligindaki butun polindrome ededleri cixiwa verin.

//---------------------------------------------------------------------------------------//

//7.n ve m araligindaki 3 ve 4-e tam bolunen ededleri ekrana cixardin.
// const n = parseInt(prompt('n ededini daxil et: '));
// const m = parseInt(prompt('m ededini daxil et: '));
// console.log(`3 ve 4-e tam bolunen ededler ${n} ve ${m} arasindadir:`);

// for (let i = n; i <= m ; i++) {
//     if (i % 3 === 0 && i % 4 === 0) {
//         console.log(i)
//     }
    
// }

//--------------------------------------------------------------------------------------------//

//9. B??t??n 4 r??q??mli ??d??dl??r aras??ndak?? polindrom ??d??dl??ri ekrana ????xard??n.

//----------------------------------------------------------------------------------------------//

//10. n v?? m aral??????ndak?? b??t??n 3 - ?? tam b??l??n??n ??d??dl??rin hasilini ekrana ????xard??n.
// const n = parseInt(prompt('n ededini daxil et: '));
// const m = parseInt(prompt('m ededini daxil et: '));
// console.log(`${n} ve ${m} arasinda olan, 3-e tam bolunen ededlerin hasili:`);
// let product = 1;
// for(let i=n; i<m; i++) {   
//     if(i % 3 === 0){            
//         product *= i;        
//     } 
// }  
// console.log(product)

//-------------------------------------------------------------------------------------------------//

//11. n v?? m aral??????ndak?? b??t??n c??t ??d??dl??rinin, hasilinin 3 - c?? d??r??c??d??n k??k??n?? ekrana ????xard??n.
// const n = parseInt(prompt('n ededini daxil et: '));
// const m = parseInt(prompt('m ededini daxil et: '));
// console.log(`${n} ve ${m} arasinda olan cut ededlerin hasilinin 3-cu dereceden koku: `);
// let product = 1;
// for (let i = n; i < m; i++) {
//     if (i % 2 === 0) {
//         product *= i;
//     }
// }
// let a = product ** 1/3;
// console.log(a)

//------------------------------------------------------------------------------------------------//

//12. Verilmi?? ??d??din ??ksini tap??n. 1234 -> 4321
// let num = 1234;
// let reverse = 0;
// while (num !== 0) {
//     reverse = reverse * 10 + num % 10;
//     num = Math.floor(num / 10) ;
// }
// console.log(reverse)

//-------------------------------------------------------------------------------------------//

//13. Iki ??d??din c??mini tap??b ekrana ????xardan funksiya yaz??n
// const n = parseInt(prompt('n ededini daxil et: '));
// const m = parseInt(prompt('m ededini daxil et: '));
// function add(){
//     let num1 = n;
//     let num2 = m;
//     let cem = num1 + num2;

//     console.log(`${num1} ve ${num2}-nin cemi: ${cem} `);
// }
// add();

//----------------------------------------------------------------------------------------//

//14. Iki ??d??din qismetini tap??b ekrana ????xardan funksiya yaz??n
// const n = parseInt(prompt('n ededini daxil et: '));
// const m = parseInt(prompt('m ededini daxil et: '));
// function multi(){
//     let num1 = n;
//     let num2 = m;
//     let qismet = num1 / num2;

//     console.log(`${num1} ve ${num2}-nin qismeti: ${qismet} `);
// }
// multi();

//-----------------------------------------------------------------------------------------//

//15. Iki ??d??din hasilini tap??b ekrana ????xardan funksiya yaz??n
// const n = parseInt(prompt('n ededini daxil et: '));
// const m = parseInt(prompt('m ededini daxil et: '));
// function product(){
//     let num1 = n;
//     let num2 = m;
//     let hasil = num1 * num2;

//     console.log(`${num1} ve ${num2}-nin hasili: ${hasil} `);
// }
// product();

//------------------------------------------------------------------------------------------//

//17. Ulduzlari duzbucaqli ucbucag weklinde duzmeliyik
// let i, j;
// for(i=1; i<=5; i++)
// {
//  for(j=1; j<=i; j++)
//   document.write("*");
//   document.write("<br>");
// }

//18.reqemlerle duzbucaqli ucbucag
// let i, j;
// for(i=1; i<=5; i++)
// {
//  for(j=1; j<=i; j++)
//   document.write(j);
//   document.write("<br>");
// }

//19.
// let i, j;
// for (i = 1; i <= 5; i++) {
//  for (j = 1; j <= i; j++) 
//     document.write(i);
//     document.write("<br>");
// }

//20.
// let i, j, k;
// for(i=1; i<=5; i++)
// {
//  for(j=i; j<5; j++)
//   document.write("&nbsp;&nbsp;");
//  for(k=1; k<i*2; k++)
//   document.write("*");
//   document.write("<br>");
// }

//21.








//--------------------------------------
//ESAS YOLDUR
//--------------------------------------
// for (let j = 1; j < 1000; j++) {
//     let a = j;
//     let f = 0;
//     for (let i = 2; i < Math.sqrt(a)+1; i++) {
//         if (a % i === 0) {
//             f++;
//         }
        
//     }
//     if (f === 0) {
//         console.log(j)
//     }       
// }






