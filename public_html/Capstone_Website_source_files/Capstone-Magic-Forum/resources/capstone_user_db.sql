-- creating form insert form database tables 
CREATE DATABASE capstone_db  NOT NULL; 
USE capstone_db; 
CREATE TABLE Capstone_user_register_info(
   user_ID            BIGINT(25) NOT NULL AUTO_INCREMENT,
   user_first_name 	  VARCHAR(20) NOT NULL, 
   user_last_name     VARCHAR(20) NOT NULL,  
   user_birthday       VARCHAR(10)   NOT NULL,
   user_new_email 	  VARCHAR(35) NOT NULL,
   user_confirm_email VARCHAR(35) NOT NULL,
   user_new_pass      VARCHAR(16) NOT NULL, 
   user_confirm_pass  VARCHAR(16) NOT NULL, 
   user_username       VARCHAR(12) NOT NULL UNIQUE, 
   user_city  VARCHAR(35) NOT NULL, 
   user_zip   VARCHAR(5)  NOT NULL, 
   user_phone VARCHAR(12) NOT NULL, 
   user_country   VARCHAR(35) NOT NULL, 
   user_state VARCHAR(35)  NULL, 
   user_gender         VARCHAR(8) NOT NULL,
   user_terms         VARCHAR(10) NOT NULL,
   user_complete      VARCHAR(3)    NULL, 
   user_comments        VARCHAR(2500) NULL, 
    PRIMARY KEY(user_ID)

); 

CREATE TABLE Capstone_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_post          VARCHAR(2500) NOT NULL, 
user_time_posted   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)
); 


CREATE TABLE Capstone_modern_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_modern_post          VARCHAR(2500) NOT NULL, 
user_time_modern   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)


); 

CREATE TABLE Capstone_standard_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_standard_post          VARCHAR(2500) NOT NULL, 
user_time_standard   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)

); 

CREATE TABLE Capstone_legacy_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_legacy_post          VARCHAR(2500) NOT NULL, 
user_time_legacy   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)


); 

CREATE TABLE Capstone_commander_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_commander_post          VARCHAR(2500) NOT NULL, 
user_time_commander  TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)

); 

CREATE TABLE Capstone_fnm_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_fnm_post          VARCHAR(2500) NOT NULL, 
user_time_fnm   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)
); 

CREATE TABLE Capstone_pptq_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_pptq_post          VARCHAR(2500) NOT NULL, 
user_time_pptq   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)


); 

CREATE TABLE Capstone_rptq_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_rptq_post          VARCHAR(2500) NOT NULL, 
user_time_rptq  TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)

); 

CREATE TABLE Capstone_mtgo_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_MTGO_post          VARCHAR(2500) NOT NULL, 
user_time_MTGO   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)


); 

CREATE TABLE Capstone_pt_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_pt_post          VARCHAR(2500) NOT NULL, 
user_time_pt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)

); 

CREATE TABLE Capstone_format_home_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_format_post          VARCHAR(2500) NOT NULL, 
user_time_format  TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)
); 

CREATE TABLE Capstone_tournament_posts(
user_post_ID       BIGINT(25) NOT NULL AUTO_INCREMENT, 
user_tourny_post          VARCHAR(2500) NOT NULL, 
user_time_tourny  TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY(user_post_ID)
); 

/*Failed implementation*/
/*CREATE TABLE Capstone_users(
	user_username VARCHAR(12) NOT NULL UNIQUE, 
	PRIMARY KEY(user_username)
); */

/*CREATE TABLE Capstone_user_demographic_info(
   user_username       VARCHAR(12) NOT NULL UNIQUE, 
   user_birthday       VARCHAR(10)   NOT NULL,
   user_gender         VARCHAR(8) NOT NULL, 
    PRIMARY KEY (user_username),
 	FOREIGN KEY(user_username) REFERENCES Capstone_users(user_username)
  );
CREATE TABLE Capstone_location_info(
	user_ID    BIGINT(25) NOT NULL AUTO_INCREMENT,
	user_city  VARCHAR(35) NOT NULL, 
	user_zip   VARCHAR(5)  NOT NULL, 
	user_phone VARCHAR(12) NOT NULL, 
user_country   VARCHAR(35) NOT NULL, 
	user_state VARCHAR(35)  NULL, 
PRIMARY KEY (user_ID),
FOREIGN KEY(user_ID)REFERENCES Capstone_user_register_info(user_ID)
); */
