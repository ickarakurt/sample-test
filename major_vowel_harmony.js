const isHasMajorVowelHarmony = (word) => {
  const firstVowel = word.match(/[aıoueiöü]/gi)[0]
  const regex = "aıou".includes(firstVowel) ? /[aıou](.*)[eiöü]/gi : /[eiöü](.*)[aıou]/gi;
  return word.match(regex) === null ;
}

export default isHasMajorVowelHarmony;
