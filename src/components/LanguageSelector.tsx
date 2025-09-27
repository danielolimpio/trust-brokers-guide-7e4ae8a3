import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';

// Import flag assets
import englishFlag from '@/assets/flags/english.svg';
import portugueseFlag from '@/assets/flags/portuguese.svg';
import spanishFlag from '@/assets/flags/spanish.svg';

const languages = [
  { code: 'en', name: 'English', flag: englishFlag },
  { code: 'pt', name: 'Português', flag: portugueseFlag },
  { code: 'es', name: 'Español', flag: spanishFlag },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <img 
            src={currentLanguage.flag} 
            alt={currentLanguage.name} 
            className="w-4 h-4 rounded-sm"
          />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <Globe className="w-4 h-4 sm:hidden" />
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img 
              src={language.flag} 
              alt={language.name} 
              className="w-4 h-4 rounded-sm"
            />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};