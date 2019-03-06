;'use strict';

//  HOMEWORK PROGRESS BAR 1

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkProgressBar1Button.addEventListener('click', function renderProgressBar1Page() {

        let progressBar1Page = document.createElement('div');
        progressBar1Page.className = 'main-content__page';

        let progressBarLine = document.createElement('div');
        progressBarLine.className = 'progress-bar';
        progressBar1Page.appendChild(progressBarLine);

        let article = document.createElement('article');
        article.className = 'article';
        
        let articleHeader = document.createElement('h2');
        articleHeader.className = 'article__header';
        articleHeader.innerHTML = 'Джомолунгма - «Божественная Мать жизненной энергии»';
        article.appendChild(articleHeader);
        
        let articleText = document.createElement('p');
        articleText.className = 'article__text';
        articleText.innerHTML = 'Основной сезон восхождения на вершину — весна и осень, '
            + 'так как в это время отсутствуют муссоны.';
        article.appendChild(articleText);
        
        let articleImage = document.createElement('img');
        articleImage.className = 'article__image';
        articleImage.src = './images/mountain.jpg';
        articleImage.alt = 'mountain';
        article.appendChild(articleImage);

        progressBar1Page.appendChild(article);

        let article2 = article.cloneNode(true);
        let article3 = article.cloneNode(true);

        progressBar1Page.appendChild(article2);
        progressBar1Page.appendChild(article3);

        mainContent.replaceChild(progressBar1Page, mainContent.firstChild);

        const articleImages = document.getElementsByClassName('article__image');
        const articleTexts = document.getElementsByClassName('article__text');
        const articleHeaders = document.getElementsByClassName('article__header');
        const articles = document.getElementsByClassName('article');
        
        let promise = new Promise((resolve) => {

            setTimeout(function() {

                progressBarLine.style.width = 0;

                progressBarLine.addEventListener('transitionend', function removeImages() {
                    
                    for (let i = 0; i < articleImages.length; i++) {
                        articleImages[i].style.height = 0;
                    }
                    
                    progressBarLine.removeEventListener('transitionend', removeImages);

                    return resolve();
                });        
            }, 0);
        });

        promise.then(function() {

            const removeTexts = () => {
                
                for (let i = 0; i < articleTexts.length; i++) {
                    articleTexts[i].style.fontSize = 0;
                }

                articleImages[0].removeEventListener('transitionend', removeTexts);
            };
            
            articleImages[0].addEventListener('transitionend', removeTexts);
        })
        .then(function() {

            const removeHeaders = () => {
                
                for (let i = 0; i < articleHeaders.length; i++) {
                    articleHeaders[i].style.fontSize = 0;
                }

                articleTexts[0].removeEventListener('transitionend', removeHeaders);
            };

            articleTexts[0].addEventListener('transitionend', removeHeaders);    
        })
        .then(function() {

            const removeArticles = () => {                
                
                for (let i = 0; i < articles.length; i++) {
                    articles[i].style.height = 0;
                    articles[i].style.padding = 0;
                    articles[i].style.border = 'none';
                }

                articleHeaders[0].removeEventListener('transitionend', removeArticles);
            };

            const restoreAll = () => {
                
                for (let i = 0; i < articles.length; i++) {
                        
                    articles[i].style.height = 'auto';
                    articles[i].style.padding = '10px';
                    articles[i].style.border = '1px solid rgb(155, 218, 30)';
                    articleHeaders[i].style.fontSize = '18px';
                    articleTexts[i].style.fontSize = '15px';
                    articleImages[i].style.height = '50px';
                }

                progressBarLine.style.width = '100%';

                articleHeaders[0].removeEventListener('transitionend', restore);
            };

            articleHeaders[0].addEventListener('transitionend', removeArticles);            
            articleHeaders[0].addEventListener('transitionend', function restore() {
                setTimeout(restoreAll, 1000);            
            });            
        });
    });
});