// url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성새 반환한다.
function parseURL(url = '') {
  // '://' 앞의 문자열(protocol)과 '/' 이전의 '/'로 시작하지 않는 문자열(host)과
  // '/' 이후의 문자열(path)를 검색한다.
  const parseURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parseURL);

  /*
  [
  'https://developer.mozilla.org/ko/docss/web/JavaScript',
  'https',
  'developer.mozilla.org',
  'ko/docss/web/JavaScript',
  index: 0,
  input: 'https://developer.mozilla.org/ko/docss/web/JavaScript',
  groups: undefined
  ]
   */

  if (!parseURL) return {};

  // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출한다.
  const [ protocol, host, path] = parseURL;
  return { protocol, host, path };
}

const parsedURL = parseURL('https://developer.mozilla.org/ko/docss/web/JavaScript');

console.log(parsedURL);
/*
{
  protocol: 'https://developer.mozilla.org/ko/docss/web/JavaScript',
  host: 'https',
  path: 'developer.mozilla.org'
}
 */

let arr = [a, b, c];

const [...arr] = [1, 2, 3];

console.log(a, b, c);