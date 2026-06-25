import { cn } from "@/lib/utils";

interface MIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: number;
  fill?: number;
  weight?: number;
  grade?: number;
  opticalSize?: number;
}

export default function MIcon({
  name,
  size = 24,
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  className,
  style,
  ...props
}: MIconProps) {
  return (
    <span
      className={cn("material-symbols-outlined select-none", className)}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
        ...style,
      }}
      {...props}
    >
      {name}
    </span>
  );
}
