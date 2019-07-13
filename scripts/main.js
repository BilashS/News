function getNews(url) {
    return $.ajax({
        type: 'GET',
        url: url,
    });
}
$('.news-1').on('click', function () {
    getNews("https://newsapi.org/v2/everything?domains=wsj.com&q=bitcoin&from=18.03.2019&to=24.03.2019&apiKey=041ae30b6c264413b1b7d64082862238")
        .then(function (data) {
            console.log(data);
            $('.news-descriptions').text(data.articles[0].content);
        });
});
$('.news-2').on('click', function () {
    getNews("https://newsapi.org/v2/everything?domains=wsj.com&from=25.03.2019&to=31.03.2019&apiKey=041ae30b6c264413b1b7d64082862238")
        .then(function (data) {
            console.log(data);
            $('.news-descriptions').text(data.articles[3].content);
        });
});
$('.news-3').on('click', function () {
    getNews("https://newsapi.org/v2/everything?domains=wsj.com&q=bitcoin&from=01.04.2019&to=02.04.2019&apiKey=041ae30b6c264413b1b7d64082862238")
        .then(function (data) {
            console.log(data);
            $('.news-descriptions').text(data.articles[0].content);
        });
});


