import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Subscribe to newsletter endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Validate the request body
      const data = insertSubscriberSchema.parse(req.body);
      
      // Check if the email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(data.email);
      
      if (existingSubscriber) {
        return res.status(409).json({ 
          message: "This email is already subscribed" 
        });
      }
      
      // Save the subscription
      const subscriber = await storage.createSubscriber(data);
      
      return res.status(201).json({
        message: "Successfully subscribed to the newsletter",
        subscriber
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }
      
      console.error("Subscription error:", error);
      return res.status(500).json({ 
        message: "Failed to process subscription" 
      });
    }
  });

  // Get all subscribers (admin endpoint that would be protected in production)
  app.get("/api/subscribers", async (_req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      return res.json(subscribers);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      return res.status(500).json({ 
        message: "Failed to fetch subscribers" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
