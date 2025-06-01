export async function fetchBio(person: string): Promise<string> {
  const delay = person === 'Bob' ? 2000 : 200;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve('이것은 ' + person + '의 일대기입니다.');
    }, delay);
  });
}
