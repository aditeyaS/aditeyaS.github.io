import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import { AppSectionRefs, useAppScroll } from "../app-scroll-context";
import React from "react";
import { LINK_SEARCH_ITEMS, SECTION_SEARCH_ITEMS } from "./data";

interface SearchCommandDialogProps {
  show: boolean;
  onClose: () => void;
}

export const SearchCommandDialog: React.FC<SearchCommandDialogProps> = ({
  show,
  onClose,
}) => {
  const { scrollToSection } = useAppScroll();

  const onSectionSelect = (commandSection: keyof AppSectionRefs) => {
    scrollToSection(commandSection);
    onClose();
  };

  const onLinkSelect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <CommandDialog open={show} onOpenChange={onClose}>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sections">
          {SECTION_SEARCH_ITEMS.map((item, sectionIndex) => (
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
          {LINK_SEARCH_ITEMS.map((item, linkIndex) => (
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
};
