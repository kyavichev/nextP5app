
import React, { useEffect, useState } from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";

// const SketchComponent = dynamic(() => import("../components/sketchComponent"), { ssr: false, });

const SketchComponent = dynamic(() => import('@/components/sketchComponent').then((mod) => mod.SketchComponent), { ssr: false });


export default function SimpleCPage() 
{
	const [isSSR, setIsSSR] = useState(true);
	
	useEffect(() => {
		setIsSSR(false);
	}, []);

	return (
		<>
			<Head>
				<title>Simple C</title>
			</Head>
			<section>
				<p>Simple C p5 Page</p>
			</section>

			{!isSSR && (
				<section>
					<center>
						<SketchComponent  />
					</center>
				</section>
			)}
		</>
	);
}