# useSuspense

几行代码实现 suspense fetch，兼容 SSR

## Install

```shell
yarn add suspense-use
```

## Usage

```tsx
import { useSuspense } from 'suspense-use'

const resolve = () => {
  return new Promise(r => {
    setTimeout(() => {
      r('resolved')
    }, 1000)
  })
}

function App() {
  const [_, value] = useSuspense(() => resolve())
}
```

使用参数，resolve 中需要的参数需要传递给 useSuspense

```tsx
import { useSuspense } from 'suspense-use'

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
  const [isPending, value] = useSuspense(() => resolve(), { name })
}
```

## Api

`useSuspense(callback: () => Promise, param: Record<string, any>)`：param 作为依赖参数
