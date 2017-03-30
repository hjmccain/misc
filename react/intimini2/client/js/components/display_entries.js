import React from 'react';

class DisplayEntries extends React.Component {
	constructor(props) {
		console.log(props);
		super(props);
	}

	render () {
		const moodObj = [0, 0, 0, 0, 0, 0, 0];
		const authUser = this.props.user.id;
		let mood, date, content, classNames;
		const entriesArray = this.props.entries.filter((entry) => {
			return (entry.user_id === authUser);
		});
		const eachEntry = this.props.entries.map((entry, idx) => {
			const elength = entry.length;
			if (entry.mood === 'happy') {
				moodObj[0] += 1;
			} else if (entry.mood === 'excited') {
				moodObj[1] += 1;
			} else if (entry.mood === 'sad') {
				moodObj[2] += 1;
			} else if (entry.mood === 'depressed') {
				moodObj[3] += 1;
			} else if (entry.mood === 'bored') {
				moodObj[4] += 1;
			} else if (entry.mood === 'awkward') {
				moodObj[5] += 1;
			} else if (entry.mood === 'ambivalent') {
				moodObj[6] += 1;
			}
			console.log(elength, moodObj)
			const moodCount = `Out of ${elength} entries
								happy: ${moodObj[0]}
								excited: ${moodObj[1]}
								sad: ${moodObj[2]}
								depressed: ${moodObj[3]}
								bored: ${moodObj[4]}
								awkward: ${moodObj[5]}
								ambivalent: ${moodObj[6]}
								`;
			console.log(moodCount);
			mood = <p>{entry.mood}</p>
			date = <p>{entry.date}</p>
			content = <p>{entry.entry}</p>
			classNames = `${entry.mood} journal-entry`
			return (
				<div
					className={classNames}
					onClick={this.props.selectEntry.bind(
						null,
						entry.id,
						entry.mood,
						true,
						entry.entry
					)}
					key={idx}
					id={entry.id}
					>
						<li>{content}</li>
						<li>Entry Created: {date}</li>
				</div>
			);
		});
			return (
				<div>
				 {eachEntry}
				</div>
			)
	}
}

export default DisplayEntries;
