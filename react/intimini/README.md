		1. data filter for date
		2. unique constraint for (username)


		create table if not exists Users (
		    id serial primary key,
		    username text not null,
		    password text not null
		    
		);

			create table if not exists entries (
		    id serial primary key,
		    mood text not null,
		    date integer not null,
		    entry text not null,
		    user_id integer references users  
		);

