import type { Expense } from "../types/Expense";

export const expenses: Expense[] = [
  {
    id: 1,
    projectId: 1,
    description: "Purchase of cement for road repair",
    amount: 350000,
    date: "2025-01-10",
  },
  {
    id: 2,
    projectId: 1,
    description: "Labor wages for construction workers",
    amount: 500000,
    date: "2025-01-15",
  },
  {
    id: 3,
    projectId: 1,
    description: "Rental of road construction equipment",
    amount: 150000,
    date: "2025-01-18",
  },
  {
    id: 4,
    projectId: 2,
    description: "Drainage clearing equipment rental",
    amount: 120000,
    date: "2025-02-02",
  },
  {
    id: 5,
    projectId: 2,
    description: "Waste disposal and hauling services",
    amount: 95000,
    date: "2025-02-05",
  },
  {
    id: 6,
    projectId: 2,
    description: "Protective gear for cleanup workers",
    amount: 30000,
    date: "2025-02-07",
  },
  {
    id: 7,
    projectId: 1,
    description: "Gravel and sand materials",
    amount: 200000,
    date: "2025-01-22",
  },
  {
    id: 8,
    projectId: 2,
    description: "Transportation for debris removal",
    amount: 60000,
    date: "2025-02-09",
  },
];
