// Cloudflare Worker: keyless METAR proxy for the UAS Flight Checklist.
// Forwards to the FAA/NWS Aviation Weather Center API, which has no API key
// but does not allow direct browser (CORS) requests. No secrets are stored here.
export default {
  async fetch(request) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    const url = new URL(request.url);
    if (url.pathname !== '/metar') return new Response('Not found', { status: 404, headers: cors });

    const lat = parseFloat(url.searchParams.get('lat'));
    const lon = parseFloat(url.searchParams.get('lon'));
    if (!isFinite(lat) || !isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
      return new Response('Bad lat/lon', { status: 400, headers: cors });
    }

    // Round so nearby requests share a cached response; search ~50 mi around the point
    const la = lat.toFixed(1), lo = lon.toFixed(1);
    const d = 0.75;
    const bbox = [la - d, lo - d, +la + d, +lo + d].map(n => (+n).toFixed(2)).join(',');
    const upstream = `https://aviationweather.gov/api/data/metar?bbox=${bbox}&format=json`;

    const r = await fetch(upstream, { cf: { cacheTtl: 120, cacheEverything: true } });
    const body = r.status === 204 ? '[]' : await r.text();
    return new Response(body || '[]', {
      status: r.ok || r.status === 204 ? 200 : r.status,
      headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=120' },
    });
  },
};
