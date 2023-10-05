// //앨범타입 = column: 인덱스, 제목, 재생시간
// //플레이리스트= column: 인덱스, 제목, 앨범, 추가한 날짜, 재생시간
// //아티스트= column: 인덱스, 제목, 재생횟수, 재생시간

// import { useState } from 'react'

// //제목: 커버이미지(옵션), 곡제목, 가수이름

// export default function TrackTable({ headers, items = [], showHeader = true }) {
//   //tableType을 필수로 받기
//   if (!headers || !headers.length) {
//     throw new Error('')
//   }
//   //value순서에 맞춰 테이블 데이터 출력하기 위한 배열
//   const headerKey = headers.map((h) => h.value)
//   const onPlayTrack = () => {}
//   const onChangeLike = () => {}

//   return (
//     <table>
//       <thead>
//         <tr>
//           {headers.map((header) => (
//             <th key={header.text}>{header.text}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {items.map((item, index) => (
//           <tr key={index}>

//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }
