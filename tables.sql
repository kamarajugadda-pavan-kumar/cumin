CREATE TABLE User (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  teamId VARCHAR(36),
  CONSTRAINT fk_team FOREIGN KEY (teamId) REFERENCES Team(id)
);


CREATE TABLE Project(
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(255) UNIQUE NOT NULL,
    
)

CREATE TABLE Issue (
  id INT PRIMARY KEY AUTO_INCREMENT,
  projectId VARCHAR(36) NOT NULL,
  issueType ENUM('EPIC', 'USER_STORY', 'BUG', 'TASK', 'SUBTASK') NOT NULL,
  status ENUM('TO_DO', 'IN_PROGRESS', 'COMPLETED') NOT NULL,
  summary VARCHAR(255) NOT NULL,
  description TEXT,
  assigneeId VARCHAR(36),
  parentId INT DEFAULT NULL,
  sprintId VARCHAR(36),
  storyPointEstimate INT,
  reporterId VARCHAR(36),
  startDate DATETIME,
  endDate DATETIME,
  CONSTRAINT fk_assignee FOREIGN KEY (assigneeId) REFERENCES User(id),
  CONSTRAINT fk_reporter FOREIGN KEY (reporterId) REFERENCES User(id),
  CONSTRAINT fk_parent FOREIGN KEY (parentId) REFERENCES Issue(id),
  CONSTRAINT fk_sprint FOREIGN KEY (sprintId) REFERENCES Sprint(id)
);

CREATE TABLE Label (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) UNIQUE NOT NULL,
);

CREATE TABLE Label_Issue (
  issueId VARCHAR(36) NOT NULL,
  labelId VARCHAR(36) NOT NULL,
  PRIMARY KEY (issueId, labelId),
  CONSTRAINT fk_issue FOREIGN KEY (issueId) REFERENCES Issue(id),
  CONSTRAINT fk_label FOREIGN KEY (labelId) REFERENCES Label(id),
)

CREATE TABLE Attachment (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  issueId VARCHAR(36) NOT NULL,
  CONSTRAINT fk_issue FOREIGN KEY (issueId) REFERENCES Issue(id),
)


-- triggers to enforce constraints on Issue table if the Issue type is 'EPIC'
DELIMITER $$

CREATE TRIGGER before_issue_insert
BEFORE INSERT ON Issue
FOR EACH ROW
BEGIN
  IF NEW.issueType = 'EPIC' THEN
    IF NEW.parentId IS NOT NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues cannot have a parentId';
    END IF;
    IF NEW.sprintId IS NOT NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues cannot have a sprintId';
    END IF;
    IF NEW.storyPointEstimate IS NOT NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues cannot have a storyPointEstimate';
    END IF;
    IF NEW.startDate IS NULL OR NEW.endDate IS NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues must have a startDate and endDate';
    END IF;
  END IF;
END$$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER before_issue_update
BEFORE UPDATE ON Issue
FOR EACH ROW
BEGIN
  IF NEW.issueType = 'EPIC' THEN
    IF NEW.parentId IS NOT NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues cannot have a parentId';
    END IF;
    IF NEW.sprintId IS NOT NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues cannot have a sprintId';
    END IF;
    IF NEW.storyPointEstimate IS NOT NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues cannot have a storyPointEstimate';
    END IF;
    IF NEW.startDate IS NULL OR NEW.endDate IS NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'EPIC issues must have a startDate and endDate';
    END IF;
  END IF;
END$$

DELIMITER ;
