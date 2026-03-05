/*

--create database
create database e-commerce;

 -- delete database
drop database e-commerce;

-- create table 
create table products (
  products_id serial primary key,
  products_name varchar(50) not null,
  product_description text not null,
  price numeric(10) not null,
  discount numeric(5),
  stock integer check (stock > 0),
  is_available boolean default true
);

-- multiple constraint 
primary key unique not null

-- multiple 
unique(email,name)

-- single row insert
insert into products(products_name,product_description,price) values('watch', 'this is very high quality', 100);

-- multi row insert
insert into 
  products(products_name,product_description,price) 
  values
  ('apple', 'this is very high quality', 100),
  ('table', 'this is very high quality', 100),
  ('chair', 'this is very high quality', 100),
  ('iph', 'this is very high quality', 100);

*/