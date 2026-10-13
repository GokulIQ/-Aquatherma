const https = require('https');
const fs = require('fs');
const path = require('path');

const fixes = {
  'assets/images/services/gas-water-heater.jpg': 'photo-1581092335397-9583fe92d232',
  'assets/images/service-details/gas-detail-1.jpg': 'photo-1581092160607-ee22621dd758',
  'assets/images/service-details/replacement-detail-1.jpg': 'photo-1581092795360-fd1ca04f0952',
  'assets/images/project-details/project-4-b.jpg': 'photo-1581092334651-ddf26d9a09d0',
  'assets/images/project-details/project-7-b.jpg': 'photo-1581092580497-e0d23cbdf1dc',
  'assets/images/blog/blog-4.jpg': 'photo-1581092162384-8987c1d64718',
};

async function fix() {
  for (const [destPath, id] of Object.entries(fixes)) {
    const fullDest = path.join(__dirname, '..', destPath);
    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(fullDest);
          res.pipe(file);
          file.on('finish', () => {
            console.log(`[FIXED] ${destPath}`);
            resolve();
          });
        } else {
          console.log(`Failed ${destPath}`);
          resolve();
        }
      });
    });
  }
}
fix();
