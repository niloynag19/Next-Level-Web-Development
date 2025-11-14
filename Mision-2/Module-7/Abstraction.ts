
// Abstraction
// interface MediaPlayer{
//     play():void;
//     pause():void;
//     stop():void;
// }

// class Musicplayer implements MediaPlayer{
//     play(): void {
//         console.log("Playing music...")
//     }

//     pause(): void {
//         console.log("pause the music")
//     }
//     stop(): void {
//         console.log("Stop the music")
//     }
// }

// const user=new Musicplayer();
// user.pause();



abstract class MediaPlayer{
    abstract play():void;
    abstract pause():void;
    abstract stop():void;
}

class MezbaPlayer extends MediaPlayer{
    play(){
        console.log("Play the music")
    }
    pause(){
        console.log("Pause the music")
    }
    stop(){
        console.log("Stop the music")
    }
}


const user=new MezbaPlayer();
user.pause();