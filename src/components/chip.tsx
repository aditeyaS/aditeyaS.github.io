interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

export function Chip({ children, selected, ...props }: Props) {
  return (
    <button
      className={`border border-primary px-2  rounded-xl font-light text-sm ${
        selected ? "bg-primary text-primary-foreground" : "hover:bg-primary/50"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
