
class Music{
    constructor(title,singer,img,file){
         
      this.title=title;
      this.singer=singer;
      this.img=img;
      this.file=file;

    }

    getName(){
        return this.title+" - "+this.singer;
    }
}


const musicList=[
  new Music("Bir Gün Gelir", "Grup Şahid Ümmet","bir-gungelir.jpg","bir-gun-gelir-grup-sahid-ummet.mp3"),
  new Music("Ensarlar Olun", "Grup-Tevhid","ensarlar-olun.jpg","ensarlar-olun-yeni-turkce-ezgi.mp3"),
  new Music("Sancağım Tevhid Oldu", "İbrahimi Ümmet","sancagim-tevhid-oldu.jpg","sancagim-tevhid-oldu.mp3") ,
  new Music("Tevhid Marşı", "Halis","tevhid-marsi.jpg","tevhid-marsi-grup-sahid-ummet.mp3") 
]
























// class Music {
//     constructor(title, singer, img, file) {
//         this.title = title;
//         this.singer = singer;
//         this.img = img;
//         this.file = file;
//     }

//     getName() {
//         return this.title + " - " + this.singer;
//     }
// }


// const musicList = [
//     new Music("Boşver", "Nilüfer","1.jpeg","1.mp3"),    
//     new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
//     new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3")    
// ];
