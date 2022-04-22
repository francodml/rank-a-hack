const { exec } = require('child_process');
const fs = require('fs');
const { exit } = require('process');
const path = require('path');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var setupRequired = true;

try {
    if (fs.existsSync('.env')) {
        setupRequired = false;
    }
}
catch (e) {
    console.log(e);
}

if (!setupRequired){
    exit();
}
console.log('PSh Dev Challenge - Hackathon Ranking');
console.log('Initial setup script')
DatabaseSetup();

function DatabaseSetup()
{
    rl.question('Database Connection Type\n(1)Individual Parameters (2)Connection String', (choice) => {
        if (choice == 1) {
            rl.question('Database User: ', (user) => {
                rl.question('Database Password: ', (pass) => {
                    rl.question('Database Name: ', (name) => {
                        rl.question('Database URL: ', (url) => {
                            fs.writeFileSync('.env', `DB_USER=${user}\nDB_PASS=${pass}\nDB_NAME=${name}\nDB_URL=${url}`);
                            cronJobSetup();
                        });
                    });
                });
            });
        }
        else if (choice == 2) {
            rl.question('Database Connection String: ', (connectionString) => {
                fs.writeFileSync('.env', `DB_CONNECTION=${connectionString}`);
                cronJobSetup();
            });
        }
        else {
            console.log('Invalid choice');
            rl.close();
            DatabaseSetup();
        }
    });
}

function cronJobSetup() {
    rl.close();
    console.log("Unfortuantely, the cron job setup isn't working yet. Please manually add the following to your crontab:");
    console.log(`*/5 * * * * node ${__dirname}/rank-a-hack-datagen/main.js`);
    console.log('This runs the data generator every five minutes, and inserts a new hackathon with 10 users and 1 project per user.');
    console.log('In the future, this will be automated by reading your existing crontab, and appending our entry to it.')
    // var existingCron = '';
    // try
    // {   
    //     var e = exec('crontab -l', (error, stdout, stdin) => {
    //         console.log(stdout);
    //         console.log(stdin);
    //         if (error) throw (error);
    //         if ( stdout.includes('no crontab for') ){
    //             existingCron = stdout;
    //         }
    //     });
    //     console.log(e.stdout);
    // }
    // catch (e) {
    //     console.log(e);
    // }
    // var mycron = `*/5 * * * * node ${__dirname}/rank-a-hack-datagen/main.js`
    // mycron = existingCron+mycron;
    // try {    
    //     fs.writeFile(path.join(__dirname,'mycron'), mycron, () =>{
    //         console.log('Wrote crontab to locally');
    //     })
    // }
    // catch(e) {
    //     console.log(e);
    // }
}