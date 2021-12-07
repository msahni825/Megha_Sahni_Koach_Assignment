CREATE PROCEDURE 'UniversityAddorDelete'(
IN _ID INT,
IN _UniversityUUID varchar(20),
IN _Name varchar(100)
IN _Code varchar(20)
IN _CollegesCount varchar(10)
)
BEGIN
	IF _ID = 0 THEN 
		INSERT INTO universitydetails(ID,UniversityUUID, Name, Code, CollegesCount)
		VALUES (_ID, _UniversityUUID, _Name, _Code, _CollegesCount);
		SET _ID = LAST_INSEuniversitydetailscollegedetailscollegedetailsRT_ID();
	ELSE 
		UPDATE universitydetails
		SET 
		ID = _ID,
		UniversityUUID = _UniversityUUID,
		Name = _Name
		Code = _Code
		CollegesCount = _CollegesCount;
	END IF;
	SELECT _ID AS 'ID';
END
