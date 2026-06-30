import { useState } from "react";
import { Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { danielOlimpio, type AuthorSocial } from "@/data/author";

const iconFor = (platform: AuthorSocial["platform"]) => {
  switch (platform) {
    case "linkedin":
      return Linkedin;
    case "facebook":
      return Facebook;
    case "x":
      return Twitter;
    case "instagram":
      return Instagram;
    case "website":
    default:
      return Globe;
  }
};

export const AuthorInline = () => (
  <div className="flex items-center gap-3">
    <img
      src={danielOlimpio.photo}
      alt={`${danielOlimpio.name} - ${danielOlimpio.role}`}
      title={danielOlimpio.name}
      className="h-11 w-11 rounded-full object-cover ring-2 ring-emerald-300/40"
      width={44}
      height={44}
      loading="lazy"
    />
    <div className="leading-tight">
      <p className="text-sm font-semibold text-white">{danielOlimpio.name}</p>
      <p className="text-xs text-slate-300">{danielOlimpio.role}</p>
    </div>
  </div>
);

export const AuthorCard = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      aria-label="Sobre o autor"
      className="mt-14 rounded-3xl border bg-gradient-to-br from-slate-950 to-primary p-6 text-white shadow-elegant md:p-8"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <img
          src={danielOlimpio.photo}
          alt={`${danielOlimpio.name} - Web Developer and Forex Professional`}
          title={danielOlimpio.name}
          className="h-28 w-28 flex-shrink-0 rounded-2xl object-cover ring-2 ring-emerald-300/40"
          width={112}
          height={112}
          loading="lazy"
        />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Author</p>
          <h2 className="mt-1 text-2xl font-bold">{danielOlimpio.name}</h2>
          <p className="mt-1 text-emerald-100">{danielOlimpio.role}</p>
          <p className="mt-4 leading-7 text-slate-200">{danielOlimpio.shortBio}</p>

          {expanded && (
            <div className="mt-4 space-y-3 leading-7 text-slate-200">
              {danielOlimpio.fullBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => setExpanded((value) => !value)}
              variant="secondary"
              size="sm"
              className="bg-white text-primary hover:bg-white/90"
            >
              {expanded ? "Ver Menos" : "Ver Mais"}
            </Button>
            <div className="flex flex-wrap items-center gap-2">
              {danielOlimpio.socials.map((social) => {
                const Icon = iconFor(social.platform);
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={`${danielOlimpio.name} on ${social.label}`}
                    title={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:text-emerald-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
