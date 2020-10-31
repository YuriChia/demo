import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3
} from "../../../build/three.module.js";

var ClickableObject = function(object, domElement){

    object.addEventListener('touchstart', onMouseDown, false);

    function onMouseDown(e){
        console.log('hihi');
    }
    //console.log(object);
    // object.cursor = 'pointer';
    // object.on('click', function(){ onClick() },false);
    //this.update();
    function onClick(){
        console.log('noob');
    }
};

export{ClickableObject};