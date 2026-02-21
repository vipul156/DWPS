import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={cn("mb-10", alignClass, className)}>
      {subtitle && (
        <span className="inline-block text-orange font-medium text-sm uppercase tracking-[3px] mb-3 font-rubik">
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-marcellus text-3xl md:text-4xl leading-tight mb-4",
          light ? "text-white" : "text-dark-text"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/80" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "flex gap-1 mt-4",
          align === "center" && "justify-center",
          align === "right" && "justify-end"
        )}
      >
        <span className="block h-1 w-10 bg-primary rounded-full"></span>
        <span className="block h-1 w-4 bg-orange rounded-full"></span>
        <span className="block h-1 w-2 bg-primary/30 rounded-full"></span>
      </div>
    </div>
  );
}
