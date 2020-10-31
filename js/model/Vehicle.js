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
import { FBXLoader } from '/js/FBXLoader.js';

var Vehicle = function(scene, name, src, position, color, scale, onModelLoad){    
    var loader = new FBXLoader();
    loader.load( src, function ( object) {        
            var obj = object.clone();
            obj.name = name;                                     
            
            if(position != undefined){                       
                obj.position.set(position.x, position.y, position.z);
            }            

            if(scale != undefined){
                obj.scale.set(scale, scale, scale);
            }

            obj.traverse( function ( child ) {
                
                if ( child.isMesh ) {														                    
                    
                    child.material = child.material.clone();

                    if(color != undefined){
                        child.material.color.set(color);
                    }

                    child.castShadow = true;
                    child.receiveShadow = true;

                }

            } );                        

            scene.add( obj );            
            
            onModelLoad(obj);
            //console.log(obj);
    } );    
};

export { Vehicle };