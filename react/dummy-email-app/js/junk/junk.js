return (
	<Email
		id={each.id}
		from={each.from}
		to={each.to}
		subject={each.title}
		message={each.content}
	/>
);

<div>
	<ul>
		<li>
			From: {each.from}
		</li>
		<li>
			To: {each.to}
		</li>
		<li>
			Subject: {each.title}
		</li>
		<li>
			Message: {each.content}
		</li>
	</ul>
</div>
