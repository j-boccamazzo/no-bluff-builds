import Airtable from 'airtable';

const base = new Airtable({
  apiKey: import.meta.env.AIRTABLE_TOKEN
}).base(import.meta.env.AIRTABLE_BASE_ID);

export async function getTestimonials() {
  const records = await base('Testimonials')
    .select({
      filterByFormula: '{Active} = 1',
      fields: ['Name', 'Business', 'Quote']
    })
    .all();

  return records.map(record => ({
    name: record.get('Name'),
    business: record.get('Business'),
    quote: record.get('Quote')
  }));
}