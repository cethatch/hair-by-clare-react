import React, { useState, useEffect } from "react";

const GALLERY_ALBUM_NAME = "hbc-portfolio-gallery";
const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? '/api'
    : 'https://effervescent-stroopwafel-efe523.netlify.app/.netlify/functions';

async function fetchImages(folderName) {
    try {
        const response = await fetch(`${API_BASE_URL}/get-photos?folderName=${folderName}`);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const images = await response.json();
      return images;
    } catch (error) {
      console.error('Error fetching portfolio images:', error);
      return [];
    }
}  

function PortfolioGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      fetchImages(GALLERY_ALBUM_NAME).then(setImages);
    }, []);

    return (
      <div className="portfolio-gallery" id="portfolio-gallery">
        {images.map(image => (
          <div className="gallery-img-container"><img key={image.public_id} src={image.url} alt={image.public_id} /></div>
        ))}
      </div>
    );
}

export default PortfolioGallery;