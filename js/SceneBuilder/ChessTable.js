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

var ChessTable = function(scene, position, name){

    var scene = scene;

    var chessTable = new THREE.Group();

    if(position != undefined){
        chessTable.position.set(position.x, position.y, position.z)
    }

    if(name != undefined){
        chessTable.name = name;
    }
    

    var blockPosition = [new THREE.Vector3(0,10,0),new THREE.Vector3(0,10,0),new THREE.Vector3(-105,10,0),new THREE.Vector3(-210,10,0)
                        ,new THREE.Vector3(-210,10,-105),new THREE.Vector3(-210,10,-210),new THREE.Vector3(-105,10,-210)
                        ,new THREE.Vector3(0,10,-210),new THREE.Vector3(105,10,-210),new THREE.Vector3(210,10,-210)
                        ,new THREE.Vector3(210,10,-105),new THREE.Vector3(210,10,0),new THREE.Vector3(210,10, 105)
                        ,new THREE.Vector3(210,10, 210),new THREE.Vector3(210,10, 315),new THREE.Vector3(105,10, 315)
                        ,new THREE.Vector3(0,10, 315),new THREE.Vector3(-105,10, 315),new THREE.Vector3(-210,10, 315)
                        ,new THREE.Vector3(-315,10, 315),new THREE.Vector3(-420,10, 315),new THREE.Vector3(-420,10, 210)
                        ,new THREE.Vector3(-420,10, 105),new THREE.Vector3(-420,10, 0),new THREE.Vector3(-420,10, -105)
                        ,new THREE.Vector3(-420,10, -210),new THREE.Vector3(-420,10, -315),new THREE.Vector3(-420,10, -420)
                        ,new THREE.Vector3(-315,10, -420),new THREE.Vector3(-210,10, -420),new THREE.Vector3(-105,10, -420)
                        ,new THREE.Vector3(0,10, -420),new THREE.Vector3(105,10, -420),new THREE.Vector3(210,10, -420)
                        ,new THREE.Vector3(315,10, -420),new THREE.Vector3(420,10, -420),new THREE.Vector3(420,10, -315)
                        ,new THREE.Vector3(420,10, -210),new THREE.Vector3(420,10, -105),new THREE.Vector3(420,10, 0)
                        ,new THREE.Vector3(420,10, 105),new THREE.Vector3(420,10, 210),new THREE.Vector3(420,10, 315)];

    for(var i = 0; i < blockPosition.length; i++){
        var geo = new THREE.PlaneBufferGeometry(100, 100, 8, 8);
        var mat = new THREE.MeshBasicMaterial({ color: '#EEEEEE', side: THREE.DoubleSide });
        var plane = new THREE.Mesh(geo, mat);
        plane.position.set(blockPosition[i].x, blockPosition[i].y, blockPosition[i].z);
        
        plane.rotation.x = - Math.PI / 2;
        
        if(i == 0){
            plane.visible = false;
        }
        //mesh.receiveShadow = true;

        chessTable.add(plane);
    }

    chessTable.scale.set(0.25,0.25,0.25);
    scene.add(chessTable);

    this.getNextStep = function(){
        
    }

    this.getStep = function(index){
        return chessTable.children[index];
    }

    this.getLength = function(){
        return blockPosition.length;
    }

    this.addChild = function(object){
        chessTable.add(object);
    }
    //return chessTable;
};

export { ChessTable };