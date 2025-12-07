-- Add featured flag to products table
ALTER TABLE products ADD COLUMN featured BOOLEAN DEFAULT false;

-- Mark some initial featured products
UPDATE products SET featured = true WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8) LIMIT 8;
