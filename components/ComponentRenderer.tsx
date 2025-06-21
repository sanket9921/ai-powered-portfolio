import { componentMap } from './componentMap';

export function ComponentRenderer({ content }: { content: string }) {
  try {
    const parsed = JSON.parse(content);
    if (parsed.action === 'render_component') {
      const Comp = componentMap[parsed.component];
      return Comp ? <Comp {...parsed.props} /> : <p>Unknown component.</p>;
    }
  } catch {
    return <p>{content}</p>;
  }

  return null;
}
