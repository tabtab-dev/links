import { getCollection } from 'astro:content';

export async function GET() {
  try {
    const links = await getCollection('links');
    
    const apiData = links.map(link => ({
      title: link.data.title,
      url: link.data.url,
      description: link.data.description || '',
      category: link.data.category,
      icon: link.data.icon || '',
      tags: link.data.tags || []
    }));

    return new Response(JSON.stringify(apiData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch links' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}