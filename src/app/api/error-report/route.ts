import { LinearClient } from '@linear/sdk';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check required environment variables
    const apiKey = process.env.LINEAR_API_KEY;
    const teamId = process.env.LINEAR_TEAM_ID;

    if (!apiKey || !teamId) {
      return NextResponse.json(
        {
          error:
            'Missing required environment variables: LINEAR_API_KEY or LINEAR_TEAM_ID',
        },
        { status: 500 }
      );
    }

    // Parse the minimal error data from the request body
    const errorData = await request.json();
    const { message, digest, name } = errorData;

    // Initialize Linear client with API key from environment
    const linear = new LinearClient({
      apiKey: apiKey,
    });

    // Use digest for precise duplicate detection
    // Generate a unique digest for test errors if none exists
    const errorDigest =
      digest || `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Check for existing tickets with the same digest
    const existingTickets = await linear.issues({
      filter: {
        team: { id: { eq: teamId } },
        description: { contains: `Digest: ${errorDigest}` },
      },
    });

    // If ticket with same digest exists, don't create duplicate
    if (existingTickets.nodes.length > 0) {
      return NextResponse.json({
        success: true,
        ticketId: existingTickets.nodes[0].identifier,
        message: 'Ticket with same digest already exists',
      });
    }

    // Build minimal error description with only essential info
    const description = `## 🚨 Error Details
**Message:** \`${message}\`
**Digest:** \`${errorDigest}\`
**Timestamp:** ${new Date().toISOString()}
**Component:** ${name || 'Unknown Error Type'}

---
*This error was automatically captured and reported by the Next.js error boundary.*`;

    // Create new ticket
    const ticket = await linear.createIssue({
      teamId: teamId,
      title: `🚨 ${name || 'Error'}: ${message}`,
      description: description,
      priority: 2, // High priority
    });

    // The Linear SDK returns the issue as a Promise, so we need to await it
    const issue = await ticket.issue;

    if (issue) {
      // Try different properties for the identifier
      const ticketIdentifier =
        issue.identifier || issue.id || String(issue.number) || 'Unknown';
      return NextResponse.json({
        success: true,
        ticketId: ticketIdentifier,
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to create ticket - no issue returned' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Failed to create Linear ticket:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
