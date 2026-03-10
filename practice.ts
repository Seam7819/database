/**
 * create table employees (
  employee_id serial primary key,
  employee_name varchar(50),
  department_id int references departments (department_id),
  salary decimal (10,2),
  hire_date date
)

create table departments (
  department_id serial primary key,
  department_name varchar(50)
)
 * 
 */