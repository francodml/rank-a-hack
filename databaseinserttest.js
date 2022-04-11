// Let's try that again

const http = require('http');

const data = JSON.stringify({
    name: '2009 GDC Hackathon',
    description: 'A hackathon that happened during 2009 at GDC',
    location: 'GDC',
    participants: [],
    startDate: new Date(2009, 1, 1),
});

const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/hackathons',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    },
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(data);
req.end();
