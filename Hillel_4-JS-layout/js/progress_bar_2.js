;'use strict';

//  HOMEWORK PROGRESS BAR 2

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkProgressBar2Button.addEventListener('click', function renderProgressBar2Page() {

        let progressBar2Page = document.createElement('div');
        progressBar2Page.className = 'main-content__page';

        let progressBarLine = document.createElement('div');
        progressBarLine.className = 'progress-bar';
        progressBar2Page.appendChild(progressBarLine);

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

        progressBar2Page.appendChild(article);

        let article2 = article.cloneNode(true);
        let article3 = article.cloneNode(true);

        progressBar2Page.appendChild(article2);
        progressBar2Page.appendChild(article3);

        mainContent.replaceChild(progressBar2Page, mainContent.firstChild);

        const articleImages = document.getElementsByClassName('article__image');
        const articleTexts = document.getElementsByClassName('article__text');
        const articleHeaders = document.getElementsByClassName('article__header');
        const articles = document.getElementsByClassName('article');

        const promise = new Promise((resolve) => {

            setTimeout(function() {

                progressBarLine.style.width = 0;
                progressBarLine.addEventListener('transitionend', () => resolve());

            }, 0);
        });

        for (let i = 0; i < articles.length; i++) {

            promise.then(function() {

                if (i === 0) {

                    articleImages[i].style.height = 0;
                } else {

                    const removeImage = () => {
                        articleImages[i].style.height = 0;
                        articleHeaders[i - 1].removeEventListener('transitionend', removeImage);
                    };
                    articleHeaders[i - 1].addEventListener('transitionend', removeImage);
                }

                const removeText = () => {
                    articleTexts[i].style.fontSize = 0;
                    articleImages[i].removeEventListener('transitionend', removeText);
                };
                articleImages[i].addEventListener('transitionend', removeText);

                const removeHeader = () => {
                    articleHeaders[i].style.fontSize = 0;
                    articleTexts[i].removeEventListener('transitionend', removeHeader);
                };
                articleTexts[i].addEventListener('transitionend', removeHeader);
                
                const removeArticle = () => {
                    articles[i].style.height = 0;
                    articles[i].style.padding = 0;
                    articles[i].style.border = 'none';
                    articleHeaders[i].removeEventListener('transitionend', removeArticle);
                };
                articleHeaders[i].addEventListener('transitionend', removeArticle);
            })
        }

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

            articleHeaders[articleHeaders.length - 1].removeEventListener('transitionend', restore);
        };

        articleHeaders[articleHeaders.length - 1].addEventListener('transitionend', function restore() {
            setTimeout(restoreAll, 1000);            
        }); 
    });
});