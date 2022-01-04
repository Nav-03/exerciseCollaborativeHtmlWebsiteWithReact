import React from "react";

export const Portfolio = () => {
	return (
		<span require-file="./templates/portfolio.html">
			<div className="row">
				<div className="col-12">
					<h4>Porfolio</h4>

					<p>
						{" "}
						Donec ullamcorper nulla non metus autor fringilla.
						Vestibulum id ligua porta felis euismud semperi.
						Proesent commondo cursus magna vel suelerisque nisl
						consectetur. Fusce dapibus, tellus accursus commondo.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<div className="card" style={{ width: "24rem" }}>
						<img
							src="https://github.com/mortegac/collaborative-grupo16/blob/e894ed07187c68beb8b6cc45daf00b2c8b7cd4ec/website1/assets/img/big-project-image.png?raw=true"
							className="card-img-top"
							alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Project Name</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nam viverra euismod odio,
								gravida pellentesque urna varius vitae.
							</p>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card" style={{ width: "24rem" }}>
						<img
							src="https://github.com/mortegac/collaborative-grupo16/blob/e894ed07187c68beb8b6cc45daf00b2c8b7cd4ec/website1/assets/img/big-project-image.png?raw=true"
							className="card-img-top"
							alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Project Name</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nam viverra euismod odio,
								gravida pellentesque urna varius vitae.
							</p>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card" style={{ width: "24rem" }}>
						<img
							src="https://github.com/mortegac/collaborative-grupo16/blob/e894ed07187c68beb8b6cc45daf00b2c8b7cd4ec/website1/assets/img/big-project-image.png?raw=true"
							className="card-img-top"
							alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Project Name</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nam viverra euismod odio,
								gravida pellentesque urna varius vitae.
							</p>
						</div>
					</div>
				</div>
			</div>
		</span>
	);
};
