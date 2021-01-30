const axios = require('axios');
const cheerio = require('cheerio');
const Film = require('../models/Film')

const coreUrl = 'https://www.ivi.ru'
const url = 'https://www.ivi.ru/movies/filters/boeviki+fantastika+fentezi?sort=year'

const setFilm = function() {
    console.log('film scarp start')
    try {
        axios.get(url)
            .then(response => {
                setFilms(getData(response.data))
            })
            .catch(error => {
                console.error(error)
            })

        const getData = html => {
            let data = [];
            const $ = cheerio.load(html)

            $('.genre__gallery.gallery ul li').each((i, elem) => {
            data.push({
                title: $(elem).find('.nbl-slimPosterBlock__title').text(),
                genre: 'Боевики, Фантастика, Фэнтези',
                description: '-',
                link: `${coreUrl}${$(elem).find('a[data-content-id]').attr('href')}`
                })
            })
            return data
        }
    } catch (e) {  }

    const setFilms = async (data) => {
        try {
            data.map(async (item) => {
                let candidateUpdate = false

                try {
                    const candidate = await Film.findOne({title: item.title})
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
                        const film = new Film(item)
                        await film.save()
                    }
                } catch (e) {
                    console.log('error', e)
                }
            })
        } catch (e) {
            console.log('error', e)
        }
    }

}

module.exports = setFilm
