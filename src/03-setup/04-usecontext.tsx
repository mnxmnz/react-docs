import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

// useContext Hook 을 사용하면 props drilling 없이 데이터를 전달할 수 있음
// createContext 를 사용하여 Context 객체 생성
// ThemeContext 를 생성하고 기본값으로 'system' 설정
const ThemeContext = createContext<Theme>('system');

// useContext 를 사용하여 ThemeContext 의 값을 가져오는 커스텀 Hook 생성
const useGetTheme = () => useContext(ThemeContext);

export default function MyApp() {
  // theme 상태와 이를 변경할 수 있는 setTheme 생성
  const [theme, setTheme] = useState<Theme>('light');

  // ThemeContext.Provider 를 사용하여 하위 컴포넌트에게 theme 값 제공
  // Provider 내부의 모든 컴포넌트는 useGetTheme Hook 을 통해 theme 값에 접근할 수 있음
  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  // useGetTheme Hook 을 사용하여 현재 theme 값 가져오기
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}
