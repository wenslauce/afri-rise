# Afri-Rise Image Download Script

This directory contains scripts for managing website assets.

## Pexels Image Download Script

### Overview
The `download-pexels-images.js` script automatically downloads relevant images from Pexels API for the Afri-Rise website. It targets keywords related to African business, fund management, and the company's industry focus areas.

### Prerequisites
- Node.js installed
- Internet connection
- Pexels API key (already configured in the script)

### Usage

Run the script from the project root:

```bash
node scripts/download-pexels-images.js
```

### What It Does

1. **Creates Output Directory**: Creates `public/images/afri-rise/` if it doesn't exist
2. **Downloads Images**: Fetches 3 images per search query from Pexels
3. **Saves Metadata**: Creates `image-metadata.json` with image details and attribution
4. **Generates Report**: Provides usage recommendations for different website sections

### Search Queries

The script searches for images related to:
- African business meeting
- Fund management
- Investment advisory
- Project management in Africa
- Strategic planning
- African finance
- African energy sector
- African agriculture
- African infrastructure
- African technology
- Nairobi business
- Dubai business center

### Output

Images are saved to: `public/images/afri-rise/`

Each image is named using the pattern: `{query-name}-{number}.jpg`

Example filenames:
- `african-business-meeting-1.jpg`
- `fund-management-2.jpg`
- `investment-advisory-3.jpg`

### Metadata File

The script generates `image-metadata.json` containing:
- Filename
- Search query used
- Photographer name and URL
- Pexels photo URL
- Suggested alt text
- Image dimensions

### Attribution

All images from Pexels require attribution. The photographer credits are included in the metadata file. When using these images on the website, ensure proper attribution is provided.

### Usage Recommendations

The script provides recommendations for using images in different sections:
- **Hero Section**: African business and Nairobi-related images
- **Services Section**: Fund management, investment, project management images
- **Industries Section**: Finance, energy, agriculture, infrastructure, technology images
- **About Section**: Business meeting and Dubai office images

### Troubleshooting

If the script fails:
1. Check your internet connection
2. Verify the Pexels API key is valid
3. Ensure you have write permissions to the `public` directory
4. Check if you've exceeded Pexels API rate limits (200 requests/hour for free tier)

### Notes

- The script includes a 500ms delay between downloads to respect API rate limits
- Images are downloaded in "large" size for quality
- Landscape orientation is preferred for website layouts
