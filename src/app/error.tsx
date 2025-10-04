'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  const [ticketCreated, setTicketCreated] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);
  const hasAttemptedCreation = useRef(false);

  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';

  const createLinearTicket = useCallback(async () => {
    setIsCreatingTicket(true);

    try {
      // Minimal error context - only essential fields to prevent webpack cache issues
      const errorContext = {
        message: error.message,
        digest:
          error.digest ||
          `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: error.name,
      };

      // Send error data to server-side API route
      const response = await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorContext),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setTicketId(result.ticketId);
        setTicketCreated(true);
        if (result.message) {
          console.log(result.message, result.ticketId);
        }
      } else {
        console.error('Failed to create Linear ticket:', result.error);
        setTicketCreated(true); // Mark as completed even if failed to prevent retries
      }
    } catch (ticketError) {
      console.error('Failed to create Linear ticket:', ticketError);
      setTicketCreated(true); // Mark as completed even if failed to prevent retries
    } finally {
      setIsCreatingTicket(false);
    }
  }, [error.digest, error.message, error.name]);

  useEffect(() => {
    if (isDevelopment) {
      // In development, just log the error details to console
      console.error('🚨 Development Error:', {
        message: error.message,
        digest: error.digest,
        timestamp: new Date().toISOString(),
      });
    } else {
      // Only create ticket once per error instance and only in production
      if (
        !hasAttemptedCreation.current &&
        !ticketCreated &&
        !isCreatingTicket
      ) {
        hasAttemptedCreation.current = true;
        createLinearTicket();
      }
    }
  }, [
    isDevelopment,
    error.digest,
    error.message,
    error.stack,
    ticketCreated,
    isCreatingTicket,
    createLinearTicket,
  ]);

  // Minimal error display to prevent webpack cache issues
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Error</h1>
      <p>{error.message}</p>
      {isDevelopment ? (
        <p>Development mode - error logged to console</p>
      ) : isCreatingTicket ? (
        <p>Reporting error...</p>
      ) : ticketId ? (
        <p>Error reported - Ticket #{ticketId}</p>
      ) : (
        <p>Preparing to report error...</p>
      )}
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}
