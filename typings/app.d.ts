type Point = {
  x: number,
  y: number,
  as_array: () => number[]
}

type TranslationMapT = {
  id: string,
  name: string,
  text: string,
  trans: string,
}

type NameMapT = {
  name: string,
  trans: string
}

type AppStateT = {
  w: number,
  h: number,
  baseW: number,
  baseH: number,
  baseNameH: number,
  baseTextH: number,
  baseNameOffset: Point,
  baseTextOffset: Point,
  baseLineOffset: number,
  nameRatio: number,
  textRatio: number,
  nameOffsetRatio: Point,
  textOffsetRatio: Point,
  baseLineOffsetRatio: number,
  localNameH: number,
  localTextH: number,
  localNameOffset: Point,
  localTextOffset: Point,
  localBaseLineOffset: number,
  baseTextMaxWidth: number,
  baseLetterSpacing: number,
  baseLetterSpacingRatio: number,
  localBaseLetterSpacing: number,
}
