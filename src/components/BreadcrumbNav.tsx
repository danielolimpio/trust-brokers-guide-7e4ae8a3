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
  variant?: "default" | "light";
}

export function BreadcrumbNav({ items, className, variant = "default" }: BreadcrumbNavProps) {
  const location = useLocation();

  // Auto-generate breadcrumbs if not provided
  const autoItems: BreadcrumbItem[] = items || generateBreadcrumbs(location.pathname);

  const isLight = variant === "light";
  const homeLinkClass = isLight
    ? "flex items-center space-x-1 text-white hover:text-emerald-200"
    : "flex items-center space-x-1";
  const linkClass = isLight
    ? "text-white/85 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const pageClass = isLight
    ? "font-semibold text-white"
    : "font-medium text-foreground";
  const separatorClass = isLight ? "text-white/70" : "";

  return (
    <nav className={className} aria-label="Breadcrumb navigation">
      <Breadcrumb>
        <BreadcrumbList className={isLight ? "text-white" : undefined}>
          {/* Home link */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className={homeLinkClass}>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {autoItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <BreadcrumbSeparator className={separatorClass}>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {item.current || !item.href ? (
                  <BreadcrumbPage className={pageClass}>
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.href} className={linkClass}>
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