import { Injectable, EventEmitter } from '@angular/core';
import { Horoscope } from './horoscope.model';


@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {
horoscopeSelected = new EventEmitter<Horoscope>();

  private horoscopes:Horoscope[]=[
      
    new Horoscope('ARIES','Mar 21 - Apr 19','../src/img/aries.jpg','Belajar dari kesalahan yang dibuat membuat Anda lebih dewasa.','Anda harus cermat dan cepat dalam mengambil keputusan  bisnis.','Anda harus bersikap wajar saat menghadapi pacar.','Sejak rajin bangun pagi kulit jadi cerah.'),
    new Horoscope('TAURUS','April 20 - Mei 20','../src/img/taurus.jpg','Anda sering sebal dengan orang yang mendekati Anda hanya karena azas manfaat.','Anda tak banyak pilihan untuk pindah-pindah kerja karena keterbatasan usia.','Ingin merayakan Natal dengan pacar.','Sudah kerja keras sepanjang tahun kini saatnya membuat rencana liburan.'),
    new Horoscope('GEMINI','Mei 21 - Jun 20','../src/img/gemini.jpg','Anda sering telat mikir gara-gara kurang konsentrasi.','Biar gaji kecil yang penting mencukupi.','babak baru Anda dengan pasangan sudah dimulai.','Asam lambung membuat badan jadi limbung'),
    new Horoscope('CANCER','Jun 21 - Jul 22','../src/img/cancer.jpg',' Orang jujur banyak yang makmur.','Rajin mendatangi job fair agar bisa dapat lowongan pekerjaan.','Anda ingin punya pacar dengan kepribadian yang hangat','Saat hari kerja sulit untuk Anda membagi waktu untuk aktivitas lain.'),
    new Horoscope('LEO','Jul 23 - Aug 22','../src/img/leo.jpg','Segala hal harus dipikir dengan logika jangan malam main perasaan.','Kalau mau banyak rezeki jangan malas-malasan','Punya pacar berparas menarik membuat Anda was-was','Anda sering terlihat dengan wajah cemberut membuat daya tarik menghilang'),
    new Horoscope('VIRGO','Aug 23 - Sep 22','../src/img/virgo.jpg','Namanya juga usaha ada kalanya jatuh dan bangkit lagi.','Hidup lebih tenang kalau sudah punya pekerjaan tetap.','Anda paling sebal kalau ada teman yang mencoba menikung Anda dalam percintaan.','Anda tak begitu suka minum susu.'),
    new Horoscope('LIBRA','Sep 23 - Okt 22','../src/img/libra.jpg','Anda jadi jarang masuk ke kantor karena ada proyek sampingan.','Kurangi main-main di jam produktif','Punya pacar tukang cari perhatian','Pakaian dalam harus nyaman agar Anda bisa merasa tenang saat beraktivitas.'),
    new Horoscope('SCORPIO','Okt 23 - Nov 21','../src/img/scorpio.jpg','Akhir tahun sibuk dengan proyek kecil-kecilan namun sukses menambah pundi-pundi.','Rezeki selalu mengalir deras karena lihai membaca peluang.','Jangan kan menikah punya pacara saja belum tertarik','Habis olahraga jangan langsung makan.'),
    new Horoscope('SAGITARIUS','Nov 22 - Des 21','../src/img/sagitarius.jpg','Anda harus bicara dari ke hati dengan keluarga agar mendapat dukungan saat mau memulai usaha.','Terlalu ambisius bekerja sambil kuliah.','Bicara dengan bahasa lemah lembut pada pasangan','Takut kaki varises kalau olahraga terlalu berat.'),
    new Horoscope('CAPRICORN','Des 22 - Jan 19','../src/img/capricorn.jpg','Anda tak muda terganggu dengan komentar orang yang kadang tak sesuai kata hati.','Anda kurang suka mendapat tugas ke luar kota.','Satu kantor dengan pacar ada enak dan tidak enaknya.','Keringat yang keluar saat olahraga membuat badan segar.'),
    new Horoscope('AQUARIUS','Jan 20 - Feb 18','../src/img/aqua.jpg','Anda jadi sering tersenyum karena semua yang dikerjakan hasilnya memuaskan','Anda harus hati-hati dengan rekan bisnis yang terlalu ambisius','Anda terlalu percaya pada pasangan.','Lemak merusak bentuk badan Anda.'),
    new Horoscope('PISCES','Feb 19 - Mar 20','../src/img/pisces.jpg',' Pengorbanan Anda untuk maju benar-benar mengagumkan.','Banyak cara halal untuk mendapatkan uang','Putus dari si Dia merupakan kesalahan terbesar yang Anda buat.','Anda sering terganggu dengan komentar orang pada cara berpakaian Anda'),

   
   
    ];
  
    getHoroscopes(){
      return this.horoscopes.slice();
    }
    
    

}
