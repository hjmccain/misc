import React from 'react';

import List from './list.js';

export default function ListContainer () {
	return (
		<div>
			<h3>{this.state.boardTitle}</h3>
			<h4>{this.state.listTitle}</h4>
			<ul>
				<List
					cards={this.state.boardContent[0].listContent[0].cards}
					onDeleteContent={this.onDeleteContent}
					onTaskComplete={this.onTaskComplete}
				/>
			</ul>
			<form onSubmit={this.onCardSubmit}>
				<input onChange={this.onCardChange} type="text" />
				<input type="submit" />
			</form>
		</div>
	);
}
