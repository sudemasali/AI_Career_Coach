# MVP Feature Breakdown

## User Goal
-Receive a personalized roadmap for their target role 
-Save their roadmap and access it later
-Track learning progress over time

## User Actions
-Enter email address
-Enter password
-Click the sign up button
-Upload CV
-Select target role 
-Wait for AI analysis
-Receive a personalized roadmap
-Label completed skills

## System Actions
-Validate user credentials
-Create user account
-Store user information in database
-Upload and store CV
-Store selected target role
-Extract text from CV
-Analyse extracted skills
-Compare skills with target role
-Identify missing competencies  
-Generate personalized roadmap 
-Save roadmap and progress data
## Inputs
-User email
-Username
-Password
-User CV
-Target role

## Outputs
-Extracted current skills 
-Identified skill gaps
-Personalized roadmap

## Edge Cases
-User uploads an empty CV
-User uploads an unsupported file type
-CV text extraction fails
-User doesn't select a target role
-AI analysis process fails
-Uploaded file exceeds size limit

## Success Criteria
-User can successfully upload a CV
-The system correctly extracts skills from the CV
-The system identifies missing competencies based on the selected target role
-The user receives a personalized roadmap
-User roadmap data is saved for future access