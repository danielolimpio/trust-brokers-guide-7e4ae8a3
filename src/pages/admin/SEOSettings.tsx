import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Globe, 
  Code, 
  BarChart3, 
  Save,
  Eye,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SEOSettings {
  id?: string;
  site_title: string;
  meta_description: string;
  secondary_description?: string;
  canonical_url: string;
  robots_txt: string;
  sitemap_enabled: boolean;
  ga4_measurement_id?: string;
  gsc_verification_tag?: string;
  gtm_container_id?: string;
}

const SEOSettingsPage = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<SEOSettings>({
    site_title: '',
    meta_description: '',
    secondary_description: '',
    canonical_url: '',
    robots_txt: '',
    sitemap_enabled: true,
    ga4_measurement_id: '',
    gsc_verification_tag: '',
    gtm_container_id: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('seo_settings')
        .select('*')
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading SEO settings:', error);
        return;
      }

      if (data) {
        setSettings(data);
      }
    } catch (error) {
      console.error('Error loading SEO settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      if (settings.id) {
        const { error } = await supabase
          .from('seo_settings')
          .update(settings)
          .eq('id', settings.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('seo_settings')
          .insert([settings]);

        if (error) throw error;
      }

      toast({
        title: "Settings Saved",
        description: "SEO settings have been updated successfully.",
      });

      loadSettings();
    } catch (error) {
      console.error('Error saving SEO settings:', error);
      toast({
        title: "Error",
        description: "Failed to save SEO settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (key: keyof SEOSettings, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const getCharacterCount = (text: string, limit: number) => {
    const count = text.length;
    const isOverLimit = count > limit;
    return (
      <span className={`text-xs ${isOverLimit ? 'text-destructive' : 'text-muted-foreground'}`}>
        {count}/{limit}
        {isOverLimit && <AlertCircle className="inline ml-1 h-3 w-3" />}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">SEO Settings</h1>
          <p className="text-muted-foreground">
            Manage your site's SEO configuration and optimization
          </p>
        </div>
        <Button onClick={saveSettings} disabled={saving}>
          <Save className="mr-2 h-4 w-4" />
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center">
            <Search className="mr-2 h-4 w-4" />
            General SEO
          </TabsTrigger>
          <TabsTrigger value="technical" className="flex items-center">
            <Code className="mr-2 h-4 w-4" />
            Technical SEO
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* Global SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                Global Site Settings
              </CardTitle>
              <CardDescription>
                These settings apply to your entire website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site_title">Site Title</Label>
                <Input
                  id="site_title"
                  value={settings.site_title}
                  onChange={(e) => updateSetting('site_title', e.target.value)}
                  placeholder="BrokerTrusted - Most Trusted Forex Brokers"
                />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">
                    This appears in search results and browser tabs
                  </p>
                  {getCharacterCount(settings.site_title, 60)}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta_description">Primary Meta Description</Label>
                <Textarea
                  id="meta_description"
                  value={settings.meta_description}
                  onChange={(e) => updateSetting('meta_description', e.target.value)}
                  placeholder="Discover the most trusted forex brokers. Professional reviews, rankings and analysis to help you choose the right broker."
                  rows={3}
                />
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">
                    Main description for search engines and social sharing
                  </p>
                  {getCharacterCount(settings.meta_description, 155)}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondary_description">Secondary Description (Optional)</Label>
                <Textarea
                  id="secondary_description"
                  value={settings.secondary_description || ''}
                  onChange={(e) => updateSetting('secondary_description', e.target.value)}
                  placeholder="Alternative description for specific contexts"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  Alternate description used in specific contexts or social sharing
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="canonical_url">Canonical URL</Label>
                <Input
                  id="canonical_url"
                  value={settings.canonical_url}
                  onChange={(e) => updateSetting('canonical_url', e.target.value)}
                  placeholder="https://brokertrusted.com"
                />
                <p className="text-xs text-muted-foreground">
                  The primary domain for your website
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Search Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-4 w-4" />
                Search Preview
              </CardTitle>
              <CardDescription>
                How your site will appear in Google search results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 bg-white">
                <div className="text-blue-600 text-lg hover:underline cursor-pointer">
                  {settings.site_title || 'Your Site Title'}
                </div>
                <div className="text-green-700 text-sm">
                  {settings.canonical_url || 'https://yoursite.com'}
                </div>
                <div className="text-gray-600 text-sm mt-1">
                  {settings.meta_description || 'Your meta description will appear here...'}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          {/* Technical SEO */}
          <Card>
            <CardHeader>
              <CardTitle>Robots.txt Editor</CardTitle>
              <CardDescription>
                Control how search engines crawl your website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="robots_txt">Robots.txt Content</Label>
                <Textarea
                  id="robots_txt"
                  value={settings.robots_txt}
                  onChange={(e) => updateSetting('robots_txt', e.target.value)}
                  placeholder="User-agent: *&#10;Allow: /"
                  rows={8}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Configure search engine crawling directives
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>XML Sitemap</CardTitle>
              <CardDescription>
                Manage your website's sitemap settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Generate XML Sitemap</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically generate and maintain sitemap.xml
                  </p>
                </div>
                <Switch
                  checked={settings.sitemap_enabled}
                  onCheckedChange={(checked) => updateSetting('sitemap_enabled', checked)}
                />
              </div>
              
              {settings.sitemap_enabled && (
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Sitemap URL:</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {settings.canonical_url}/sitemap.xml
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Analytics Integration */}
          <Card>
            <CardHeader>
              <CardTitle>Google Analytics 4</CardTitle>
              <CardDescription>
                Configure Google Analytics tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ga4_measurement_id">GA4 Measurement ID</Label>
                <Input
                  id="ga4_measurement_id"
                  value={settings.ga4_measurement_id || ''}
                  onChange={(e) => updateSetting('ga4_measurement_id', e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                />
                <p className="text-xs text-muted-foreground">
                  Your Google Analytics 4 Measurement ID
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Google Search Console</CardTitle>
              <CardDescription>
                Verify your site with Google Search Console
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gsc_verification_tag">Verification Meta Tag</Label>
                <Input
                  id="gsc_verification_tag"
                  value={settings.gsc_verification_tag || ''}
                  onChange={(e) => updateSetting('gsc_verification_tag', e.target.value)}
                  placeholder="content value from Google Search Console"
                />
                <p className="text-xs text-muted-foreground">
                  Paste the content attribute value from the verification meta tag
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Google Tag Manager</CardTitle>
              <CardDescription>
                Configure Google Tag Manager container
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gtm_container_id">GTM Container ID</Label>
                <Input
                  id="gtm_container_id"
                  value={settings.gtm_container_id || ''}
                  onChange={(e) => updateSetting('gtm_container_id', e.target.value)}
                  placeholder="GTM-XXXXXXX"
                />
                <p className="text-xs text-muted-foreground">
                  Your Google Tag Manager container ID
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOSettingsPage;