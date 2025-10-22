export type IncomeType = "monthly" | "annual";

export interface TaxResult {
  taxAmount: number;
  effectiveRate: number;
}
