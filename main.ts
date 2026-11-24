import { mkdirSync, writeFileSync } from "node:fs";

// One word for the Wi-Fi: "Eventually".
// The joke is the promise every home network makes and never quite keeps:
// the page loads, the video plays, the call connects — eventually.
// It is the loading angle, but fresh: the field is drowned in relationship
// metaphors (Ghosting, Gaslighting, Peekaboo, Situationship) and the one
// plain loading word, Buffering, is already taken five times over.
// "Eventually" needs no explanation, reads instantly as a network name,
// and is true of Wi-Fi as it is actually lived: nothing is broken, nothing
// is fast, it just arrives... eventually.
const word = "Eventually";

// Gate: 1-20 characters, one word, not only whitespace, no surrounding
// whitespace at all (the judge sees the file exactly as written). Fail
// loudly rather than writing an invalid entry.
if (word.length < 1 || word.length > 20 || /\s/.test(word) || word !== word.trim()) {
  throw new Error(`word is ${JSON.stringify(word)}, must be one word of 1-20 chars`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
