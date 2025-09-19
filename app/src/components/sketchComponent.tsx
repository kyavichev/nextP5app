
import React from "react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
// import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./simSketch";
import commonStyles from "@/styles/common.module.css";


export function SketchComponent() 
{
	return (
		<div className={commonStyles.playArea}>
			<NextReactP5Wrapper sketch={sketch} />
		</div>
	);
}
