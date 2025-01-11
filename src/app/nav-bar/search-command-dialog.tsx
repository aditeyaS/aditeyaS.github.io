import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { COMMAND_LINKS, COMMAND_SECTIONS } from "@/data/command";
import { AppSectionRefs, useAppScroll } from "../providers/scroll";

interface Props {
  show: boolean;
  onClose: () => void;
}

export function SearchCommandDialog({ show, onClose }: Props) {
  const { scrollToSection } = useAppScroll();

  function onSectionSelect(commandSection: keyof AppSectionRefs) {
    scrollToSection(commandSection);
    onClose();
  }

  function onLinkSelect(url: string) {
    window.open(url, "_blank");
  }

  return (
    <CommandDialog open={show} onOpenChange={onClose}>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sections">
          {COMMAND_SECTIONS.map((item, sectionIndex) => (
            <CommandItem
              key={`search-section-${sectionIndex}`}
              onSelect={() => onSectionSelect(item.section)}
            >
              {item.icon}
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Links">
          {COMMAND_LINKS.map((item, linkIndex) => (
            <CommandItem
              key={`search-link-${linkIndex}`}
              onSelect={() => onLinkSelect(item.url)}
              className="data-[selected='true']:underline data-[selected='true']:text-primary data-[selected='true']:bg-background"
            >
              {item.icon}
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
