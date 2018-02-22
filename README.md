# w18brown

Setting up MySql with a non-root user:

  The following instructions for the unix/mac command line log in as root, create the specific account to be used in the code, confirm visually, and exit.

  1) Logs in as root to allow for the creation of accounts.
  
  $ mysql --user=root mysql  
  
  2) Identified by is the password
  
  mysql> create user 'browncar'@'localhost' identified by 'brown'   
  
  3) Give permission to use all databases
  
  mysql> grant all privileges on *.* to 'browncar'@'localhost' with grant option;  

  4) Optional. Your new user should be listed.
  
  mysql-> select user from mysql.user;  

  5) Exit mysql.

  mysql> \q 

  Note: You will need to have the password and username in your mysql match that in the newStart.js file (possibly insertTable.js as well). 

Setup the caraway database:

  1) Log in to mysql and create an empty caraway database.
  
  $ mysql -u root -p
  
  mysql> create database caraway;
  
  2) Log out of mysql.
  
  mysql> \q
  
  3) Download the caraway.sql file from shared drive **********************
  
  4) Import the caraway table into my sql from the command line.
  
  $ mysql -u root -p caraway < caraway.sql
  
  You can now run the program with: **********************

  $ node newStart
  
 
