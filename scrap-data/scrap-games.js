const axios = require('axios')
const cheerio = require('cheerio')
const Game = require('../models/Game')

const urlS = 'https://store.steampowered.com/tags/ru/%D0%A0%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%B8%D0%B3%D1%80%D0%B0/'
// const urlX = 'https://'

const setGame = async function() {
    console.log('games scrap start')

    try {
        const scrapPage = (url) => {
            axios.get(url)
                .then(response => {
                    setGames(getData(response.data))
                })
                .catch(error => {
                    console.log(error)
                })
        }

        const getData = html => {
            let data = []
            const $ = cheerio.load(html)

            $('#NewReleasesRows .tab_item').each((index, elem) => {
                data.push({
                    title: $(elem).find('.tab_item_name').text(),
                    description: $(elem).find('.tab_item_details').text().trim(),
                    image: $(elem).find('.tab_item_cap img').attr('src'),
                    link: $(elem).attr('href')
                })
            })
            return data
        }

        scrapPage(urlS)
        // scrapPage(urlS)
    } catch (e) {
        console.log(e)
    }

    const setGames = async (data) => {
        try {
            data.map(async item => {
                let candidateUpdate = false

                try {
                    const candidate = await Game.findOne({title: item.title})
                    if (candidate) {
                        if (candidate.description !== item.description) {
                            candidate.description = item.description
                            candidateUpdate = true
                        } else {
                            return  null
                        }
                    }

                    if (candidateUpdate) {
                        candidate.save()
                    } else {
                        const game = new Game(item)
                        await game.save()
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

module.exports = setGame