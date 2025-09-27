-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin users
CREATE POLICY "Admins can view all admin users" 
ON public.admin_users 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can insert admin users" 
ON public.admin_users 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can update admin users" 
ON public.admin_users 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- Create global SEO settings table
CREATE TABLE public.seo_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  site_title TEXT NOT NULL DEFAULT 'BrokerTrusted - Most Trusted Forex Brokers',
  meta_description TEXT NOT NULL DEFAULT 'Discover the most trusted forex brokers. Professional reviews, rankings and analysis to help you choose the right broker.',
  secondary_description TEXT,
  canonical_url TEXT DEFAULT 'https://brokertrusted.com',
  robots_txt TEXT DEFAULT 'User-agent: *\nAllow: /',
  sitemap_enabled BOOLEAN DEFAULT true,
  ga4_measurement_id TEXT,
  gsc_verification_tag TEXT,
  gtm_container_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.seo_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for SEO settings
CREATE POLICY "Admins can manage SEO settings" 
ON public.seo_settings 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  seo_title TEXT,
  seo_description TEXT,
  canonical_url TEXT,
  noindex BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Create policies for categories
CREATE POLICY "Anyone can view categories" 
ON public.categories 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage categories" 
ON public.categories 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create tags table
CREATE TABLE public.tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  seo_title TEXT,
  seo_description TEXT,
  canonical_url TEXT,
  noindex BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;

-- Create policies for tags
CREATE POLICY "Anyone can view tags" 
ON public.tags 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage tags" 
ON public.tags 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create posts table for blog content
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  post_type TEXT NOT NULL DEFAULT 'post',
  category_id UUID REFERENCES public.categories(id),
  author_id UUID NOT NULL,
  
  -- SEO fields
  focus_keyword TEXT,
  seo_title TEXT,
  seo_description TEXT,
  secondary_keywords TEXT[],
  og_title TEXT,
  og_description TEXT,
  og_image_url TEXT,
  twitter_title TEXT,
  twitter_description TEXT,
  twitter_image_url TEXT,
  schema_enabled BOOLEAN DEFAULT true,
  noindex BOOLEAN DEFAULT false,
  canonical_url TEXT,
  
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create policies for posts
CREATE POLICY "Anyone can view published posts" 
ON public.posts 
FOR SELECT 
USING (status = 'published');

CREATE POLICY "Admins can manage posts" 
ON public.posts 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create post_tags junction table
CREATE TABLE public.post_tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
  UNIQUE(post_id, tag_id)
);

-- Enable RLS
ALTER TABLE public.post_tags ENABLE ROW LEVEL SECURITY;

-- Create policies for post_tags
CREATE POLICY "Anyone can view post tags" 
ON public.post_tags 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage post tags" 
ON public.post_tags 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create redirects table
CREATE TABLE public.redirects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  from_url TEXT NOT NULL UNIQUE,
  to_url TEXT NOT NULL,
  redirect_type INTEGER NOT NULL DEFAULT 301,
  enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;

-- Create policies for redirects
CREATE POLICY "Admins can manage redirects" 
ON public.redirects 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create media library table
CREATE TABLE public.media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  uploaded_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Create policies for media
CREATE POLICY "Anyone can view media" 
ON public.media 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage media" 
ON public.media 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create sitelinks table
CREATE TABLE public.sitelinks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  priority INTEGER NOT NULL DEFAULT 1,
  enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sitelinks ENABLE ROW LEVEL SECURITY;

-- Create policies for sitelinks
CREATE POLICY "Anyone can view enabled sitelinks" 
ON public.sitelinks 
FOR SELECT 
USING (enabled = true);

CREATE POLICY "Admins can manage sitelinks" 
ON public.sitelinks 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_admin_users_updated_at
BEFORE UPDATE ON public.admin_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_seo_settings_updated_at
BEFORE UPDATE ON public.seo_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_categories_updated_at
BEFORE UPDATE ON public.categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tags_updated_at
BEFORE UPDATE ON public.tags
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON public.posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_redirects_updated_at
BEFORE UPDATE ON public.redirects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_sitelinks_updated_at
BEFORE UPDATE ON public.sitelinks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default SEO settings
INSERT INTO public.seo_settings (site_title, meta_description) VALUES 
('BrokerTrusted - Most Trusted Forex Brokers', 'Discover the most trusted forex brokers. Professional reviews, rankings and analysis to help you choose the right broker.');

-- Insert default categories
INSERT INTO public.categories (name, slug, description) VALUES 
('Broker Reviews', 'broker-reviews', 'In-depth reviews of forex brokers'),
('Trading Guides', 'trading-guides', 'Educational content about forex trading'),
('Market Analysis', 'market-analysis', 'Latest market trends and analysis'),
('News', 'news', 'Latest forex and trading news');

-- Insert default tags
INSERT INTO public.tags (name, slug) VALUES 
('forex', 'forex'),
('trading', 'trading'),
('broker', 'broker'),
('review', 'review'),
('regulation', 'regulation'),
('spreads', 'spreads'),
('leverage', 'leverage');

-- Insert default sitelinks
INSERT INTO public.sitelinks (title, url, description, priority) VALUES 
('Best Brokers', '/best-brokers', 'Top rated forex brokers', 1),
('Exness Review', '/broker/exness', 'Complete Exness broker review', 2),
('FxPro Review', '/broker/fxpro', 'Complete FxPro broker review', 3),
('IC Markets Review', '/broker/icmarkets', 'Complete IC Markets broker review', 4),
('About Us', '/about', 'Learn about our team and methodology', 5),
('Contact', '/contact', 'Get in touch with our team', 6);