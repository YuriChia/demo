import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3
} from "../../../build/three.module.js";

import * as THREE from '../../../build/three.module.js';

var RaycastTarget = function(object, objectName, camera, callback, domElement){

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();    
    var raycastObject = object;
    var sceneCamera = camera;
    var raycastCallback = callback;

    document.body.appendChild(domElement);
    document.addEventListener( 'click', onMouseDown);
    domElement.addEventListener('touchstart', onTouchStart);

    function onMouseDown(event){
        event.preventDefault();
        
         mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
         mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
         
         raycast();
    }    

    function onTouchStart(event){
        //event.preventDefault();
        
         mouse.x = ( event.touches[0].pageX / window.innerWidth ) * 2 - 1;
         mouse.y = - ( event.touches[0].pageY / window.innerHeight ) * 2 + 1;
         
         raycast();
    }

    function captureEvent(event){
         event.preventDefault();
        
         mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
         mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
         
         raycast();
    }

    function raycast(){
        raycaster.setFromCamera(mouse, camera);
				var intersection = raycaster.intersectObject( object , true);
				
				if ( intersection.length > 0 ) {					
					var instanceId = intersection[ 0 ].instanceId;
                    //console.log(intersection[0]);
                    //console.log(intersection[0].object.name);
                    
                    callback(objectName,intersection[ 0 ].point);
				}
    }

    function raycastCallbackExample(raycastObjectName){
        //do something with the result
    }
};

export {RaycastTarget};