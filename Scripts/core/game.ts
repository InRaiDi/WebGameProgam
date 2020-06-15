// Imidiate Invoked Anonymous Function

(function() {

    // Global Game Var
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:createjs.Text;


    function Init(){
        console.log("Initializing Start");
    Start();
    }

    function Start(){
        console.log("Starting app");
        //init 
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update(){
        stage.update();
        helloLabel.scaleX+=0.001;
        helloLabel.scaleY+=0.001;

        //movement here
    }


    function Main(){
         console.log("Game Start");
         helloLabel = new createjs.Text("Hello world", "40px Arial", "#00FF00");
         helloLabel.x=100;
         helloLabel.y=100;
         stage.addChild(helloLabel);
    }


    window.onload = Init;
})();