import { setupServer } from 'msw/node'

import handler from '@/mock/handler'
// node 환경 설정
export const server = setupServer(...handler)
