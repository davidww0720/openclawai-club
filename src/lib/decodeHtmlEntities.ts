import he from "he";

/**
 * Decode HTML entities that sometimes leak into rendered content
 * (e.g. &ldquo; &rdquo; &mdash; &nbsp;).
 */
export function decodeHtmlEntities(input: string): string {
  // `he.decode` also handles numeric entities.
  return he.decode(input, {
    isAttributeValue: false,
    strict: false,
  });
}
