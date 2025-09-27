import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Users, 
  TrendingUp, 
  Eye, 
  Edit,
  Plus,
  Calendar,
  Activity
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalTags: number;
  totalMedia: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalCategories: 0,
    totalTags: 0,
    totalMedia: 0
  });
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load statistics
      const [posts, categories, tags, media] = await Promise.all([
        supabase.from('posts').select('status'),
        supabase.from('categories').select('id'),
        supabase.from('tags').select('id'),
        supabase.from('media').select('id')
      ]);

      const postsData = posts.data || [];
      const publishedCount = postsData.filter(p => p.status === 'published').length;
      const draftCount = postsData.filter(p => p.status === 'draft').length;

      setStats({
        totalPosts: postsData.length,
        publishedPosts: publishedCount,
        draftPosts: draftCount,
        totalCategories: categories.data?.length || 0,
        totalTags: tags.data?.length || 0,
        totalMedia: media.data?.length || 0
      });

      // Load recent posts
      const { data: recentPostsData } = await supabase
        .from('posts')
        .select(`
          id,
          title,
          status,
          created_at,
          updated_at,
          categories (name)
        `)
        .order('updated_at', { ascending: false })
        .limit(5);

      setRecentPosts(recentPostsData || []);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      description: `${stats.publishedPosts} published, ${stats.draftPosts} drafts`,
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Categories',
      value: stats.totalCategories,
      description: 'Content categories',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Tags',
      value: stats.totalTags,
      description: 'Content tags',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Media Files',
      value: stats.totalMedia,
      description: 'Uploaded files',
      icon: Eye,
      color: 'text-orange-600'
    }
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to the BrokerTrusted admin dashboard
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <Icon className={cn("h-4 w-4", card.color)} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-4 w-4" />
              Recent Posts
            </CardTitle>
            <CardDescription>
              Latest content activity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentPosts.length === 0 ? (
              <p className="text-sm text-muted-foreground">No posts yet</p>
            ) : (
              recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{post.title}</p>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={post.status === 'published' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {post.status}
                      </Badge>
                      {post.categories && (
                        <span className="text-xs text-muted-foreground">
                          {post.categories.name}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Updated {new Date(post.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Create New Post
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Add Category
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              SEO Settings
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Post
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* SEO Health */}
      <Card>
        <CardHeader>
          <CardTitle>SEO Health Score</CardTitle>
          <CardDescription>
            Current SEO optimization status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Score</span>
              <Badge className="bg-green-100 text-green-800">85/100</Badge>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-[85%]"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span>Title Tags</span>
                <span className="text-green-600">✓ Good</span>
              </div>
              <div className="flex justify-between">
                <span>Meta Descriptions</span>
                <span className="text-yellow-600">⚠ Needs Work</span>
              </div>
              <div className="flex justify-between">
                <span>Image Alt Text</span>
                <span className="text-green-600">✓ Good</span>
              </div>
              <div className="flex justify-between">
                <span>Internal Links</span>
                <span className="text-green-600">✓ Good</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;