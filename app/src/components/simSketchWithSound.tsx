// import * as p5 from "p5";
import { Sketch } from "@p5-wrapper/react";
import p5Types from "p5";

import * as p5 from "p5";
(window as any).p5 = p5;
import "p5/lib/addons/p5.sound"


export const sketch: Sketch = p5 => {
  	let song: p5Types.SoundFile;

	p5.preload = () => {

		// (window as any).p5 = p5
		// require("p5/lib/addons/p5.sound");

		const songPath = "/audio/cheer.mp3";
		song = p5.loadSound(songPath);
	}

  	p5.setup = () => {
    	p5.createCanvas(600, 400, p5.WEBGL);
    	p5.background(255, 0, 0);
	}

  	p5.draw = () => {
    	p5.background(250);
    	p5.normalMaterial();
    	p5.push();
    	p5.rotateZ(p5.frameCount * 0.01);
    	p5.rotateX(p5.frameCount * 0.01);
    	p5.rotateY(p5.frameCount * 0.01);
    	p5.plane(100);
    	p5.pop();
  	};

    p5.mousePressed = () => {
		if(p5.key === 's')
		{
			if (!song.isPlaying()) 
			{
				song.play();
			}
			else
			{
				song.pause();
			}
		}
  	}
}
