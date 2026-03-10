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

//   Alter
rename data , modify data, drop/create data,etc

-- rename table with alter
alter table empolyees rename to employee;

-- add a column
alter table employee 
add column email varchar(50);

drop/delete a table column
alter table employee 
drop column email;

-- renaming a column name 
alter table employee 
rename column name to user_name;

-- modify constraint 
alter table employee 
alter column user_name type varchar(30);

-- add constraint
alter table employee
alter column email set not null;

-- drop constraint 
alter table employee
alter column email drop not null;

select * from products where price is not null 

-- select * from products where price is not null 

select * from products where price is null
select coalesce(price, 0) from products

limit and offset
elect * from products limit 5 offset 5*0
select * from products limit 5 offset 5*1
select * from products limit 5 offset 5*2

update : 
update products 
set price = 500, products_name = 'watche'
where products_id = 4

update multiple :
update products 
set products_name = 'clock', price = 1200
where products_id in(1,2,3)

  delete from products where price = 900

group by:
select price from products 
group by price

select products_name, avg(price) from products 
group by products_name

number of products
  select products_name, count(*) from products group by products_name

  -- courses more then 4 students
select price, count(*) from products group by price
having count(*) > 5

select price, count(*), avg(price) from products group by price having count(*) >6 and avg(price) > 500

foreign key
create table users(
  id serial primary key,
  user_name varchar(50)
)

create table post(
  id serial primary key,
  title text,
  user_id int references users(id)
)

insert into users(user_name) values('uddin');
insert into post(title, user_id) values('need a break', 2);

join 2 table and get data 
select title, user_name from post join users on post.user_id = users.id

select p.id, title, user_name from post as p join users as u on p.user_id = u.id


*/