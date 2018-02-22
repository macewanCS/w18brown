# w18brown

Setting up MySql with a non-root user:

  The following instructions for the unix/mac command line log in as root, create the specific account to be used in the code, confirm visually, and exit.

  // logs in as root to allow for the creation of accounts.
  
  mysql --user=root mysql  
  
  // identified by is the password
  
  create user 'browncar'@'localhost' identified by 'brown'   
  
  // give permission to use all databases
  
  grant all privileges on *.* to 'browncar'@'localhost' with grant option;  

  // optional
  
  select user from mysql.user;  // your new user should be listed.

  // quit

  \q 

  Note: You will need to have the password and username in your mysql match that in the newStart.js file (possibly insertTable.js as well). 
