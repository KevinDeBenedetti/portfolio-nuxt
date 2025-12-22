const getElementText = (element: unknown[]) => {
  return element?.[2] || '';
};

const getElementAttributes = (element: unknown[]) => {
  return element?.[1] || {};
};

export const useContentParser = (body: unknown[]) => {
  const findElement = (tagName: string, index: number = 0) => {
    const elements = body?.filter((item) => Array.isArray(item) && item[0] === tagName) || [];
    return elements[index] || null;
  };

  const getAllElements = (tagName: string) => {
    return body?.filter((item) => Array.isArray(item) && item[0] === tagName) || [];
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
