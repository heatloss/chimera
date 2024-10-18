import Airtable from 'airtable';

export default async function () {
  const apiBaseUrl = process.env.API_BASE_URL;
  const airtableAPIKey = process.env.AIRTABLE_API_KEY;
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtableAPIKey,
  });
  const base = Airtable.base('appqBhJfcXnGiVeSx');

  const campaignRecords = await base('Campaigns').select().all();
  const campaignsJSON = campaignRecords
    .map(function (record) {
      return record['_rawJson'];
    })
    .map((campaign) => {
      return { id: campaign.id, ...campaign.fields };
    })
    .sort((a, b) => a.Order - b.Order);
  // console.log(campaignsJSON);
  return campaignsJSON;
}
