import React, { useMemo } from 'react'

export function useSuspense<T = any>(
  callback: () => Promise<T>,
  params: Record<string, any> = {}
) {
  const memoValue = useMemo(() => callback(), [JSON.stringify(params)])
  return (React as any).use(memoValue)
}
