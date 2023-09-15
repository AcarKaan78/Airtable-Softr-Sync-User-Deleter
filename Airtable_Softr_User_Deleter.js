let inputConfig = input.config();

// Initialize table and query
let table = base.getTable("softr_employees");
let query = await table.selectRecordsAsync();

// Loop through each record in the Airtable base
for (let record of query.records) {
    // Get the email and status object from the record
    let userEmail = record.getCellValue("user_email");
    let status = record.getCellValue("status");

    // Check if the status object exists and its name is "inactive"
    if (status && status.name === "inactive") {
        let apiUrl = 'https://studio-api.softr.io/v1/api/users/' + userEmail;
        console.log(`Deleting user: ${userEmail}`);

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Softr-Api-Key': 'Softr Api Key',
                'Softr-Domain': 'Your softr domain'
            }
        };

        // Make the DELETE request to Softr
        let response = await fetch(apiUrl, requestOptions);
        let responseText = await response.text();
        console.log(responseText);

        // Delete the record from Airtable as well
        await table.deleteRecordAsync(record);
    }
}

