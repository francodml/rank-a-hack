// Let's try that again

const http = require('http');

const data = JSON.stringify({
    name: '2077 NYC UWU Hackathon',
    description: 'Organized by the UWU group, this hackathon is a chance for students to learn and grow as developers. We are looking for developers to join our team and help us build a better future for the UWU community.',
    location: 'Remote',
    participants: [],
    startDate: new Date(2077, 4, 1),
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
