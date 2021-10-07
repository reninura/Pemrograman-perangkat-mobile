//nama  : Reni Nur Anggraeni
//NIM   : 20190040025
//Tugas : Program Menampilkan Harga sesuai Umur

  //Arrow function dan penggunaan variabel const
  const Tarif = () => {
    // penggunaan variabel let
   let umur = document.getElementById('umur').value;
   let tinggi = document.getElementById('tinggi').value;

   //percabangan dengan if else dan penggunaan template literal
   if(umur === ""){
       return swal.fire('Anda Belum Memasukan umur dan tinggi')
   }else {
       if(umur < 1 && tinggi < 70) {
           return swal.fire('Dilarang Masuk')
       }else if(umur >= 1 && umur <= 3 && tinggi < 70) {
           return swal.fire(`Tarif Anda Rp.${30000}`);
       }else if(umur >= 2 && umur <= 3 && tinggi > 70) {
           //penggunaan template literal
           return swal.fire(`Tarif Anda Rp.${30000} + ${10000} = Rp.${30000 + 10000}`)
       }else if(umur < 7 && tinggi < 120) {
           return swal.fire(`Tarif Anda Rp.${40000}`)
       }else if(umur >= 4 && umur <= 7 && tinggi > 120) {
           return swal.fire(`Tarif Anda Rp.${40000} + Rp.${15000} = Rp.${40000 + 15000}`)
       }else if(umur < 10 && tinggi < 150) {
           return swal.fire(`Tarif Anda Rp.${50000}`)
       }else if(umur >= 8 && umur <= 10 && tinggi > 150) {
           return swal.fire(`Tarif Anda Rp.${50000} + Rp.${20000} = Rp.${50000 + 20000}`)
       }else {
           return swal.fire(`Tarif Anda Rp.${80000}`)
       }   
   }
   document.getElementById("result").innerHTML = umur;
   document.getElementById("result").innerHTML = tinggi;
}