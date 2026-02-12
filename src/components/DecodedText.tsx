import { decodeHtmlEntities } from "@/lib/decodeHtmlEntities";

export function DecodedText({ text }: { text: string }) {
  return <>{decodeHtmlEntities(text)}</>;
}
