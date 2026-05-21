# Database Design 

## users 

Fields:
-id
-username
-email
-password_hash
-created_at


## CVs

Fields:
-id
-user_id
-file_name
-file_path
-extracted_text
-uploaded_at


## Analysis

Fields:
-id
-user_id
-cv_id
-target_role
-extracted_skills
-missing_skills
-match_score
-created_at


## Roadmaps

Fields:
-id
-user_id
-analysis_id
-target_role
-title
-created _at

## Roadmap Items

Fields:
-id
-roadmap_id
-title
-description
-priority
-status
-order_index
