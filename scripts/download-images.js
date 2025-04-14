const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  pets: {
    'golden-retriever.jpg': 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    'persian-cat.jpg': 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    'french-bulldog.jpg': 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9',
    'maine-coon.jpg': 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee',
  },
  products: {
    'dog-food.jpg': 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119',
    'cat-toy.jpg': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
    'grooming-kit.jpg': 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7',
    'pet-bed.jpg': 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
  },
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
}

async function downloadAllImages() {
  for (const [category, categoryImages] of Object.entries(images)) {
    const dir = path.join(__dirname, '..', 'public', category);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    for (const [filename, url] of Object.entries(categoryImages)) {
      const filepath = path.join(dir, filename);
      console.log(`Downloading ${filename}...`);
      try {
        await downloadImage(url, filepath);
        console.log(`Downloaded ${filename}`);
      } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
      }
    }
  }
}

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch((error) => {
  console.error('Error downloading images:', error);
}); 