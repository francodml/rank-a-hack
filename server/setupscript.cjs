const { exec } = require('child_process');
const fs = require('fs');
const { exit } = require('process');
const path = require('path');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var dbsetupRequired = true;
console.log('PSh Dev Challenge - Hackathon Ranking');
console.log('Initial setup script')

try {
    if (fs.existsSync('.env')) {
        dbsetupRequired = false;
        console.log('.env exists, skipping database setup');
    }
}
catch (e) {
    console.log(e);
}

if (!dbsetupRequired){
    exit();
}

DatabaseSetup();

function DatabaseSetup()
{
    rl.question('Database Connection Type\n(1)Individual Parameters (2)Connection String: ', (choice) => {
        if (choice == 1) {
            rl.question('Database User: ', (user) => {
                rl.question('Database Password: ', (pass) => {
                    rl.question('Database Name: ', (name) => {
                        rl.question('Database URL: ', (url) => {
                            fs.writeFileSync('.env', `DB_USER=${user}\nDB_PASS=${pass}\nDB_NAME=${name}\nDB_URL=${url}`);
                            postDBSetup();
                        });
                    });
                });
            });
        }
        else if (choice == 2) {
            rl.question('Database Connection String: ', (connectionString) => {
                fs.writeFileSync('.env', `DB_CONNECTION=${connectionString}`);
                postDBSetup();
            });
        }
        else {
            console.log('Invalid choice');
            rl.close();
            DatabaseSetup();
        }
    });
}

function postDBSetup() {

    try {
        if (!fs.existsSync(path.join(__dirname,'../client/build'))){
            console.log('Client build not found, building now');
            exec('npm run build', (error, stdout, stderr) => {
                if (error) {
                    console.error(`build error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            });
        }
    } catch (error) {
        console.log(error);
    }
    

    console.log("Unfortuantely, the cron job setup isn't working yet. Please manually add the following to your crontab:\n");
    console.log(`*/5 * * * * node ${__dirname}/rank-a-hack-datagen/main.js`);
    console.log('\nThis runs the data generator every five minutes, and inserts a new hackathon with 10 users and 1 project per user.');
    console.log('In the future, this setup will be automated.')
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
    datagenSetup();
}

function datagenSetup() {
    console.log('Setting up data generator');
    try {
        if (!fs.existsSync(path.join(__dirname,'rank-a-hack-datagen', 'node_modules'))){
            console.log('Data generator not found, updating submodules');
            exec('git submdoule update --init --recursive', (error, stdout, stderr) => {
                console.log('Installing datagen deps');
                exec('npm install', {cwd: path.join(__dirname,'rank-a-hack-datagen')});
            });
        }
    }
    catch (e) {
        console.log(e);
    }
}