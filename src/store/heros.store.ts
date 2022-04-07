import { createAction, createReducer, on } from '@ngrx/store';

export const fetchHeros = createAction('[heros] fetch');
export const updateHero = createAction('[heros] update hero', (id: number, hero: any) => ({ id, hero }));
export const removeHero = createAction('[heros] remove hero', (id: number) => ({ id }));

export const initialState = [
  {
    id: 1,
    name: 'Superman',
    description: 'Superman is a fictional superhero appearing in American comic books published by DC Comics.'
  },
  {
    id: 2,
    name: 'Batman',
    description: 'Batman is a fictional superhero appearing in American comic books published by DC Comics.'
  },
  {
    id: 3,
    name: 'Iron man  ',
    description: ''
  },
  {
    id: 4,
    name: 'Aqua man',
    description: 'Superman is a fictional superhero appearing in American comic books published by DC Comics.'
  },
  {
    id: 5,
    name: 'Spider Man',
    description: 'Batman is a fictional superhero appearing in American comic books published by DC Comics.'
  },
  {
    id: 6,
    name: 'Flash',
    description: ''
  }
];

export const createHeroReducer = createReducer(
  initialState,
  on(fetchHeros, (state) => state),

  on(updateHero, (state, { id, hero }) => {
    const index = state.findIndex((a) => a.id === id);
    console.log({ index, hero });

    if (index > -1) {
      return [...state.slice(0, index), hero, ...state.slice(index + 1)];
    }
    return state;
  }),
  on(removeHero, (state, { id }) => {
    const index = state.findIndex((a) => a.id === id);
    if (index > -1) {
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    return state;
  })
);
