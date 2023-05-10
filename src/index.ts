import React, { useMemo, useDeferredValue } from 'react'

export function useSuspense<T = any>(
  callback: () => Promise<T>,
  params: Record<string, any> = {}
) {
  const rawParams = JSON.stringify(params)
  const deferredParam = useDeferredValue(rawParams)
  const memoValue = useMemo(() => callback(), [deferredParam])
  const isSuspending = deferredParam !== rawParams

  return [isSuspending, (React as any).use(memoValue)]
}
