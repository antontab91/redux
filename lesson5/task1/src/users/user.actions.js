export const NEXT_PAGE = 'PAGINATION/NEXT_PAGE';
export const PREV_PAGE = 'PAGINATION/PREV_PAGE';

export const goNext = () => {
  return {
    type: NEXT_PAGE,
  }
}

export const goPrev = () => {
  return {
    type: PREV_PAGE,
  }
}