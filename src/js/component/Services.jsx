import React from "react";

export const Services = () => {
	return (
		<span require-file="./templates/services.html">
			<div ClassName="row">
				<div ClassName="col-4">
					<img
						ClassName="rounded-circle"
						height="300px"
						src="https://raw.githubusercontent.com/mortegac/collaborative-grupo16/3eda334183549aa3ccd1d0284dde599d21d49cd3/website1/assets/img/2.jpg"></img>
				</div>
				<div ClassName="col-8 mx-auto">
					<h5>
						The second heading{" "}
						<span ClassName="text-secondary">
							Is Pretty Cool Too.
						</span>
					</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque tempus vitae magna efficitur consectetur. Nulla
						non purus fringilla, pulvinar diam vel, finibus augue.
						Suspendisse ac orci ac odio scelerisque tincidunt.
						Aliquam fermentum vitae mi et semper. Suspendisse lectus
						tellus, tempor condimentum nulla a, convallis faucibus
						sapien. Phasellus non metus ut turpis dignissim maximus
						quis quis enim. Etiam fermentum lacus a nisl lacinia, et
						egestas nunc suscipit. Pellentesque non euismod dolor,
						non posuere sapien.
					</p>
				</div>
			</div>
		</span>
	);
};
