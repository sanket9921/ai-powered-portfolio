export type ActionType = 'render_component';

export interface AIActionPayload {
  action: ActionType;
  component: string;
  targetId?: string;
  summary?: string;
  props?: Record<string, unknown>;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AISummaryRequest {
  userQuery: string;
  context: string;
}

export interface AISummaryResponse {
  summary: string | null;
}
