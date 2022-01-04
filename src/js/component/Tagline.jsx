import React from "react";

export const Tagline = () => {
	return (
		<span require-file="./templates/tagline.html">
			<div className="jumbotron jumbotron-fluid text-center">
				<h1
					className="display-4"
					style={{ background: "white", fontWeight: "bolder" }}>
					One Page Wonder
				</h1>
				<h3 style={{ background: "white" }}>
					Will Knock your Socks off
				</h3>
			</div>
		</span>
	);
};
