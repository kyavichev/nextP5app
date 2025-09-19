// import * as p5 from "p5";
import { Sketch } from "@p5-wrapper/react";
import p5Types from "p5";


export const sketch: Sketch = p5 => {

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
}
