export type Expense = {
  id: string;

  title: string; // Title of the expense (item or service purchased)

  amountCentavos: number; // Amount in centavos (1/100 of a currency unit)
  category: ExpenseCategory;

  txnDate: string; // when the expense occurred, in ISO 8601 format (YYYY-MM-DD)

  createdAt: string; // when the expense was created, in ISO 8601 format (YYYY-MM-DD)
  updatedAt: string;

  merchant?: string; // Optional: Name of the merchant or vendor where the expense occurred
};

type ExpenseCategory =
  'Food' | 'Transport' | 'Entertainment' | 'Utilities' | 'Health' | 'Other';
