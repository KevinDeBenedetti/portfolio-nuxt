type ContentElement = unknown[] | null;

const getElementText = (element: ContentElement): string => {
  if (!element || !Array.isArray(element)) return '';
  const text = element[2];
  if (text === null || text === undefined) return '';
  if (typeof text === 'string') return text;
  if (typeof text === 'number' || typeof text === 'boolean') return String(text);
  return '';
};

const getElementAttributes = (element: ContentElement): Record<string, unknown> => {
  if (!element || !Array.isArray(element)) return {};
  const attrs = element[1];
  if (attrs !== null && typeof attrs === 'object' && !Array.isArray(attrs)) {
    return Object.fromEntries(Object.entries(attrs));
  }
  return {};
};

export const useContentParser = (body: unknown[]) => {
  const findElement = (tagName: string, index: number = 0): ContentElement => {
    const elements =
      body?.filter((item): item is unknown[] => Array.isArray(item) && item[0] === tagName) || [];
    return elements[index] ?? null;
  };

  const getAllElements = (tagName: string): ContentElement[] => {
    return (
      body?.filter((item): item is unknown[] => Array.isArray(item) && item[0] === tagName) || []
    );
  };

  return {
    findElement,
    getElementText,
    getElementAttributes,
    getAllElements,
    // Specific helpers
    h1: computed(() => {
      const element = findElement('h1');
      return element ? getElementText(element) : '';
    }),
    h2: computed(() => {
      const element = findElement('h2');
      return element ? getElementText(element) : '';
    }),
    firstParagraph: computed(() => {
      const element = findElement('p');
      return element ? getElementText(element) : '';
    }),
  };
};
