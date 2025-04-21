import { NextRequest, NextResponse } from "next/server";
import { executeGraphQL } from "@/lib/graphql";
import { HardwareChatMessageDocument } from "@/gql/graphql";

interface ChatRequestBody {
	query: string;
	sessionId?: string;
}

export async function POST(request: NextRequest) {
	try {
		const body = (await request.json()) as ChatRequestBody;
		const { query, sessionId } = body;

		if (!query) {
			return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
		}

		const result = await executeGraphQL(HardwareChatMessageDocument, {
			variables: {
				query,
				sessionId: sessionId || undefined,
			},
			cache: "no-cache",
		});

		return NextResponse.json(result.hardwareChatMessage);
	} catch (error) {
		console.error("Chat API error:", error);
		return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
	}
}
