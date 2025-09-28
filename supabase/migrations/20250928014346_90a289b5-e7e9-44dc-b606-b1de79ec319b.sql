-- Create admin user with hashed password
INSERT INTO public.admin_users (email, password_hash, role) 
VALUES (
  'lyonessdobrasil@gmail.com',
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- This is hashed 'Vale30Night80*'
  'admin'
) ON CONFLICT (email) DO UPDATE SET 
  password_hash = EXCLUDED.password_hash,
  updated_at = now();