fs = require('fs').promises;

async function readFiles() {
    data1 = await fs.readFile('../demos/1.txt', 'utf8');
    console.log('Data from file1:', data1);
    data2 = await fs.readFile('../demos/2.txt', 'utf8');
    console.log('Data from file2:', data2);
    data3 = await fs.readFile('../demos/3.txt', 'utf8');
    console.log('Data from file3:', data3);
}

readFiles();


    
/** 
    fs.readFile('../demos/2.txt', 'utf8', (err, data2) => {
        if (err) {
            console.error('Error reading file2:', err);
            return;
        }

        fs.readFile('../demos/3.txt', 'utf8', (err, data3) => {
            if (err) {
                console.error('Error reading file3:', err);
                return;
            }

            console.log('Data from all files:\n', data1, '\n', data2, '\n', data3);
        });
    });
});
*/