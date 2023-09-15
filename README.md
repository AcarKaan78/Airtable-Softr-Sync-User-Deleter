Airtable-to-Softr User Deletion
--------------------------------
A utility script that scans through records in an Airtable base and deletes specific user records in both Airtable and Softr based on user status.

Description
------------
This script accesses an Airtable base, specifically the softr_employees table. It then examines each record for a user's email and status. If a user's status is marked as "inactive," the script performs the following actions:

-> Sends a DELETE request to the Softr API to remove the user based on their email address.
-> Removes the corresponding user record from the Airtable base.

Setup
-----
Configuration: Ensure that you have set up your Airtable base and have the correct table and field names (softr_employees, user_email, and status).

API Keys & Domain: Replace placeholders in the script with your actual Softr API key and domain:

'Softr-Api-Key': 'YOUR_SOFTR_API_KEY',
'Softr-Domain': 'YOUR_SOFTR_DOMAIN'

Dependencies: Ensure you have the required packages or libraries. For instance, if you're using this in Airtable's scripting app, no additional setup is needed. If elsewhere, ensure you have necessary packages for network requests.

Usage
-----
Run the script in the environment of your choice. It will automatically loop through the records, check the status, and perform deletions where necessary.

Caution
-------
This script directly deletes records from both Airtable and Softr. Ensure you have backups of your data and have tested the script in a safe environment before running it on actual data.

Future Enhancements
-------------------
->Implement logging to keep track of deleted records.
->Add error handling for API requests.
->Extend the script to handle other user statuses or criteria.
