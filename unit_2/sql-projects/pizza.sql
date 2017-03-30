-- CREATE TABLE IF NOT EXISTS pizzas (
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT NOT NULL
-- );
--
-- CREATE TABLE IF NOT EXISTS batches (
-- 	id SERIAL PRIMARY KEY,
-- 	pizza_id INTEGER REFERENCES pizzas,
-- 	quantity INTEGER NOT NULL
-- );
--
-- INSERT INTO pizzas (name)
-- VALUES ('hawaiian');

-- INSERT INTO pizzas (name)
-- VALUES ('chicken alfredo');

-- INSERT INTO pizzas (name)
-- VALUES ('margherita');
--
-- INSERT INTO batches (pizza_id, quantity)
-- VALUES (1, 2);
--
-- INSERT INTO batches (pizza_id, quantity)
-- VALUES (1, 2);
--
-- INSERT INTO batches (pizza_id, quantity)
-- VALUES (2, 1);
--
-- INSERT INTO batches (pizza_id, quantity)
-- VALUES (3, 1);
--
-- UPDATE batches SET quantity=5 WHERE id=1;
--
-- CREATE TABLE IF NOT EXISTS toppings (
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT NOT NULL
-- );
--
-- CREATE TABLE IF NOT EXISTS pizzas_toppings (
-- 	pizza_id INTEGER REFERENCES pizzas,
-- 	topping_id INTEGER REFERENCES toppings,
-- 	PRIMARY KEY (pizza_id, topping_id)
-- );
--
-- INSERT INTO toppings (name)
-- VALUES ('cheese');

-- INSERT INTO toppings (name)
-- VALUES ('red sauce');

-- INSERT INTO toppings (name)
-- VALUES ('chicken');

-- INSERT INTO toppings (name)
-- VALUES ('white sauce');

-- INSERT INTO toppings (name)
-- VALUES ('ham');

-- INSERT INTO toppings (name)
-- VALUES ('pineapple');
-- --
-- INSERT INTO pizzas_toppings (pizza_id, topping_id)
-- VALUES ('2', '3');

-- INSERT INTO pizzas_toppings (pizza_id, topping_id)
-- VALUES ('3', '3');

-- INSERT INTO pizzas_toppings (pizza_id, topping_id)
-- VALUES ('3', '4');

-- INSERT INTO pizzas_toppings (pizza_id, topping_id)
-- VALUES ('3', '5');

-- INSERT INTO pizzas_toppings (pizza_id, topping_id)
-- VALUES ('3', '6');

-- INSERT INTO pizzas_toppings (pizza_id, topping_id)
-- VALUES ('1', '5');

-- INSERT INTO pizzas_toppings (pizza_id, topping_id)
-- VALUES ('1', '6');

SELECT pizzas.name, toppings.name 
FROM pizzas 
JOIN pizzas_toppings 
ON pizzas_toppings.pizza_id = pizzas.id
JOIN toppings 
ON pizzas_toppings.topping_id = toppings.id;

-- WHERE pizzas.name='hawaiian';





































--
