# w18brown

Setting up MySql with a non-root user:

  The following instructions log in as root, create the specific account to be used in the code, confirm visually, and exit.

  mysql --user=root mysql   // logs in as root to allow for the creation of accounts.
  create user 'browncar'@'localhost' identified by 'brown'   // identified by is the password
  grant all privileges on *.* to 'browncar'@'localhost' with grant option;  // give permission to use all databases

  // optional
  select user from mysql.user;  // your new user should be listed.

  \q // quit

