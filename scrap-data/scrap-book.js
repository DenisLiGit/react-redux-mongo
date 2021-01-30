const axios = require('axios');
const cheerio = require('cheerio');
const Book = require('../models/Book')

const coreUrl = 'https://www.livelib.ru'
const urlF1 = 'https://www.livelib.ru/genre/%D0%A4%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/novelties'
const urlF2 = 'https://www.livelib.ru/genre/%D0%A4%D1%8D%D0%BD%D1%82%D0%B5%D0%B7%D0%B8/novelties'

const setBook = function() {
    console.log('book scarp start')
    try {
        const scrapPage = (url) => {
            axios.get(url)
                .then(response => {
                    setBooks(getData(response.data))
                })
                .catch(error => {
                    console.error(error)
                })
        }

        const getData = html => {
            let data = [];
            const $ = cheerio.load(html)

            $('div#booklist .brow-inner').each((i, elem) => {
                data.push({
                    title: $(elem).find('.brow-book-name').text(),
                    cycle: $(elem).find('.cycle-title').text(),
                    author: $(elem).find('.brow-book-author').text(),
                    genre: $(elem).find('.brow-genres a').text(),
                    description: `${$(elem).find('.brow-marg p:last-child').text()} ${$(elem).find('.brow-marg p:first-child').text()}`,
                    link: `${coreUrl}${$(elem).find('.cover-wrapper a').attr('href')}`
                })
            })
            return data
        }

        scrapPage(urlF1)
        scrapPage(urlF2)
    } catch (e) {  }

    const setBooks = async (data) => {
        try {
            data.map(async (item) => {
                let candidateUpdate = false

                try {
                    const candidate = await Book.findOne({title: item.title})
                    if (candidate) {
                        if (candidate.description !== item.description) {
                            candidate.description = item.description
                            candidateUpdate = true
                        } else if (candidate.link !== item.link) {
                            candidate.link = item.link
                            candidateUpdate = true
                        } else {
                            return null
                        }
                    }

                    if (candidateUpdate) {
                        candidate.save()
                    } else {
                        const book = new Book(item)
                        await book.save()
                    }

                } catch (e) {
                    console.log('error', e)
                }
            })
        } catch (e) { }
    }
}

module.exports = setBook
