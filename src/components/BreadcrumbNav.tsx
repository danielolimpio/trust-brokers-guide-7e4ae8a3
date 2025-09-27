import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  const location = useLocation();
  
  // Auto-generate breadcrumbs if not provided
  const autoItems: BreadcrumbItem[] = items || generateBreadcrumbs(location.pathname);

  return (
    <nav className={className} aria-label="Breadcrumb navigation">
      <Breadcrumb>
        <BreadcrumbList>
          {/* Home link */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center space-x-1">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {autoItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {item.current || !item.href ? (
                  <BreadcrumbPage className="font-medium text-foreground">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.href} className="text-muted-foreground hover:text-foreground">
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://brokertrusted.com/"
              },
              ...autoItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": item.href ? `https://brokertrusted.com${item.href}` : undefined
              }))
            ]
          })
        }}
      />
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  let currentPath = '';
  
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const isLast = index === paths.length - 1;
    
    // Convert path to readable label
    const label = pathToLabel(path);
    
    breadcrumbs.push({
      label,
      href: isLast ? undefined : currentPath,
      current: isLast
    });
  });
  
  return breadcrumbs;
}

function pathToLabel(path: string): string {
  const pathLabels: Record<string, string> = {
    'broker': 'Brokers',
    'guides': 'Guides',
    'regulated-brokers': 'Regulated Brokers',
    'compare-brokers': 'Compare Brokers',
    'about': 'About',
    'contact': 'Contact',
  };
  
  return pathLabels[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
}