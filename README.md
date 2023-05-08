# useSuspense

三行代码实现 suspense fetch，兼容 SSR

## Install

```shell
yarn add use-suspense
```

## Usage

```tsx
import { useSuspense } from 'use-suspense'

const resolve = () => {
  return new Promise(r => {
    setTimeout(() => {
      r('resolved')
    }, 1000)
  })
}

function App() {
  const value = useSuspense(() => resolve())
}
```

使用参数，resolve 中需要的参数需要传递给 useSuspense

```tsx
import { useSuspense } from 'use-suspense'

const resolve = () => {
  return new Promise(r => {
    setTimeout(() => {
      r('resolved')
    }, 1000)
  })
}

function App() {
  const [name, setName] = useState('snake')
  // 每次 name 变化触发重新请求
  const value = useSuspense(() => resolve(), { name })
}
```

## Api

`useSuspense(callback: () => Promise, param: Record<string, any>)`：param 作为依赖参数
