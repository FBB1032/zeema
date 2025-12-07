-- Create website settings table
CREATE TABLE IF NOT EXISTS website_settings (
  id SERIAL PRIMARY KEY,
  setting_key VARCHAR(255) UNIQUE NOT NULL,
  setting_value TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default settings
INSERT INTO website_settings (setting_key, setting_value, description) VALUES
('whatsapp_number', '1234567890', 'WhatsApp number for customer inquiries'),
('store_name', 'Zeema Store', 'Store name displayed across the site'),
('store_tagline', 'Luxury beauty and fashion for the modern woman', 'Store tagline'),
('about_intro', 'Zeema Store is a luxury fashion and beauty destination dedicated to celebrating the elegance, confidence, and beauty of women and children. We curate the finest collection of premium fashion, traditional wear, accessories, and fragrances.', 'About page introduction'),
('about_story', 'Zeema Store was born from a passion for providing access to luxury fashion and beauty products that celebrate African elegance and global style. We believe that every customer deserves premium quality, authentic products, and exceptional service.', 'About page story section'),
('about_mission', 'Our mission is to make luxury affordable and accessible, offering a carefully curated selection of clothing, traditional wear, accessories, and fragrance for the modern African woman, man, and child.', 'About page mission statement'),
('instagram_link', 'https://instagram.com', 'Instagram profile link'),
('facebook_link', 'https://facebook.com', 'Facebook profile link'),
('twitter_link', 'https://twitter.com', 'Twitter profile link'),
('copyright_text', 'Crafted with luxury in mind for the modern woman', 'Copyright footer text')
ON CONFLICT (setting_key) DO NOTHING;
