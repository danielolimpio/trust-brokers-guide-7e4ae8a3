import { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import { 
  BarChart3, 
  FileText, 
  Settings, 
  Tags, 
  Folder,
  LogOut,
  Save,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalTags: number;
  totalMedia: number;
}

interface SEOSettings {
  site_title: string;
  meta_description: string;
  canonical_url: string;
  robots_txt: string;
  sitemap_enabled: boolean;
  ga4_measurement_id: string;
  gsc_verification_tag: string;
  gtm_container_id: string;
  secondary_description: string;
}

const UnifiedAdmin = () => {
  const { user, logout, loading } = useAdmin();
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalCategories: 0,
    totalTags: 0,
    totalMedia: 0,
  });
  const [seoSettings, setSeoSettings] = useState<SEOSettings>({
    site_title: '',
    meta_description: '',
    canonical_url: '',
    robots_txt: '',
    sitemap_enabled: true,
    ga4_measurement_id: '',
    gsc_verification_tag: '',
    gtm_container_id: '',
    secondary_description: '',
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingSEO, setLoadingSEO] = useState(true);
  const [savingSEO, setSavingSEO] = useState(false);

  useEffect(() => {
    if (user) {
      loadDashboardData();
      loadSEOSettings();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const loadDashboardData = async () => {
    try {
      const [postsRes, categoriesRes, tagsRes, mediaRes] = await Promise.all([
        supabase.from('posts').select('status'),
        supabase.from('categories').select('id'),
        supabase.from('tags').select('id'),
        supabase.from('media').select('id'),
      ]);

      const posts = postsRes.data || [];
      const publishedPosts = posts.filter(p => p.status === 'published').length;
      const draftPosts = posts.filter(p => p.status === 'draft').length;

      setStats({
        totalPosts: posts.length,
        publishedPosts,
        draftPosts,
        totalCategories: categoriesRes.data?.length || 0,
        totalTags: tagsRes.data?.length || 0,
        totalMedia: mediaRes.data?.length || 0,
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoadingStats(false);
    }
  };

  const loadSEOSettings = async () => {
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
        setSeoSettings({
          site_title: data.site_title || '',
          meta_description: data.meta_description || '',
          canonical_url: data.canonical_url || '',
          robots_txt: data.robots_txt || '',
          sitemap_enabled: data.sitemap_enabled || true,
          ga4_measurement_id: data.ga4_measurement_id || '',
          gsc_verification_tag: data.gsc_verification_tag || '',
          gtm_container_id: data.gtm_container_id || '',
          secondary_description: data.secondary_description || '',
        });
      }
    } catch (error) {
      console.error('Error loading SEO settings:', error);
    } finally {
      setLoadingSEO(false);
    }
  };

  const saveSEOSettings = async () => {
    setSavingSEO(true);
    try {
      const { error } = await supabase
        .from('seo_settings')
        .upsert([seoSettings]);

      if (error) {
        console.error('Error saving SEO settings:', error);
        toast({
          title: "Error",
          description: "Failed to save SEO settings. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success",
        description: "SEO settings saved successfully!",
      });
    } catch (error) {
      console.error('Error saving SEO settings:', error);
      toast({
        title: "Error",
        description: "Failed to save SEO settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSavingSEO(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const statCards = [
    { title: "Total Posts", value: stats.totalPosts, icon: FileText, color: "text-blue-600" },
    { title: "Published Posts", value: stats.publishedPosts, icon: Eye, color: "text-green-600" },
    { title: "Draft Posts", value: stats.draftPosts, icon: Edit, color: "text-yellow-600" },
    { title: "Categories", value: stats.totalCategories, icon: Folder, color: "text-purple-600" },
    { title: "Tags", value: stats.totalTags, icon: Tags, color: "text-indigo-600" },
    { title: "Media Files", value: stats.totalMedia, icon: BarChart3, color: "text-pink-600" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Settings className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">BrokerTrusted Admin</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {user.email}</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-fit">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="seo">SEO Settings</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {loadingStats ? (
                [...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <Skeleton className="h-4 w-20 mb-2" />
                      <Skeleton className="h-8 w-16" />
                    </CardContent>
                  </Card>
                ))
              ) : (
                statCards.map((card) => (
                  <Card key={card.title}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {card.title}
                          </p>
                          <p className="text-2xl font-bold">{card.value}</p>
                        </div>
                        <card.icon className={`h-8 w-8 ${card.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common administrative tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                  <Button variant="outline">
                    <Folder className="h-4 w-4 mr-2" />
                    Manage Categories
                  </Button>
                  <Button variant="outline">
                    <Tags className="h-4 w-4 mr-2" />
                    Manage Tags
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Site Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Settings Tab */}
          <TabsContent value="seo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>
                  Manage your website's search engine optimization settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {loadingSEO ? (
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="site_title">Site Title</Label>
                        <Input
                          id="site_title"
                          value={seoSettings.site_title}
                          onChange={(e) => setSeoSettings(prev => ({ ...prev, site_title: e.target.value }))}
                          placeholder="Your site title"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="canonical_url">Canonical URL</Label>
                        <Input
                          id="canonical_url"
                          value={seoSettings.canonical_url}
                          onChange={(e) => setSeoSettings(prev => ({ ...prev, canonical_url: e.target.value }))}
                          placeholder="https://brokertrusted.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="meta_description">Meta Description</Label>
                      <Textarea
                        id="meta_description"
                        value={seoSettings.meta_description}
                        onChange={(e) => setSeoSettings(prev => ({ ...prev, meta_description: e.target.value }))}
                        placeholder="A brief description of your website"
                        rows={3}
                      />
                      <p className="text-sm text-muted-foreground">
                        {seoSettings.meta_description.length}/160 characters
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="ga4_measurement_id">GA4 Measurement ID</Label>
                        <Input
                          id="ga4_measurement_id"
                          value={seoSettings.ga4_measurement_id}
                          onChange={(e) => setSeoSettings(prev => ({ ...prev, ga4_measurement_id: e.target.value }))}
                          placeholder="G-XXXXXXXXXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gtm_container_id">GTM Container ID</Label>
                        <Input
                          id="gtm_container_id"
                          value={seoSettings.gtm_container_id}
                          onChange={(e) => setSeoSettings(prev => ({ ...prev, gtm_container_id: e.target.value }))}
                          placeholder="GTM-XXXXXXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gsc_verification_tag">GSC Verification Tag</Label>
                        <Input
                          id="gsc_verification_tag"
                          value={seoSettings.gsc_verification_tag}
                          onChange={(e) => setSeoSettings(prev => ({ ...prev, gsc_verification_tag: e.target.value }))}
                          placeholder="google-site-verification content"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="robots_txt">Robots.txt Content</Label>
                      <Textarea
                        id="robots_txt"
                        value={seoSettings.robots_txt}
                        onChange={(e) => setSeoSettings(prev => ({ ...prev, robots_txt: e.target.value }))}
                        placeholder="User-agent: *&#10;Allow: /"
                        rows={5}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="sitemap_enabled"
                        checked={seoSettings.sitemap_enabled}
                        onCheckedChange={(checked) => setSeoSettings(prev => ({ ...prev, sitemap_enabled: checked }))}
                      />
                      <Label htmlFor="sitemap_enabled">Enable XML Sitemap</Label>
                    </div>

                    <Button onClick={saveSEOSettings} disabled={savingSEO}>
                      <Save className="h-4 w-4 mr-2" />
                      {savingSEO ? 'Saving...' : 'Save SEO Settings'}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Posts Tab */}
          <TabsContent value="posts">
            <Card>
              <CardHeader>
                <CardTitle>Posts Management</CardTitle>
                <CardDescription>
                  Create and manage your blog posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Posts management interface coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories">
            <Card>
              <CardHeader>
                <CardTitle>Categories & Tags</CardTitle>
                <CardDescription>
                  Organize your content with categories and tags
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Categories and tags management interface coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UnifiedAdmin;