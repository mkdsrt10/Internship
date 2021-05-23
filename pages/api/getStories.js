export default async (req, res) => {
    var Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: process.env.AIRTABLE_KEY
    });

    var base = Airtable.base('appoBJLE6avFq7fly');
    var listStories = [];
    base('Stories').select({
        // Selecting the first 3 records in Main View:
        maxRecords: 4,
        view: "Main View",
        filterByFormula: "{Live}"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
            console.log(record.get("Cover Photo"))
            listStories = [...listStories, {title:record.get("Name"), link:record.get("Link"), image:record.get("Cover Photo")[0].thumbnails.large.url}]
        });
        res.status(200).json(listStories)
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); res.error(400); return; }
    });
    console.log(listStories)

    return res
}
