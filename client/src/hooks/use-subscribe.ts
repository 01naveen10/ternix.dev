import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { emailSchema } from "@/lib/validations";

interface SubscribeData {
  email: string;
}

export function useSubscribe() {
  const [validationError, setValidationError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: async (data: SubscribeData) => {
      try {
        // Validate email before sending
        const validatedData = emailSchema.parse(data);
        
        const response = await apiRequest("POST", "/api/subscribe", validatedData);
        return response.json();
      } catch (error) {
        if (error instanceof Error) {
          setValidationError(error.message);
        }
        throw error;
      }
    },
    onSuccess: () => {
      setValidationError(null);
      // Invalidate any relevant queries
      queryClient.invalidateQueries({ queryKey: ['/api/subscribers'] });
    }
  });

  return {
    subscribe: mutation.mutate,
    subscribeAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error || validationError,
    reset: mutation.reset
  };
}
