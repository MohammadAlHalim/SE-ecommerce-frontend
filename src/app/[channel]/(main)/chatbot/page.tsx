"use client";

import React, { useState, useRef, useEffect } from "react";
import { SendIcon } from "lucide-react"; // Icons for send
import { Loader } from "@/ui/atoms/Loader";

// Metadata is moved to a separate file as it can't be used in client components
// see: metadata.ts in the same folder

interface ChatMessage {
	content: string;
	isUser: boolean;
}

interface ChatResponse {
	response: string;
	chat: {
		sessionId: string;
	};
}

const ChatbotPage: React.FC = () => {
	const [messages, setMessages] = useState<ChatMessage[]>([
		{ content: "How can I help you today?", isUser: false },
	]);
	const [currentMessage, setCurrentMessage] = useState("");
	const [sessionId, setSessionId] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Scroll to bottom of chat when messages change
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	// Load session ID from localStorage if available
	useEffect(() => {
		const savedSessionId = localStorage.getItem("chatSessionId");
		if (savedSessionId) {
			setSessionId(savedSessionId);
		}
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!currentMessage.trim()) return;

		// Add user message to chat
		setMessages((prev) => [...prev, { content: currentMessage, isUser: true }]);

		// Clear input field
		const messageToSend = currentMessage;
		setCurrentMessage("");
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: messageToSend,
					sessionId,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to get a response from the chatbot");
			}

			const data = (await response.json()) as ChatResponse;

			// Save the session ID for future messages
			if (data.chat?.sessionId) {
				setSessionId(data.chat.sessionId);
				localStorage.setItem("chatSessionId", data.chat.sessionId);
			}

			// Add bot response to chat
			setMessages((prev) => [...prev, { content: data.response, isUser: false }]);
		} catch (err) {
			console.error("Error sending message:", err);
			setError("Failed to get a response. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen flex-col bg-white">
			{/* Main Content */}{" "}
			<main className="mx-auto max-w-7xl flex-grow px-4 py-8 lg:px-8">
				<h1 className="mb-6 text-center text-3xl font-bold text-neutral-900">
					Are you reluctant about a pc component? Here&apos;s our latest bot!
				</h1>

				{/* Chat Section */}
				<div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md">
					<h2 className="mb-4 text-xl font-bold text-neutral-900">Chat</h2>
					<div className="h-64 overflow-y-auto rounded-md border border-neutral-300 p-4">
						{messages.map((message, index) => (
							<div key={index} className={`mb-2 ${message.isUser ? "text-right" : ""}`}>
								<span
									className={`inline-block rounded-lg px-3 py-2 text-sm ${
										message.isUser ? "bg-blue-500 text-white" : "bg-neutral-100 text-neutral-800"
									}`}
								>
									{message.isUser ? message.content : `Chatbot: ${message.content}`}
								</span>
							</div>
						))}
						{isLoading && (
							<div className="py-2 text-center">
								<Loader />
							</div>
						)}
						{error && <div className="py-2 text-center text-red-500">{error}</div>}
						<div ref={messagesEndRef} />
					</div>
					<form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
						<input
							type="text"
							placeholder="Type your message..."
							className="flex-1 rounded-md border border-neutral-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
							value={currentMessage}
							onChange={(e) => setCurrentMessage(e.target.value)}
							disabled={isLoading}
						/>
						{/* Send Button */}
						<button
							type="submit"
							className="flex items-center justify-center rounded-md px-4 py-2 text-black hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
							disabled={isLoading || !currentMessage.trim()}
						>
							<SendIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</form>
				</div>
			</main>
		</div>
	);
};

export default ChatbotPage;
