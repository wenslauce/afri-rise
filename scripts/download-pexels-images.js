/**
 * Pexels Image Download Script for Afri-Rise Website
 * 
 * This script downloads relevant images from Pexels API for the Afri-Rise website.
 * It targets keywords related to African business, fund management, and industry sectors.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const PEXELS_API_KEY = '9jaGUuh9gt15nKMgNMdA1ReUPj5mJmMkqnnRBaowq9kq7qjUYhPV9yR1';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'afri-rise');
const IMAGES_PER_QUERY = 3;

// Search queries targeting Afri-Rise's brand and services
const SEARCH_QUERIES = [
  'african business meeting',
  'fund management',
  'investment advisory',
  'project management africa',
  'strategic planning business',
  'african finance',
  'african energy sector',
  'african agriculture',
  'african infrastructure',
  'african technology',
  'nairobi business',
  'dubai business center'
];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✓ Created directory: ${OUTPUT_DIR}`);
}

/**
 * Make HTTPS request to Pexels API
 */
function pexelsRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.pexels.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    };

    https.get(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`API request failed with status ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Download image from URL
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

/**
 * Sanitize filename
 */
function sanitizeFilename(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Pexels image download for Afri-Rise...\n');
  
  const downloadedImages = [];
  let totalDownloaded = 0;

  for (const query of SEARCH_QUERIES) {
    console.log(`\n📸 Searching for: "${query}"`);
    
    try {
      // Search for photos
      const endpoint = `/v1/search?query=${encodeURIComponent(query)}&per_page=${IMAGES_PER_QUERY}&orientation=landscape`;
      const data = await pexelsRequest(endpoint);
      
      if (!data.photos || data.photos.length === 0) {
        console.log(`  ⚠️  No images found for "${query}"`);
        continue;
      }

      console.log(`  ✓ Found ${data.photos.length} images`);

      // Download each image
      for (let i = 0; i < Math.min(data.photos.length, IMAGES_PER_QUERY); i++) {
        const photo = data.photos[i];
        const filename = `${sanitizeFilename(query)}-${i + 1}.jpg`;
        const filepath = path.join(OUTPUT_DIR, filename);
        
        // Use large size for quality
        const imageUrl = photo.src.large;
        
        try {
          await downloadImage(imageUrl, filepath);
          console.log(`  ✓ Downloaded: ${filename}`);
          
          downloadedImages.push({
            filename,
            query,
            photographer: photo.photographer,
            photographerUrl: photo.photographer_url,
            pexelsUrl: photo.url,
            alt: photo.alt || query,
            width: photo.width,
            height: photo.height
          });
          
          totalDownloaded++;
          
          // Small delay to respect API rate limits
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err) {
          console.error(`  ✗ Failed to download ${filename}:`, err.message);
        }
      }
    } catch (err) {
      console.error(`  ✗ Error searching for "${query}":`, err.message);
    }
  }

  // Generate summary report
  console.log('\n' + '='.repeat(60));
  console.log('📊 DOWNLOAD SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total images downloaded: ${totalDownloaded}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
  
  // Save metadata file
  const metadataPath = path.join(OUTPUT_DIR, 'image-metadata.json');
  fs.writeFileSync(metadataPath, JSON.stringify(downloadedImages, null, 2));
  console.log(`\n✓ Metadata saved to: ${metadataPath}`);

  // Generate usage guide
  console.log('\n' + '='.repeat(60));
  console.log('💡 USAGE RECOMMENDATIONS');
  console.log('='.repeat(60));
  
  const usageGuide = {
    'Hero Section': downloadedImages.filter(img => 
      img.query.includes('african business') || img.query.includes('nairobi')
    ).slice(0, 2),
    'Services Section': downloadedImages.filter(img => 
      img.query.includes('fund management') || 
      img.query.includes('investment') || 
      img.query.includes('project management') ||
      img.query.includes('strategic planning')
    ).slice(0, 4),
    'Industries Section': downloadedImages.filter(img => 
      img.query.includes('finance') || 
      img.query.includes('energy') || 
      img.query.includes('agriculture') ||
      img.query.includes('infrastructure') ||
      img.query.includes('technology')
    ).slice(0, 7),
    'About Section': downloadedImages.filter(img => 
      img.query.includes('business meeting') || img.query.includes('dubai')
    ).slice(0, 2)
  };

  Object.entries(usageGuide).forEach(([section, images]) => {
    if (images.length > 0) {
      console.log(`\n${section}:`);
      images.forEach(img => {
        console.log(`  - ${img.filename}`);
        console.log(`    Alt text: "${img.alt}"`);
        console.log(`    Photo by: ${img.photographer}`);
      });
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log('✅ Image download complete!');
  console.log('='.repeat(60));
  console.log('\n📝 ATTRIBUTION NOTICE:');
  console.log('All images are from Pexels and require attribution.');
  console.log('Photographer credits are included in image-metadata.json');
  console.log('\n');
}

// Run the script
main().catch(err => {
  console.error('\n❌ Script failed:', err);
  process.exit(1);
});
