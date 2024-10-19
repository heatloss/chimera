---js
{
    pagination: {
        data: "importedcampaigns", // uses return of /_data/importedcampaigns.js as data
        size: 1, // Creates a page for every three campaigns
        alias: "importedcampaign", // Makes accessing data easier
        addAllPagesToCollections: true // Adds pages to Collections based on tags
    },
    tags: ['campaigns'], // The tag for campaigns,
    layout: "layouts/campaign.njk", // Which layout?
    eleventyComputed: {
        label: data => data.importedcampaign.Label, // Campaign label from data
        blurb: data => data.importedcampaign.Blurb, // Campaign blurb from data
        link: data => data.importedcampaign.Link, // Campaign link from data
        image: data => data.importedcampaign.Image[0].url, // Campaign link from data
    }
}
---

