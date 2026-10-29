import catalog from "../content/cooking-visuals.json" with { type: "json" };
import sequences from "../content/cooking-sequences.json" with { type: "json" };

const visuals = new Map(
  catalog.visuals.map((entry) => [
    `${entry.recipeId}:${entry.stepIndex}`,
    entry,
  ]),
);
const sequenceSteps = new Set(
  sequences.steps.map((entry) => `${entry.recipeId}:${entry.stepIndex}`),
);

export function getCookingStepMedia(recipe, stepIndex) {
  const recipeId = typeof recipe === "string" ? recipe : recipe?.id;
  if (!Number.isInteger(stepIndex)) return null;
  const visual = visuals.get(`${recipeId}:${stepIndex}`);
  if (!visual) return null;
  const stem = `${recipeId}-step-${stepIndex + 1}`;
  const isSequence = sequenceSteps.has(`${recipeId}:${stepIndex}`);
  return {
    recipeId,
    stepIndex,
    title: visual.title,
    alt: visual.alt,
    lookFor: visual.lookFor,
    poster: `media/cooking/${stem}.webp`,
    ...(isSequence
      ? { kind: "sequence", sequence: `media/cooking/${stem}-sequence.webp` }
      : { kind: "video", video: `media/cooking/${stem}.mp4` }),
  };
}
