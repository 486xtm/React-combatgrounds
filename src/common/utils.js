export const getGradeString = (grade) => {
  if (!grade) return "None";
  if (grade === 1) return "Sergeant";
  if (grade === 2) return "Lieutenant";
  if (grade === 3) return "Captain";
  if (grade === 4) return "Colonel";
  if (grade === 5) return "General";
  return "None";
};

export const getColorSchemaByCharacterType = (characterType) => {
  return characterType === "Soldier"
    ? "dark-primary"
    : characterType === "Navyseal"
    ? "dark-navyseal"
    : characterType === "Terrorist"
    ? "dark-terrorist"
    : "primary";
};
