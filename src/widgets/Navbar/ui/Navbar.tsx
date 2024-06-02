import { FC, useContext, useMemo } from "react";
import { NavbarProps } from "./Navbar.types";
import { StoreContext } from "app/providers/storeProvider";
import { TopicList, TopicButton, TopicListItem } from "shared/ui/Topic";
import { Skeleton } from "@mui/material";
import TopicSkeleton from "shared/ui/Topic/TopicSkeleton";

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { courses, tag, setTag, isLoading } = useContext(StoreContext);

  const tags = useMemo(() => {
    const tags = new Set<string>();
    for (const card of courses) {
      for (const tag of card.tags) {
        tags.add(tag)
      }
    }
    return [...tags];
  }, [courses])

  const handleClick = (
    tag: string | null,
  ) => {
    setTag(tag);
  };

  return (
    <TopicList className={className}>
      {isLoading
        ? new Array(7).fill(0).map((_, i) =>
          <TopicListItem key={i}>
            <TopicSkeleton variant="rounded" />
          </TopicListItem>)
        : (
          <>
            <TopicListItem>
              <TopicButton
                selected={tag === null}
                onClick={() => handleClick(null)}
              >
                Все темы
              </TopicButton>
            </TopicListItem>
            {tags.map((t, i) =>
              <TopicListItem key={t}>
                <TopicButton
                  selected={t === tag}
                  onClick={() => handleClick(t)}
                >
                  {t}
                </TopicButton>
              </TopicListItem>
            )}
          </>
        )}
    </TopicList>
  );
};

export default Navbar;
