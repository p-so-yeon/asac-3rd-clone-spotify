import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

//twMerge : tailwind class의 스타일 충돌을 방지, 가장 마지막에 선언한 스타일만 적용
//clsx : 조건부 렌더링에 필요한 추가 ClassName과 기존 ClassName 병합용 라이브러리

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
