// 1. React.ReactNode
// - JSX, TSX 에서 자식으로 전달할 수 있는 모든 타입 포함
// - string, number, boolean, null, undefined, React elements, arrays 등을 포함하는 포괄적인 타입
// - 가장 유연하고 일반적인 사용 사례에 적합
interface ModalRendererProps {
  title: string;
  children: React.ReactNode;
}

// 2. React.ReactElement
// - JSX, TSX 엘리먼트만 허용하는 더 제한적인 타입
// - 문자열, 숫자와 같은 원시값은 허용하지 않음
// - 특정 컴포넌트나 엘리먼트만 자식으로 받고 싶을 때 사용
interface ModalRendererProps {
  title: string;
  children: React.ReactElement;
}

// - TypeScript로는 특정 JSX 엘리먼트 타입만 허용하도록 제한할 수 없음
// - <li> 엘리먼트만 자식으로 받도록 타입을 지정할 수는 없음
