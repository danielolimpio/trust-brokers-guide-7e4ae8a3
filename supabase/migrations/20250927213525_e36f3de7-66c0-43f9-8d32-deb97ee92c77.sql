-- Update admin user with specific credentials
UPDATE admin_users 
SET email = 'lyonessdobrasil@gmail.com', 
    password_hash = '$2b$10$rQJ5O0P9kF8W5K0O9K0P9O.kF8W5K0O9K0P9OkF8W5K0O9K0P9Oe'
WHERE email = 'admin@brokertrusted.com';

-- If no admin exists, insert the new one
INSERT INTO admin_users (email, password_hash, role) 
SELECT 'lyonessdobrasil@gmail.com', '$2b$10$rQJ5O0P9kF8W5K0O9K0P9O.kF8W5K0O9K0P9OkF8W5K0O9K0P9Oe', 'admin'
WHERE NOT EXISTS (SELECT 1 FROM admin_users WHERE email = 'lyonessdobrasil@gmail.com');