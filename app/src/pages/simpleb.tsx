
import React from "react";
import Head from 'next/head';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

import { sketch } from "@/components/simSketch";


export default function SimpleBPage() 
{
	return (
		<>
			<Head>
				<title>Simple B</title>
			</Head>
			<section>
				<p>Simple p5 Page</p>
			</section>

			<center>
				<NextReactP5Wrapper sketch={sketch} />;
			</center>
		</>
	);
}