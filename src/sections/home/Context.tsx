import { mapValues } from 'lodash';
import React, {
  createContext,
  FC,
  RefObject,
  useContext,
  useMemo,
  useRef,
} from 'react';

type SectionRef = RefObject<HTMLDivElement> | null;

type SectionRefs<T> = Record<keyof T, SectionRef>;

const defaultContext = {
  about: null,
  banner: null,
  blog: null,
  contact: null,
  experience: null,
  skills: null,
};

const scrollOffset = 50; // so Navbar doesn't block view

export const handleScrollTo = (ref: SectionRef) => {
  const hasWindow = !(typeof window === 'undefined');

  if (hasWindow && ref?.current) {
    const current = ref.current;
    const position = current.offsetTop;
    const offset = position - scrollOffset;
    const destination = Math.max(0, offset);

    window.scrollTo({ behavior: 'smooth', top: destination });
  }
};

type SectionRefsMap = SectionRefs<typeof defaultContext>;

type SectionRefsContextShape = {
  refs: SectionRefsMap;
  scrollers: {
    [P in keyof SectionRefsMap]: () => ReturnType<typeof handleScrollTo>;
  };
};

export const SectionsContext = createContext<SectionRefsContextShape>({
  refs: defaultContext,
  scrollers: mapValues(defaultContext, () => () => {}),
});

export const SectionRefsProvider: FC = ({ children }) => {
  const about = useRef<HTMLDivElement>(null);
  const banner = useRef<HTMLDivElement>(null);
  const blog = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);

  const context = useMemo<SectionRefsContextShape>(() => {
    const refs = { about, banner, blog, contact, experience, skills };
    const scrollers = mapValues(refs, (sectionRef) => () =>
      handleScrollTo(sectionRef)
    );
    return { refs, scrollers };
  }, [about, banner, blog, contact, experience, skills]);

  return (
    <SectionsContext.Provider value={context}>
      {children}
    </SectionsContext.Provider>
  );
};

export const useSectionRefs = () => useContext(SectionsContext)['refs'];

export const useSectionScrollers = () =>
  useContext(SectionsContext)['scrollers'];
