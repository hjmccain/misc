import React from 'react';

export default function StarRater(props) {
	const stars = [];

	for (let i=0; i<5; i++) {
		let className;
		let key;
		if (i < props.rating) {
			className = 'fa fa-star';
		} else {
			className = 'fa fa-star-o';
		}

		const star = (
			<i
				className={className} key={i}
				onClick={props.onChange.bind(null, i + 1)}
			/>
		);
		stars.push(star);
	}

	return (
		<span className="star-rater">
			{console.log('stars returned at star-rater.js')}
			{stars}
		</span>
	);

}

{/*<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star-o" aria-hidden="true"></i>*/}
