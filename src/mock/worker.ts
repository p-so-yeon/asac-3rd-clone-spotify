import { setupWorker } from 'msw'

import handlers from '@/mock/handler'
// 브라우저 환경 설정
export const worker = setupWorker(...handlers)
