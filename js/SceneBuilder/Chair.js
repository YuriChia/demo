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

var Chair = function(scene, name){
    var loader = new FBXLoader();
    loader.load( './models/chair/Stool.fbx', function ( object) {
        for(var i = 0; i < 2; i++){       

            var obj = object.clone();
            obj.name = name;                                                            

            obj.traverse( function ( child ) {
                
                if ( child.isMesh ) {														                    

                    console.log(child);
                    child.castShadow = true;
                    child.receiveShadow = true;

                }

            } );                        

            scene.add( obj );            
        }			
    } );
};

export { Chair };