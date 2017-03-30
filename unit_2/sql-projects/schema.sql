-- CREATE TABLE IF NOT EXISTS recipes (
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT NOT NULL,
-- 	description TEXT NOT NULL
-- );


CREATE TABLE IF NOT EXISTS tags (
	id SERIAL PRIMARY KEY,
	tag TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS recipeSteps (
	id SERIAL PRIMARY KEY,
	step TEXT NOT NULL,
	recipe_id INTEGER REFERENCES recipes
);

create table if not exists recipe_tags (
    recipe_id integer references recipes,
    tag_id integer references tags,
    primary key (recipe_id, tag_id)
);

-- INSERT INTO recipes (name, description)
-- VALUES ('Khichidi Kadhi', 'Rice and lentils with a yoghurt gravy');

-- INSERT INTO recipes (name, description)
-- VALUES ('Pizza', 'Cheese and marinara on dough');

-- INSERT INTO recipes (name, description)
-- VALUES ('Macaroni and Cheese', 'Pasta, cheddar cheese and milk');

-- INSERT INTO tags (tag)
-- VALUES ('Cheesy');
--
-- INSERT INTO tags (tag)
-- VALUES ('Comforting');

-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Top with cheese', 6);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Add other toppings', 6);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Bake at 500 degrees F', 6);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Boil pasta', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Make roux', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Add shredded cheese to roux', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Mix pasta and cheese sauce', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Bake at 350 degrees F', 3);
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (3, 1);
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (3, 2);
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (6, 1);
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (1, 2);










-- UPDATE recipes
-- SET description='Delicious rice and lentils with a yogurt gravy'
-- WHERE name='Khichidi Kadhi';

-- UPDATE recipes
-- SET description='Cheese, marinara, and other ingredients of choice on baked dough'
-- WHERE name='Pizza';

-- UPDATE recipes
-- SET name='Mac & Cheese'
-- WHERE name='Macaroni and Cheese';

-- DELETE FROM recipes
-- WHERE id=4;
--
-- DELETE FROM recipes
-- WHERE id=5;

-- DROP TABLE steps;


--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Top with cheese', 6);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Add other toppings', 6);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Bake at 500 degrees F', 6);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Boil pasta', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Make roux', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Add shredded cheese to roux', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Mix pasta and cheese sauce', 3);
--
-- INSERT INTO recipeSteps (step, recipes_id)
-- VALUES ('Bake at 350 degrees F', 3);

-- DROP TABLE recipeSteps;

-- SELECT recipes.name, recipeSteps.step
-- FROM recipes
-- LEFT OUTER JOIN recipeSteps
-- ON recipeSteps.recipes_id = recipes.id;

-- create table if not exists recipe_tags (
--     recipe_id integer references recipes,
--     tag_id integer references tags,
--     primary key (recipe_id, tag_id)
-- );
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (3, 1);
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (3, 2);
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (6, 1);
--
-- INSERT INTO recipe_tags (recipe_id, tag_id)
-- VALUES (1, 2);













--x
