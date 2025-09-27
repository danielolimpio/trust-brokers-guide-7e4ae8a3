import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Folder,
  Tag as TagIcon
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  seo_title?: string;
  seo_description?: string;
  canonical_url?: string;
  noindex: boolean;
  created_at: string;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  seo_title?: string;
  seo_description?: string;
  canonical_url?: string;
  noindex: boolean;
  created_at: string;
}

const Categories = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [tagDialogOpen, setTagDialogOpen] = useState(false);

  const [categoryForm, setCategoryForm] = useState({
    name: '',
    slug: '',
    description: '',
    seo_title: '',
    seo_description: '',
    canonical_url: '',
    noindex: false
  });

  const [tagForm, setTagForm] = useState({
    name: '',
    slug: '',
    description: '',
    seo_title: '',
    seo_description: '',
    canonical_url: '',
    noindex: false
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [categoriesResult, tagsResult] = await Promise.all([
        supabase.from('categories').select('*').order('name'),
        supabase.from('tags').select('*').order('name')
      ]);

      if (categoriesResult.error) throw categoriesResult.error;
      if (tagsResult.error) throw tagsResult.error;

      setCategories(categoriesResult.data || []);
      setTags(tagsResult.data || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleCategorySubmit = async () => {
    try {
      if (editingCategory) {
        const { error } = await supabase
          .from('categories')
          .update(categoryForm)
          .eq('id', editingCategory.id);

        if (error) throw error;
        
        toast({
          title: "Category Updated",
          description: "The category has been updated successfully.",
        });
      } else {
        const { error } = await supabase
          .from('categories')
          .insert([categoryForm]);

        if (error) throw error;
        
        toast({
          title: "Category Created",
          description: "The category has been created successfully.",
        });
      }

      setCategoryDialogOpen(false);
      setEditingCategory(null);
      resetCategoryForm();
      loadData();
    } catch (error) {
      console.error('Error saving category:', error);
      toast({
        title: "Error",
        description: "Failed to save category. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleTagSubmit = async () => {
    try {
      if (editingTag) {
        const { error } = await supabase
          .from('tags')
          .update(tagForm)
          .eq('id', editingTag.id);

        if (error) throw error;
        
        toast({
          title: "Tag Updated",
          description: "The tag has been updated successfully.",
        });
      } else {
        const { error } = await supabase
          .from('tags')
          .insert([tagForm]);

        if (error) throw error;
        
        toast({
          title: "Tag Created",
          description: "The tag has been created successfully.",
        });
      }

      setTagDialogOpen(false);
      setEditingTag(null);
      resetTagForm();
      loadData();
    } catch (error) {
      console.error('Error saving tag:', error);
      toast({
        title: "Error",
        description: "Failed to save tag. Please try again.",
        variant: "destructive",
      });
    }
  };

  const resetCategoryForm = () => {
    setCategoryForm({
      name: '',
      slug: '',
      description: '',
      seo_title: '',
      seo_description: '',
      canonical_url: '',
      noindex: false
    });
  };

  const resetTagForm = () => {
    setTagForm({
      name: '',
      slug: '',
      description: '',
      seo_title: '',
      seo_description: '',
      canonical_url: '',
      noindex: false
    });
  };

  const editCategory = (category: Category) => {
    setEditingCategory(category);
    setCategoryForm({
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      seo_title: category.seo_title || '',
      seo_description: category.seo_description || '',
      canonical_url: category.canonical_url || '',
      noindex: category.noindex
    });
    setCategoryDialogOpen(true);
  };

  const editTag = (tag: Tag) => {
    setEditingTag(tag);
    setTagForm({
      name: tag.name,
      slug: tag.slug,
      description: tag.description || '',
      seo_title: tag.seo_title || '',
      seo_description: tag.seo_description || '',
      canonical_url: tag.canonical_url || '',
      noindex: tag.noindex
    });
    setTagDialogOpen(true);
  };

  const deleteCategory = async (id: string) => {
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Category Deleted",
        description: "The category has been deleted successfully.",
      });
      
      loadData();
    } catch (error) {
      console.error('Error deleting category:', error);
      toast({
        title: "Error",
        description: "Failed to delete category. Please try again.",
        variant: "destructive",
      });
    }
  };

  const deleteTag = async (id: string) => {
    try {
      const { error } = await supabase
        .from('tags')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Tag Deleted",
        description: "The tag has been deleted successfully.",
      });
      
      loadData();
    } catch (error) {
      console.error('Error deleting tag:', error);
      toast({
        title: "Error",
        description: "Failed to delete tag. Please try again.",
        variant: "destructive",
      });
    }
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
      <div>
        <h1 className="text-3xl font-bold text-foreground">Categories & Tags</h1>
        <p className="text-muted-foreground">
          Organize your content with categories and tags
        </p>
      </div>

      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList>
          <TabsTrigger value="categories" className="flex items-center">
            <Folder className="mr-2 h-4 w-4" />
            Categories
          </TabsTrigger>
          <TabsTrigger value="tags" className="flex items-center">
            <TagIcon className="mr-2 h-4 w-4" />
            Tags
          </TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Content Categories</CardTitle>
                <CardDescription>
                  Organize your posts into hierarchical categories
                </CardDescription>
              </div>
              <Dialog open={categoryDialogOpen} onOpenChange={setCategoryDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetCategoryForm}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>
                      {editingCategory ? 'Edit Category' : 'Add New Category'}
                    </DialogTitle>
                    <DialogDescription>
                      Create a new category with SEO optimization settings.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category-name">Name</Label>
                        <Input
                          id="category-name"
                          value={categoryForm.name}
                          onChange={(e) => {
                            const name = e.target.value;
                            setCategoryForm(prev => ({
                              ...prev,
                              name,
                              slug: generateSlug(name)
                            }));
                          }}
                          placeholder="Category name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category-slug">Slug</Label>
                        <Input
                          id="category-slug"
                          value={categoryForm.slug}
                          onChange={(e) => setCategoryForm(prev => ({ ...prev, slug: e.target.value }))}
                          placeholder="category-slug"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category-description">Description</Label>
                      <Textarea
                        id="category-description"
                        value={categoryForm.description}
                        onChange={(e) => setCategoryForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Category description"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category-seo-title">SEO Title</Label>
                      <Input
                        id="category-seo-title"
                        value={categoryForm.seo_title}
                        onChange={(e) => setCategoryForm(prev => ({ ...prev, seo_title: e.target.value }))}
                        placeholder="Custom SEO title"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category-seo-desc">SEO Description</Label>
                      <Textarea
                        id="category-seo-desc"
                        value={categoryForm.seo_description}
                        onChange={(e) => setCategoryForm(prev => ({ ...prev, seo_description: e.target.value }))}
                        placeholder="Meta description for this category"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Noindex</Label>
                        <p className="text-xs text-muted-foreground">
                          Prevent search engines from indexing this category
                        </p>
                      </div>
                      <Switch
                        checked={categoryForm.noindex}
                        onCheckedChange={(checked) => setCategoryForm(prev => ({ ...prev, noindex: checked }))}
                      />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setCategoryDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCategorySubmit}>
                      {editingCategory ? 'Update' : 'Create'} Category
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>SEO</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{category.name}</p>
                          {category.description && (
                            <p className="text-xs text-muted-foreground">{category.description}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{category.slug}</TableCell>
                      <TableCell>
                        {category.seo_title ? (
                          <span className="text-green-600 text-sm">✓ Optimized</span>
                        ) : (
                          <span className="text-yellow-600 text-sm">! Needs SEO</span>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(category.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editCategory(category)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteCategory(category.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tags" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Content Tags</CardTitle>
                <CardDescription>
                  Add descriptive tags to help categorize your content
                </CardDescription>
              </div>
              <Dialog open={tagDialogOpen} onOpenChange={setTagDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetTagForm}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Tag
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>
                      {editingTag ? 'Edit Tag' : 'Add New Tag'}
                    </DialogTitle>
                    <DialogDescription>
                      Create a new tag with SEO optimization settings.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tag-name">Name</Label>
                        <Input
                          id="tag-name"
                          value={tagForm.name}
                          onChange={(e) => {
                            const name = e.target.value;
                            setTagForm(prev => ({
                              ...prev,
                              name,
                              slug: generateSlug(name)
                            }));
                          }}
                          placeholder="Tag name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tag-slug">Slug</Label>
                        <Input
                          id="tag-slug"
                          value={tagForm.slug}
                          onChange={(e) => setTagForm(prev => ({ ...prev, slug: e.target.value }))}
                          placeholder="tag-slug"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tag-description">Description</Label>
                      <Textarea
                        id="tag-description"
                        value={tagForm.description}
                        onChange={(e) => setTagForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Tag description"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tag-seo-title">SEO Title</Label>
                      <Input
                        id="tag-seo-title"
                        value={tagForm.seo_title}
                        onChange={(e) => setTagForm(prev => ({ ...prev, seo_title: e.target.value }))}
                        placeholder="Custom SEO title"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tag-seo-desc">SEO Description</Label>
                      <Textarea
                        id="tag-seo-desc"
                        value={tagForm.seo_description}
                        onChange={(e) => setTagForm(prev => ({ ...prev, seo_description: e.target.value }))}
                        placeholder="Meta description for this tag"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Noindex</Label>
                        <p className="text-xs text-muted-foreground">
                          Prevent search engines from indexing this tag
                        </p>
                      </div>
                      <Switch
                        checked={tagForm.noindex}
                        onCheckedChange={(checked) => setTagForm(prev => ({ ...prev, noindex: checked }))}
                      />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setTagDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleTagSubmit}>
                      {editingTag ? 'Update' : 'Create'} Tag
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>SEO</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tags.map((tag) => (
                    <TableRow key={tag.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{tag.name}</p>
                          {tag.description && (
                            <p className="text-xs text-muted-foreground">{tag.description}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{tag.slug}</TableCell>
                      <TableCell>
                        {tag.seo_title ? (
                          <span className="text-green-600 text-sm">✓ Optimized</span>
                        ) : (
                          <span className="text-yellow-600 text-sm">! Needs SEO</span>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(tag.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editTag(tag)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteTag(tag.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Categories;