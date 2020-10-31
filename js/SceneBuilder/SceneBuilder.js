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

import { Vehicle } from'/js/model/Vehicle.js';
import { ChessTable } from'/js/SceneBuilder/ChessTable.js'
import { TWEEN } from'/js/Tween.js'

var SceneBuilder = function(scene){

	var vehicleName = 'ship';
	var chessTableName = 'chessTable';

	var pos, targetPos;
	var counter = 1;
	var animate = false;

    var scene = scene;
	var vehicle;			

	var chessTable = new ChessTable(scene, undefined, chessTableName);	

    vehicle = new Vehicle(scene, vehicleName, './models/chair/Stool.fbx', new THREE.Vector3(-25,0,0), '#FF0000', 1, OnModelLoad);    	
	
	this.update = function(){
		if(animate){
			var tween = new TWEEN.Tween(pos)					
					.to(targetPos,500)		
					.easing(TWEEN.Easing.Quadratic.InOut)			
					.delay(250)
					.onUpdate(function(){						
						if(counter + 1 < chessTable.getLength()){						
							if(pos.equals(targetPos)){												
								counter += 1;
								targetPos = chessTable.getStep(counter).position;
								animate = true;
							}
						}						

						vehicle.position.set(pos.x, pos.y, pos.z);
					})
					.start();		

					animate = false;
			
		}

		TWEEN.update();
	};

	function OnModelLoad(model){
		vehicle = model;
		var tempPos = chessTable.getStep(0).position;
		pos = tempPos;
		counter = 1;
		targetPos = chessTable.getStep(1).position;

		vehicle.position.set(pos.x, pos.y, pos.z);	
		chessTable.addChild(model);
		console.log(vehicle);
		animate = true;
	}
};

export { SceneBuilder };