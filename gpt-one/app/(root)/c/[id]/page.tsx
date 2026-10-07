import { ConversationView } from "@/features/coversation/components/conversation-view";
import { loadChatMessages } from "@/features/ai/actions/chat-store";

/**
 * Conversation page — renders the selected chat.
 */
const page = async ({ params }: PageProps<"/c/[id]">) => {
  const { id } = await params;
  const initialMessages = await loadChatMessages(id);

  return <ConversationView conversationId={id} initialMessages={initialMessages} />;
};

export default page;
