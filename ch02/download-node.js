// url에 있는 파일을 savepath에 다운로드

// 다운로드할 url 지정
var url = "http://brightman.co.kr/company/";

// 저장할 위치 지정
var savepath = "test2.html";

// 사용모듈 정의
var http = require("http");
var fs = require("fs");

// 출력지정
var outfile = fs.createWriteStream(savepath);

// 비동기로 url의 파일 다운로드
http.get(url, function (res) {
    res.pipe(outfile);
    res.on("end", function () {
        outfile.close();
        console.log("ok");
    });
});