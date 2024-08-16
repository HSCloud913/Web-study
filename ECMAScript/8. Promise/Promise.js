/*
    생성
*/

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('result');
    }
    else {
        reject('faliure reason');
    }
});



/*
    후속처리 Method
*/

function get(url) {
    // Promise 객체의 생성과 반환
    return new Promise((resolve, reject) => {
        // XMLHttpRequest 객체 생성
        const xhr = new XMLHttpRequest();

        // 서버 응답 시 호출될 이벤트 핸들러
        xhr.onreadystatechange = function () {
            // 서버 응답 완료
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) { // 정상 응답
                    // resolve 메소드에 처리 결과를 전달
                    resolve(xhr.response);
                } else { // 비정상 응답
                    // reject 메소드에 에러 메시지를 전달
                    reject('Error: ' + xhr.status);
                }
            }
        };

        // 비동기 방식으로 Request를 오픈한다
        xhr.open('GET', url);
        // Request를 전송한다
        xhr.send();
    });
}

const url = 'http://jsonplaceholder.typicode.com/post/1';
get(url).then(
    // 첫 번째 콜백 함수는 성공(fulfilled, resolve 함수가 호출된 상태) 시 호출된다.
    result => document.getElementById('result').innerHTML = result,
    // 두 번째 함수는 실패(rejected, reject 함수가 호출된 상태) 시 호출된다.
    error => console.log(error) // 비동기 처리에서 발생한 에러(reject 함수가 호출된 상태)만을 캐치
);



/*
    프로미스의 에러 처리
*/

get(url)
    .then(result => document.getElementById('result').innerHTML = result)
    .catch(error => console.log(error)); // then 메소드 내부에서 발생한 에러도 캐치함



/*
    프로미스 체이닝
    - 프로미스는 후속 처리 메소드를 체이닝(chainning)하여 여러 개의 프로미스를 연결하여 사용할 수 있음 -> 콜백 헬 해결

    프로미스의 정적 메소드
    -  4가지 정적 메소드를 제공

    Link: https://poiemaweb.com/es6-promise
*/