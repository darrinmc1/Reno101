/**
 * Merchant-of-record disclosure for Empire HQ / TTPN Pty Ltd.
 * Exact compliance copy — do not paraphrase.
 */
export const MERCHANT_OF_RECORD_COPY =
  "Part of the Empire HQ network. Payments are charged by TTPN Pty Ltd (statement may show as TTPN or TTPN* plus the product name)."

export function MerchantOfRecordDisclosure({
  className = "text-xs text-muted-foreground",
}: {
  className?: string
}) {
  return <p className={className}>{MERCHANT_OF_RECORD_COPY}</p>
}
