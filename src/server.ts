import { connectDb } from "./bootstrap/database";
import { serve } from "./bootstrap/app";

serve();
connectDb();
