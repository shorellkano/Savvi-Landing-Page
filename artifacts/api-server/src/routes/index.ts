import { Router, type IRouter } from "express";

// Import only existing route modules
import healthRouter from "./health";

// Create main router
const router: IRouter = Router();

// Mount only existing route handlers
router.use("/health", healthRouter);

export default router;