class MusicPlayer{
    constructor(musicList){
        this.musicList=musicList;
        this.Index=0;
    };

    getMusic(){
      return  this.musicList[this.Index];
    };

    next(){
        if(this.Index<this.musicList.length-1){
                this.Index++;
        }else{
             this.Index=0;
        }
    };
    prev(){
        if(this.Index!=0){
                this.Index--;
        }
        else{
             this.Index=this.musicList.length-1;
        }
    };
};































// class MusicPlayer {
//     constructor(musicList) {
//         this.musicList = musicList;
//         this.index = 0;
//     }

//     getMusic() {
//         return this.musicList[this.index];
//     }

//     next() {
//         if(this.index + 1 != this.musicList.length) {
//             this.index++;
//         }
//         else {
//              this.index = 0;
//         }
//     }

//     previous() {
//         if(this.index != 0) {
//             this.index--;
//         } else {
//             this.index = this.musicList.length - 1;
//         }
//     }
// }