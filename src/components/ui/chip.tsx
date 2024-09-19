interface ChipProps extends React.HTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

export const Chip: React.FC<ChipProps> = ({ children, selected, ...props }) => {
  return (
    <button
      className={`border border-primary px-2 py-0.5 rounded-xl font-light text-sm ${
        selected ? "bg-primary" : "hover:bg-primary/50"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
