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
insert into departments(department_name) values('Human Resources'),
('Finance'),
('Accounting'),
('Marketing'),
('Sales'),
('Information Technology'),
('Customer Support'),
('Research and Development'),
('Operations'),
('Administration'),
('Engineering'),
('Product Management'),
('Quality Assurance'),
('Legal'),
('Procurement'),
('Logistics'),
('Training and Development'),
('Public Relations');

insert into employees(employee_name, department_id, salary, hire_date) values
('John Smith', 1, 45000.00, '2022-03-15'),
('Sarah Johnson', 2, 52000.00, '2021-07-10'),
('Michael Brown', 3, 48000.00, '2023-01-05'),
('Emily Davis', 4, 55000.00, '2020-11-20'),
('David Wilson', 5, 47000.00, '2022-06-18'),
('Sophia Taylor', 6, 60000.00, '2019-09-12'),
('Daniel Anderson', 7, 43000.00, '2023-04-01'),
('Olivia Thomas', 8, 51000.00, '2021-02-14'),
('James Martinez', 9, 49000.00, '2022-12-30'),
('Isabella Moore', 10, 53000.00, '2020-05-25'),
('William Clark', 1, 46000.00, '2021-03-12'),
('Ava Rodriguez', 2, 54000.00, '2022-08-09'),
('Ethan Lewis', 3, 47000.00, '2020-10-01'),
('Mia Walker', 4, 56000.00, '2019-12-15'),
('Benjamin Hall', 5, 49000.00, '2023-02-20'),
('Charlotte Allen', 6, 62000.00, '2021-06-30'),
('Lucas Young', 7, 44000.00, '2022-04-11'),
('Amelia Hernandez', 8, 51500.00, '2020-07-07'),
('Henry King', 9, 50000.00, '2023-05-18'),
('Harper Wright', 10, 53500.00, '2021-01-25'),
('Alexander Scott', 1, 47000.00, '2020-09-14'),
('Evelyn Green', 2, 55000.00, '2022-11-03'),
('Daniel Baker', 3, 48000.00, '2019-08-19'),
('Abigail Adams', 4, 57000.00, '2023-03-08'),
('Matthew Nelson', 5, 49500.00, '2021-04-21');

-- Inner join 

select * from employees 
inner join departments using(department_id)

  -- show department name with avg salary
select
  department_name, round(avg(salary))
from
  employees
  inner join departments using (department_id)
group by
  department_name

  -- count emplyee in each dept 
select
  department_name, count(*)
from
  employees
  inner join departments using (department_id) group by department_name

-- find the dept name with heighest avg salary

select department_name, round(avg(salary)) as avg_salary from employees 
inner join departments using(department_id) group by department_name order by avg_salary desc limit 1

-- count empolyees hired each year
select extract(year from hire_date) as hired_date, count(*) from employees group by hired_date

-- sub quiries
create table employee (
  id serial primary key,
  employee_name varchar(50),
  employee_salary decimal(10,2),
  department varchar(30)
);
ALTER TABLE employee
ALTER COLUMN employee_salary TYPE decimal(10,2);

insert into employee (employee_name, employee_salary, department) values
('John Smith', 45000.50, 'HR'),
('Alice Johnson', 52000.75, 'Finance'),
('Michael Brown', 60000.00, 'IT'),
('David Wilson', 47000.20, 'Marketing'),
('Emma Davis', 55000.90, 'Sales'),
('Daniel Taylor', 48000.60, 'IT'),
('Sophia Martinez', 62000.40, 'Finance'),
('James Anderson', 51000.30, 'HR'),
('Olivia Thomas', 53000.80, 'Marketing'),
('William Jackson', 70000.00, 'Management');
-- find the highest salay
select max(employee_salary) from employee 
-- find which employee get the highest

select * from employee where employee_salary= (select max(employee_salary) from employee)

create procedure del_emp_byid(emp_id int)
language plpgsql
as
$$
  begin
  delete from employee where id = emp_id;
  end
$$
call del_emp_byid(10)

 */