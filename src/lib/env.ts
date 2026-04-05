import { z } from 'zod';

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
});

// Define schema for client-side variables
const clientEnvSchema = z.object({
  NEXT_PUBLIC_HLDS_FRONT_API_URL: z.url(),
  NEXT_PUBLIC_HLDS_FRONT_GRAPHQL_PATH: z.string().optional(),
  NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
});

// Validate server environment
function validateServerEnv() {
  const parsed = serverEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('Invalid server environment variables:');
    console.error(parsed.error.flatten().fieldErrors);
    throw new Error('Invalid server environment configuration');
  }

  return parsed.data;
}

// Validate client environment
function validateClientEnv() {
  const clientEnv = {
    NEXT_PUBLIC_HLDS_FRONT_API_URL: process.env.NEXT_PUBLIC_HLDS_FRONT_API_URL,
    NEXT_PUBLIC_HLDS_FRONT_GRAPHQL_PATH: process.env.NEXT_PUBLIC_HLDS_FRONT_GRAPHQL_PATH,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  };

  const parsed = clientEnvSchema.safeParse(clientEnv);

  if (!parsed.success) {
    console.error('Invalid client environment variables:');
    console.error(parsed.error.flatten().fieldErrors);
    throw new Error('Invalid client environment configuration');
  }

  return parsed.data;
}

export const serverENV = validateServerEnv();
export const clientENV = validateClientEnv();
